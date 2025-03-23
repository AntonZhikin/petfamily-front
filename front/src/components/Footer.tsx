import LocalPhoneIcon from "@mui/icons-material/LocalPhone";
import TelegramIcon from "@mui/icons-material/Telegram";

export function Footer() {
	return (
		<div className="flex flex-row bg-gray-900 py-8 w-full justify-between">
			<div className="flex flex-row px-5 gap-3">
				<TelegramIcon />
				<LocalPhoneIcon />
			</div>
			<div className="px-10">2025. Антон Жикин</div>
		</div>
	);
}
