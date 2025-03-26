import { createContext, useEffect, useLayoutEffect, useState } from "react";
import { AccountsService } from "../../api/accounts";
import { api } from "../../api/api";
import { User } from "../../models/User";

type AuthContextType = {
	accessToken: string | undefined;
	user: User | undefined;
	login: (email: string, password: string) => Promise<void>;
	isLoading: boolean;
	isError: boolean;
	logout: () => Promise<void>;
};

export const AuthContext = createContext<AuthContextType | undefined>(
	undefined
);

type Props = { children: React.ReactNode };

export const AuthProvider = ({ children }: Props) => {
	const [accessToken, setAcccesToken] = useState<string | undefined>();
	const [user, setUser] = useState<User | undefined>();
	const [isLoading, setIsLoading] = useState<boolean>(false);
	const [isError, setIsError] = useState<boolean>(false);

	useEffect(() => {
		const accessTokenInterceptor = api.interceptors.request.use((config) => {
			config.headers.Authorization = accessToken
				? `Bearer ${accessToken}`
				: config.headers.Authorization;

			return config;
		});

		return () => {
			api.interceptors.response.eject(accessTokenInterceptor);
		};
	}, [accessToken]);

	useLayoutEffect(() => {
		const refreshInterceptor = api.interceptors.response.use(
			(config) => config,
			async (error) => {
				if (error.responce.status === 401) {
					const originalRequest = error.config;

					try {
						const responce = await AccountsService.refresh();

						setAcccesToken(responce.data.result!.accessToken);
						setUser({
							email: responce.data.result!.email,
							id: responce.data.result!.userId,
						} as User);

						originalRequest.headers.Authorization = `Bearer ${
							responce.data.result!.accessToken
						}`;

						return api(originalRequest);
					} catch {
						setAcccesToken(undefined);
					}
				}

				return Promise.reject(error);
			}
		);

		return () => {
			api.interceptors.response.eject(refreshInterceptor);
		};
	}, []);

	const login = async (email: string, password: string) => {
		try {
			setIsLoading(true);
			const responce = await AccountsService.login(email, password);

			setAcccesToken(responce.data.result!.accessToken);
			setUser({
				email: responce.data.result!.email,
				id: responce.data.result!.userId,
			} as User);
			setIsLoading(false);
		} catch {
			setIsLoading(false);
			setIsError(true);
		}
	};

	const logout = async () => {
		try {
			await AccountsService.logout();

			setAcccesToken(undefined);
			setUser(undefined);
		} catch {
			setIsError(true);
		}
	};

	return (
		<AuthContext.Provider
			value={{ accessToken, user, login, logout, isLoading, isError }}
		>
			{children}
		</AuthContext.Provider>
	);
};
