import { ThemeToggle } from "@/components/theme-toggle";

export function SiteHeader() {
	return (
		<div className="flex items-center justify-between w-full max-w-screen-md">
			<header className="flex items-center justify-between w-full">
				<h1 className="text-2xl font-bold">Boring UI</h1>
				<ThemeToggle />
			</header>
		</div>
	);
}
