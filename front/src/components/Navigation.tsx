import { AppBar } from "@mui/material";
import { NavLink } from "react-router-dom";
import iconCat from "../images.svg";
import iconLeave from "../leave.svg";
import iconProfile from "../profile.svg";

export function Navigation() {
	return (
		<AppBar position="static">
			<div className="flex flex-row items-center justify-between px-2 bg-red-400">
				<NavLink to="/" className="flex flex-row item-center size-11">
					<img src={iconCat} alt="" />
				</NavLink>
				<div className="text-lg">Pet Family</div>
				<div className="flex flex-row items-center space-x-2 size-12">
					<NavLink to={"login"}>
						<img src={iconProfile} alt="" />
					</NavLink>
					<NavLink to="/">
						<img src={iconLeave} alt="" />
					</NavLink>
				</div>
			</div>
		</AppBar>
	);
}
