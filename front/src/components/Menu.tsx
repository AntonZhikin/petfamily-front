import FavoriteIcon from "@mui/icons-material/Favorite";
import HomeIcon from "@mui/icons-material/Home";
import VolunteerActivismIcon from "@mui/icons-material/VolunteerActivism";
import { NavLink } from "react-router-dom";
export function Menu() {
	return (
		<div className="flex flex-row gap-5 items-center border-2">
			<NavLink to={"/"} className="flex flex-row items-center gap-0.5">
				<HomeIcon color="primary" />
				<div className="text-black">Главная</div>
			</NavLink>
			<NavLink
				to={"volunteer-page"}
				className="flex flex-row items-center gap-0.5"
			>
				<FavoriteIcon color="primary" />
				<div className="text-black">Волонтеры</div>
			</NavLink>
			<NavLink
				to={"/"}
				className="flex flex-row items-center gap-0.5"
				color="primary"
			>
				<VolunteerActivismIcon color="primary" />
				<div className="text-black">Помочь животным</div>
			</NavLink>
		</div>
	);
}
