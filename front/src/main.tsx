import { ThemeProvider } from "@emotion/react";
import { createRoot } from "react-dom/client";
import { RouterProvider } from "react-router-dom";
import { router } from "./app/router";
import "./index.css";
import { lightTheme } from "./theme";

createRoot(document.getElementById("root")!).render(
	<ThemeProvider theme={lightTheme}>
		<RouterProvider router={router} />
	</ThemeProvider>
);
