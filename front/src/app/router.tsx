import { createBrowserRouter } from "react-router-dom";
import LoginPage from "../pages/Login/LoginPage";
import { RootLayout } from "./RootLayout";

export const router = createBrowserRouter([
	{
		path: "/",
		element: <RootLayout />,
		children: [
			{
				path: "/",
				element: <div>Задачи</div>,
			},
			{
				path: "issues",
				element: <div>Крестики Нолики</div>,
			},
			{
				path: "login",
				element: <LoginPage />,
			},
		],
		errorElement: <div>Упс, что-то пошло не так</div>,
	},
]);
