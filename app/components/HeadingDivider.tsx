"use client";

import { LazyMotion, domAnimation, m } from "framer-motion";
import { initial, animate, exit, transition } from "../utils/motions";

export function HeadingDivider({ title = "" }) {
	return (
		<header className="flex items-center">
			<LazyMotion features={domAnimation}>
				<m.h2
					tabIndex="0"
					initial={initial}
					animate={animate}
					exit={exit}
					transition={transition}
					className="flex items-center font-extrabold text-3xl md:text-4xl relative w-full uppercase gap-4 bg-clip-text bg-gradient-to-r from-gray-100 to-gray-50 after:h-[1px] after:flex-1 after:bg-inherited text-slate-950 dark:text-slate-50"
				>
					{title} <hr className="border-blue-700 dark:border-slate-50 border-2 rounded-md w-[70%] "/>
				</m.h2>
			</LazyMotion>
		</header>
	);
}