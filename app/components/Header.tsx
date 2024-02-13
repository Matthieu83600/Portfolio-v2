"use client";

import { Logo } from "../components/Logo"
import { Menu } from "../components/Menu"
import { MobileMenu } from "../components/MobileMenu"
import { ThemeSwitcher } from "../components/ThemeSwitcher"
import { useMediaQuery } from "../utils/media_query";

export function Header() {
	const isMobile = useMediaQuery();

	return (
		<header className="pt-5 pb-5 sticky top-0 z-10 bg-inherit shadow-sm">
			<div className="container-md">
				<div className="flex justify-between items-center gap-3">
					<Logo />
					{isMobile ? <MobileMenu /> : <Menu />}
					<div className="flex items-center gap-5">
						<ThemeSwitcher />
					</div>
				</div>
			</div>
		</header>
	);
}