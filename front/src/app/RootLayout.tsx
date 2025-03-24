import React from "react";
import { Outlet } from "react-router-dom";
import { Footer } from "../components/Footer";
import { Header } from "../components/Header";

export type Props = {
	children: React.ReactNode;
};

export function RootLayout() {
	return (
		<div className="min-h-screen flex flex-col">
			<Header />
			<main className="flex-grow flex flex-col overflow-y-auto px-2 sm:px-8 py-2 sm:py-5">
				<Outlet />
			</main>
			<Footer />
		</div>
	);
}
