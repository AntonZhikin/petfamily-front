import { FormControl, InputLabel, MenuItem, Select } from "@mui/material";

export function Filter() {
	return (
		<div className="flex flex-col bg-white w-full h-auto p-4 text-black rounded-lg shadow-lg">
			<div className="text-2xl">Поиск и сортировка </div>
			<div className="my-3 underline decoration-red-500 text-lg">
				Поиск по имени
			</div>
			<input className="border-2 rounded-lg" placeholder="Имя котика" />
			<div className="my-3 underline decoration-red-500 text-lg">
				Сортировка
			</div>
			<div className="flex flex-col">
				<div className="px-2">Пол</div>
				<FormControl sx={{ m: 1, minWidth: 120 }} size="small">
					<InputLabel id="demo-select-small-label">Пол</InputLabel>
					<Select
						labelId="demo-select-small-label"
						id="demo-select-small"
						value={"1"}
						label="Age"
					>
						<MenuItem value="">
							<em>None</em>
						</MenuItem>
						<MenuItem value={"Мальчик"}>Мальчик</MenuItem>
						<MenuItem value={"Девочка"}>Девочка</MenuItem>
					</Select>
				</FormControl>
			</div>

			<div className="flex flex-col">
				<div className="px-2">Окрас</div>
				<FormControl sx={{ m: 1, minWidth: 120 }} size="small">
					<InputLabel id="demo-select-small-label">Окрас</InputLabel>
					<Select
						labelId="demo-select-small-label"
						id="demo-select-small"
						value={"1"}
						label="Age"
					>
						<MenuItem value="">
							<em>None</em>
						</MenuItem>
						<MenuItem value={"Белый"}>Белый</MenuItem>
						<MenuItem value={"Черный"}>Черный</MenuItem>
						<MenuItem value={"Рыжый"}>Рыжый</MenuItem>
					</Select>
				</FormControl>
			</div>

			<div className="flex flex-col">
				<div className="px-2">Привит</div>
				<FormControl sx={{ m: 1, minWidth: 120 }} size="small">
					<InputLabel id="demo-select-small-label">Привит</InputLabel>
					<Select
						labelId="demo-select-small-label"
						id="demo-select-small"
						value={"1"}
						label="Age"
					>
						<MenuItem value="">
							<em>None</em>
						</MenuItem>
						<MenuItem value={"Да"}>Да</MenuItem>
						<MenuItem value={"Нет"}>Нет</MenuItem>
					</Select>
				</FormControl>
			</div>

			<div className="flex flex-col">
				<div className="px-2">Возраст</div>
				<FormControl sx={{ m: 1, minWidth: 120 }} size="small">
					<InputLabel id="demo-select-small-label">Возраст</InputLabel>
					<Select
						labelId="demo-select-small-label"
						id="demo-select-small"
						value={"1"}
						label="Возраст"
					>
						<MenuItem value="">
							<em>None</em>
						</MenuItem>
						<MenuItem value={"Меньше года"}>Меньше года</MenuItem>
						<MenuItem value={"Больше года"}>Больше года</MenuItem>
					</Select>
				</FormControl>
			</div>

			<div className="flex flex-col">
				<div className="px-2">Другое</div>
				<FormControl sx={{ m: 1, minWidth: 120 }} size="small">
					<InputLabel id="demo-select-small-label">Другое</InputLabel>
					<Select
						labelId="demo-select-small-label"
						id="demo-select-small"
						value={"1"}
						label="Возраст"
					>
						<MenuItem value="">
							<em>None</em>
						</MenuItem>
						<MenuItem value={"вав"}>вав</MenuItem>
						<MenuItem value={"ыпавы"}>ыпавы</MenuItem>
					</Select>
				</FormControl>
			</div>
		</div>
	);
}
