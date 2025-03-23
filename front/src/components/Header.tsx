import LoginIcon from "@mui/icons-material/Login";
import PersonIcon from "@mui/icons-material/Person";
import PetsIcon from "@mui/icons-material/Pets";
import { AppBar } from "@mui/material";
import { NavLink } from "react-router-dom";

export function Header() {
	return (
		<AppBar position="static">
			<div className="flex flex-row items-center justify-between px-7 py-3 bg-red-400">
				<NavLink to="/" className="flex flex-row item-center">
					<PetsIcon fontSize="large" />
				</NavLink>
				<div className="text-3xl">Pet Family</div>
				<div className="flex flex-row items-center space-x-2 size-20">
					<NavLink to={"login"}>
						<PersonIcon fontSize="large" />
					</NavLink>
					<NavLink to="/">
						<LoginIcon fontSize="large" />
					</NavLink>
				</div>
			</div>
		</AppBar>
	);
}
