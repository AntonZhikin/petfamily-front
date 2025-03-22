import { AppBar } from "@mui/material";
import { NavLink } from "react-router-dom";

export function Navigation() {
	return (
		<AppBar position="static">
			<div className="flex flex-row items-center justify-between py-2 px-3">
				<div className="flex flex-row gap-4 items-center justify-center">
					<NavLink to="/" className="text-2xl pr-3">
						Anton Zhikin
					</NavLink>
					<NavLink to="issues">Задачи</NavLink>
					<NavLink to="tic-tac">Крестики</NavLink>
					<NavLink to="lessons">Нолики</NavLink>
				</div>
				<NavLink to={"login"} color="inherit">
					Login
				</NavLink>
			</div>
		</AppBar>
	);
}
