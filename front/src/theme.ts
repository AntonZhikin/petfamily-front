import { createTheme } from "@mui/material";

export const lightTheme = createTheme({
	palette: {
		mode: "light",
		background: {
			default: "#ffffff",
			paper: "#f5f5f5",
		},
		text: {
			primary: "#000000",
			secondary: "#333333",
		},
	},
});
