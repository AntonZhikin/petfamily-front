import Diversity1Icon from "@mui/icons-material/Diversity1";
import DoneIcon from "@mui/icons-material/Done";
import EscalatorWarningIcon from "@mui/icons-material/EscalatorWarning";
import LocalHospitalIcon from "@mui/icons-material/LocalHospital";
import StarIcon from "@mui/icons-material/Star";
import Cat2Image from "../cat2.svg";
export function Card() {
	return (
		<section className="flex flex-col w-[32%] h-[570px] rounded-lg bg-white border shadow-md text-black">
			<img src={Cat2Image} alt="" className="flex flex-col w-full h-50%" />
			<div className="flex flex-row text-sm text-left truncate w-full px-3 gap-5">
				<div className="text-black text-2xl">Барсик,</div>
				<div className="text-black text-2xl">1 год 3 месяца</div>
			</div>
			<div className="flex flex-row gap-1 py-2 items-center size-12 px-2 text-lg">
				<LocalHospitalIcon fontSize="small" color="secondary" />
				<div className="">Вакцинация:</div>
				<DoneIcon fontSize="small" color="primary" />
			</div>
			<div className="flex flex-row gap-1 py-1 items-center size-12 px-2 text-lg">
				<EscalatorWarningIcon fontSize="small" color="secondary" />
				<div className="whitespace-nowrap">Отношеник к людям:</div>
				<div>Хорошее</div>
			</div>
			<div className="flex flex-row gap-1 py-1 items-center size-12 px-2 text-lg">
				<Diversity1Icon fontSize="small" color="secondary" />
				<div className="whitespace-nowrap">Отношеник к другим животным:</div>
				<div>Хорошее</div>
			</div>
			<div className="flex flex-row px-5 py-5 gap-3 mt-auto text-2xl text-white">
				<button className="flex w-[69%] bg-red-400 justify-center rounded-lg">
					Подробнее
				</button>
				<button className="flex w-[22%] bg-red-400 justify-center items-center rounded-lg">
					<StarIcon />
				</button>
			</div>
		</section>
	);
}
