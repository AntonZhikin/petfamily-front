import { Skeleton, TextField } from "@mui/material";
import Button from "@mui/material/Button/Button";
import { useForm } from "react-hook-form";
import { NavLink, useNavigate } from "react-router-dom";
import { useAuth } from "../../contexts/auth/useAuth";

type LoginFields = {
	email: string;
	password: string;
};

export function LoginPage() {
	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm<LoginFields>();

	const { login, accessToken, isLoading, isError } = useAuth();

	const navigate = useNavigate();

	const onSubmit = async (data: LoginFields) => {
		await login(data.email, data.password);

		navigate("/profile");
	};
	return (
		<>
			{isLoading ? (
				<Skeleton animation="wave" />
			) : (
				<div>
					<div className="flex flex-col h-full w-full py-6 px-10 justify-center items-start gap-4">
						<NavLink to="/" className="text-lg text-black">
							Обратно на главную
						</NavLink>

						<div className="text-black">
							<p>accestoken - {accessToken}</p>
						</div>

						<div className="flex flex-col flex-1 min-w-80 mx-auto justify-center gap-9 py-24 border-">
							<div className="flex flex-row text-3xl text-black justify-center">
								Вход
							</div>
							<form
								onSubmit={handleSubmit(onSubmit)}
								className="flex flex-col items-center gap-7"
							>
								<TextField
									variant="standard"
									label="Email"
									error={!!errors}
									helperText={errors.email?.message}
									fullWidth
									{...register("email", { required: true })}
								/>

								<TextField
									variant="standard"
									label="Password"
									fullWidth
									{...register("password")}
								/>

								<Button type="submit" disabled={isLoading}>
									Войти
								</Button>
							</form>
						</div>
					</div>
				</div>
			)}
		</>
	);
}
