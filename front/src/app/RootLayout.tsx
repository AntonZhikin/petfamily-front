import React from "react";
import { Outlet } from "react-router-dom";
import { Footer } from "../components/Footer";
import { Header } from "../components/Header";

export type Props = {
	children: React.ReactNode;
};

export function RootLayout() {
	return (
		<div className="h-screen flex flex-col">
			<Header />
			<main className="flex flex-col h-full px-2 sm:px-8 py-2 sm:py-5">
				<Outlet />
			</main>
			<Footer />
		</div>
	);
}
