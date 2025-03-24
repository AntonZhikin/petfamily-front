import { CircularProgress, Snackbar } from "@mui/material";
import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import { getUsers } from "../../api/accounts";

export function LoginPage() {
	const [users, setUsers] = useState<string[]>([]);
	const [isLoading, setIsLoading] = useState(false);
	const [error, stateError] = useState<string>("");

	useEffect(() => {
		const fetchUsers = async () => {
			setIsLoading(true);
			try {
				const users = await getUsers();
				setUsers(users);
				setIsLoading(false);
			} catch (error) {
				stateError("Что то не так");
				console.log(error);
			}
		};

		fetchUsers();
	}, []);

	return (
		<div className="flex flex-col h-full w-full py-6 px-10 justify-center items-start gap-4">
			<NavLink to="/" className="text-lg">
				Обратно на главную
			</NavLink>

			<div className="flex flex-col flex-1 min-w-80 mx-auto items-center justify-center gap-9">
				{isLoading ? (
					<CircularProgress />
				) : (
					users.map((user, i) => <div key={i}>{user}</div>)
				)}
			</div>
			<Snackbar
				open={!!error}
				autoHideDuration={3000}
				onClose={() => stateError("")}
				message={error}
			/>
		</div>
	);
}
