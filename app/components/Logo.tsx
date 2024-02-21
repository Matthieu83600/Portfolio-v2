"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { LazyMotion, domAnimation, m } from "framer-motion";
import { initial, animate, exit, transition } from "../utils/motions";
import { SITE_ROUTES } from "../constants/routes";

export function Logo() {
	const pathname = usePathname();

	return (
		<LazyMotion features={domAnimation}>
			<m.h3
				className="text-xl md:text-2xl font-bold"
				initial={initial}
				animate={animate}
				exit={exit}
				transition={transition}
			>
				{pathname === SITE_ROUTES.home ? (
					<>
                    <Image 
                        src="/logo.svg"
                        width={0}
                        height={0}
                        style={{width:'70px', height: "auto" }}
						loading="lazy"
                        alt="Mon logo"
                    />
                    </>
				) : (
					<Link href={SITE_ROUTES.home} aria-label="Go to home page" role="link">
						<Image 
                            src="/logo.svg"
                            width={0}
                            height={0}
                            style={{width:'70px', height: "auto" }}
                            alt="Mon logo"
                        />
					</Link>
				)}
			</m.h3>
		</LazyMotion>
	);
}