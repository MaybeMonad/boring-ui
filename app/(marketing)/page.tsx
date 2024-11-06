// import { ThemeToggle } from "@/components/theme-toggle";
import { ComponentCard } from "@/components/component-card";
import { SiteHeader } from "@/components/site-header";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { Switch } from "@/components/ui/switch";

export default function Home() {
	return (
		<div className="flex flex-col items-center min-h-screen p-8">
			<SiteHeader />
			<div className="grid grid-cols-1 gap-4 mt-8 w-full max-w-screen-md">
				<ComponentCard name="Button">
					<Button>Click me</Button>
				</ComponentCard>
				<ComponentCard name="Switch">
					<Switch />
				</ComponentCard>
				<ComponentCard name="Checkbox">
					<Checkbox />
				</ComponentCard>
			</div>
			{/* <ThemeToggle /> */}
		</div>
	);
}
