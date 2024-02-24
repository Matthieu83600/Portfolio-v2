import { useRef } from "react";
import { domAnimation, LazyMotion, useInView } from "framer-motion";
import Link from "next/link";
import { HeadingDivider } from "../components/HeadingDivider";
import { SITE_ROUTES } from "../constants/routes";
import { LastProjects } from "../components/Projects";


export function ProjectsSection() {
	const btnRef = useRef(null);
	const isBtnInView = useInView(btnRef, { once: true });

	return (
		<LazyMotion features={domAnimation}>
			<section id="projects" className="section my-12">
				<HeadingDivider title="Derniers projets" />
				<div className="h-10 md:h-14" />

				<div className="flex flex-col items-center gap-8 md:gap-14">
					<LastProjects />
					<Link
						href={SITE_ROUTES.projects}
						tabIndex={-1}
						aria-label="Aller à la page des projets"
						ref={btnRef}
						className="rounded-md bg-blue-700 p-2 text-slate-50"
						style={{
							transform: btnRef ? "none" : "translateX(-50px)",
							opacity: isBtnInView ? 1 : 0,
							transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s"
						}}
					>
						<button aria-label="Voir plus de projets">Plus de projets</button>
					</Link>
				</div>
			</section>
		</LazyMotion>
	);
}