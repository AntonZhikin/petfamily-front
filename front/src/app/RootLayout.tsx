import React from "react";
import { Outlet } from "react-router-dom";
import { ContentBlock } from "../components/ContentBlock";
import { Navigation } from "../components/Navigation";

export type Props = {
	children: React.ReactNode;
};

export function RootLayout() {
	return (
		<div className="h-screen flex flex-col">
			<Navigation />
			<main className="flex flex-col h-full px-2 sm:px-8 py-2 sm:py-5">
				<ContentBlock>
					<Outlet />
				</ContentBlock>
			</main>
		</div>
	);
	<div></div>;
}

//Создал проект, не знаю надо ли было скидывать как отдельное задание...
