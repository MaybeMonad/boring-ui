import { cn } from "@/lib/utils";
import type { PropsWithChildren } from "react";
import { Button } from "./ui/button";

export function ComponentCard({
	children,
	className,
	name,
}: PropsWithChildren<{ className?: string; name: string }>) {
	return (
		<div
			className={cn(
				"rounded-lg border border-border w-full bg-dark",
				className,
			)}
		>
			<h3 className="text-sm font-semibold text-muted-foreground border-b border-border py-2 px-4">
				{name}
			</h3>
			<div className="flex gap-x-2">
				<div className="flex-1 p-4">{children}</div>
				<div className="text-sm text-muted-foreground border-l border-border p-4 flex flex-col gap-y-2">
					<Button variant="outline" size="sm">
						Copy as Pure React Component
					</Button>
					<Button variant="outline" size="sm">
						Copy as Shadcn Component
					</Button>
				</div>
			</div>
		</div>
	);
}
