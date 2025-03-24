import { FormControl, InputLabel, MenuItem, Select } from "@mui/material";

type FilterSelectProps = {
	label: string;
	options: string[];
};

export function FilterSelect({ label, options }: FilterSelectProps) {
	return (
		<div className="flex flex-col">
			<div className="px-2">{label}</div>
			<FormControl sx={{ m: 1, minWidth: 120 }} size="small">
				<InputLabel>{label}</InputLabel>
				<Select label={label} defaultValue="">
					<MenuItem value="">
						<em>Не выбрано</em>
					</MenuItem>
					{options.map((option) => (
						<MenuItem key={option} value={option}>
							{option}
						</MenuItem>
					))}
				</Select>
			</FormControl>
		</div>
	);
}
