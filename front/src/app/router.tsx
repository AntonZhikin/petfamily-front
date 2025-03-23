import { createBrowserRouter } from "react-router-dom";
import { LoginPage } from "../pages/Login/LoginPage";
import { Main } from "../pages/Main/MainPage";
import { ProfilePage } from "../pages/Profile/ProfilePage";
import { RegistrationPage } from "../pages/Registration/RegistrationPage";
import { VolunteerPage } from "../pages/Volunteer/VolunteerPage";
import { RootLayout } from "./RootLayout";

export const router = createBrowserRouter([
	{
		path: "/",
		element: <RootLayout />,
		children: [
			{
				path: "/",
				element: <Main />,
			},
			{
				path: "registration",
				element: <RegistrationPage />,
			},
			{
				path: "volunteer-page",
				element: <VolunteerPage />,
			},
			{
				path: "profile",
				element: <ProfilePage />,
			},
			{
				path: "login",
				element: <LoginPage />,
			},
		],
		errorElement: <div>Упс, что-то пошло не так</div>,
	},
]);
