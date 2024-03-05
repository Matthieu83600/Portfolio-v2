"use client";

import { useEffect, useState, useRef } from "react";
import Link from "next/link";
import { LazyMotion, domAnimation, useInView } from "framer-motion";
import { useScrollTo } from "../hooks/useScrollTo";

export function IntroSection() {
	const ref = useRef(null);
	const introRef = useRef(null);
	const isInView = useInView(ref, { once: true });
	const { scrollToEl } = useScrollTo();

	let [count, setCount] = useState(0);
	const [text] = useState([
		"suis passionné de nouvelles technologies.",
		"continue à développer mes compétences.",
		"prends du plaisir à coder.",
		"développe des sites avec React / Nextjs."
	]);

	const onClick = (e) => scrollToEl(e);

	useEffect(() => {
		let interval = setInterval(() => {
			setCount(count + 1);

			if (count === 3) {
				setCount(0);
			}
		}, 2000);

		return () => clearInterval(interval);
	}, [count]);

	return (
		<LazyMotion features={domAnimation}>
			<section id="intro" className="section" ref={introRef}>
				<div className="flex flex-col gap-4 items-center py-5">
					<div className="py-5 md:py-10">
						<h1
							tabIndex="0"
							ref={ref}
							className="text-3xl md:text-5xl xl:text-6xl font-bold"
							style={{
								transform: isInView ? "none" : "translateX(-200px)",
								opacity: isInView ? 1 : 0,
								transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s"
							}}
						>
							<p className="text-center leading-[145%]">
								Salut, je suis <mark className="bg-blue-700 dark:bg-sky-300">Matthieu</mark> un développeur front-end junior <mark className="bg-blue-700 dark:bg-sky-300">passionné</mark>.
							</p>
						</h1>

						<div className="mt-5 relative flex flex-col overflow-hidden">
							<p
								ref={ref}
								className="text-[17px] md:text-2xl transform-none opacity-100"
								style={{
									transform: isInView ? "none" : "translateX(-200px)",
									opacity: isInView ? 1 : 0,
									transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s"
								}}
							>
								Je
								<span
									className="absolute ml-4 flex flex-col transition-all duration-500 ease-in-expo"
									style={{
										top:
											count === 0
												? "0"
												: count === 1
												? "-100%"
												: count === 2
												? "-200%"
												: count === 3
												? "-300%"
												: "0",
										left: "13px"
									}}
								>
									{text.map((element) => (
										<TextElement key={element} element={element} />
									))}
								</span>
							</p>
						</div>
						<p
							tabIndex="0"
							ref={ref}
							className="mt-3 mb-10 text-gray-500 text-xl"
							style={{
								transform: isInView ? "none" : "translateX(-200px)",
								opacity: isInView ? 1 : 0,
								transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s"
							}}
						>
							Je vous laisse découvrir mon portfolio.
						</p>
						<div
							ref={ref}
							style={{
								transform: isInView ? "none" : "translateY(50px)",
								opacity: isInView ? 1 : 0,
								transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s"
							}}
							className="flex flex-col sm:flex-row gap-10"
						>
							<Link
								href="#projects"
								onClick={onClick}
								tabIndex="0"
								className="rounded-md bg-blue-700 p-2 text-slate-50"
								aria-label="Derniers projets"
							>
								Voir mes derniers projets
							</Link>
							<Link
								href="https://cvdesignr.com/p/65770bab74d9f"
								target="_blank"
								tabIndex="0"
								className="rounded-md bg-blue-700 p-2 text-slate-50"
								aria-label="Mon CV"
							>
								Regarder mon CV
							</Link>
						</div>
					</div>
				</div>
			</section>
		</LazyMotion>
	);
}

function TextElement({ element }) {
	const firstWord = <b>{element.split(" ").at(0)}</b>;
	const restWords = element.split(" ").slice(1).join(" ");
	const ref = useRef(null);
	const isInView = useInView(ref, { once: true });

	return (
		<span
			tabIndex="0"
			ref={ref}
			className="text-[17px] md:text-2xl"
			style={{
				transform: isInView ? "none" : "translateX(-200px)",
				opacity: isInView ? 1 : 0,
				transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s"
			}}
		>
			{firstWord} {restWords}
		</span>
	);
}