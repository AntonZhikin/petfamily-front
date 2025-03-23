import FavoriteIcon from "@mui/icons-material/Favorite";
import HomeIcon from "@mui/icons-material/Home";
import VolunteerActivismIcon from "@mui/icons-material/VolunteerActivism";
import { NavLink } from "react-router-dom";
export function Menu() {
	return (
		<div className="flex flex-row gap-5 items-center">
			<NavLink to={"/"} className="flex flex-row items-center gap-0.5">
				<HomeIcon color="primary" />
				Главная
			</NavLink>
			<NavLink
				to={"volunteer-page"}
				className="flex flex-row items-center gap-0.5"
			>
				<FavoriteIcon />
				Волонтеры
			</NavLink>
			<NavLink to={"/"} className="flex flex-row items-center gap-0.5">
				<VolunteerActivismIcon />
				Помочь животным
			</NavLink>
		</div>
	);
}
