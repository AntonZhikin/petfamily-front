import { FilterSelect } from "./FilterSelect";

export function Filter() {
	return (
		<div className="flex flex-col bg-white w-full h-auto p-4 text-black rounded-lg shadow-lg">
			<div className="text-2xl">Поиск и сортировка</div>
			<div className="my-3 underline decoration-red-500 text-lg">
				Поиск по имени
			</div>
			<input className="border-2 rounded-lg p-1" placeholder="Имя котика" />

			<div className="my-3 underline decoration-red-500 text-lg">
				Сортировка
			</div>

			<FilterSelect label="Пол" options={["Мальчик", "Девочка"]} />
			<FilterSelect label="Окрас" options={["Белый", "Черный", "Рыжий"]} />
			<FilterSelect label="Привит" options={["Да", "Нет"]} />
			<FilterSelect label="Возраст" options={["Меньше года", "Больше года"]} />
			<FilterSelect label="Другое" options={["вав", "ыпавы"]} />
		</div>
	);
}
