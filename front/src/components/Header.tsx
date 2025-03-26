import PersonIcon from "@mui/icons-material/Person";
import PetsIcon from "@mui/icons-material/Pets";
import { AppBar, Button } from "@mui/material";
import { NavLink } from "react-router-dom";
import { useAuth } from "../contexts/auth/useAuth";

export function Header() {
	const { accessToken, logout } = useAuth();

	return (
		<AppBar position="static">
			<div className="flex flex-row items-center justify-between px-7 py-3 bg-red-400">
				<NavLink to="/" className="flex flex-row item-center">
					<PetsIcon fontSize="large" />
				</NavLink>
				<div className="text-3xl">Pet Family</div>
				<div className="flex flex-row items-center space-x-2 size-20">
					{accessToken ? (
						<NavLink to={"/profile"}>Profile</NavLink>
					) : (
						<NavLink to={"/login"}>
							<PersonIcon fontSize="large" />
						</NavLink>
					)}

					<Button onClick={() => logout}>Logout</Button>
				</div>
			</div>
		</AppBar>
	);
}
