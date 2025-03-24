import { Card } from "../../components/Card";
import { Filter } from "../../components/Filter";
import { Menu } from "../../components/Menu";

export function Main() {
	return (
		<>
			<Menu />
			<div className="flex py-6 space-x-6">
				<div className="w-1/4 h-screen sticky top-0">
					<Filter />
				</div>

				<div className="flex flex-wrap gap-4 w-3/4">
					<Card />
					<Card />
					<Card />
					<Card />
					<Card />
					<Card />
					<Card />
					<Card />
				</div>
			</div>
		</>
	);
}
