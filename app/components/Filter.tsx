import { useRef, useState } from "react";
import { LazyMotion, domAnimation, useInView } from "framer-motion";
import { AiFillHtml5 } from "react-icons/ai";
import { TbBrandJavascript, TbBrandNextjs, TbSeo, TbBrandVue } from "react-icons/tb";
import { FaReact } from "react-icons/fa";
import { VscDebugAll } from "react-icons/vsc";
import { FilterButton } from "../components/FilterButton";

export function Filter({ onClick = (f) => f, activeCategory }) {
	const animRef = useRef(null);
	const isInView = useInView(animRef, { once: true });

    const handleFilterClick = (filter) => {
        onClick(filter);
        setActiveFilter(filter);
    };

	return (
		<LazyMotion features={domAnimation}>
			<div
				ref={animRef}
				className="flex items-start flex-col sm:items-center gap-4 my-10"
				style={{
					opacity: isInView ? 1 : 0,
					transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 1s"
				}}
			>
				<h3 aria-label="Filter projects" tabIndex="0" className="font-bold text-xl">
					Filtrer par :
				</h3>
				<div className="flex flex-wrap items-center gap-4">
					<FilterButton
						onClick={() => onClick(undefined)}
						label="Tous"
                        active={activeCategory === undefined}
					>
						Tous
					</FilterButton>
                    <FilterButton
						onClick={() => onClick("HTML")}
						label="HTML"
                        active={activeCategory === "HTML"}
					>
						<AiFillHtml5 size={20}/>
					</FilterButton>
                    <FilterButton
						onClick={() => onClick("JavaScript")}
						label="Javascript"
                        active={activeCategory === "JavaScript"}
					>
						<TbBrandJavascript size="20" />
					</FilterButton>
					<FilterButton
						onClick={() => onClick("React")}
						label="React"
                        active={activeCategory === "React"}
					>
						<FaReact size="20"/>
					</FilterButton>
					<FilterButton
						onClick={() => onClick("Next")}
						label="Next"
                        active={activeCategory === "Next"}
					>
						<TbBrandNextjs size="20" />
					</FilterButton>
					<FilterButton
						onClick={() => onClick("Vue")}
						label="Next"
                        active={activeCategory === "Vue"}
					>
						<TbBrandVue size="20" />
					</FilterButton>
					<FilterButton
						onClick={() => onClick("SEO")}
						label="Next"
                        active={activeCategory === "SEO"}
					>
						<TbSeo size="20" />
					</FilterButton>
					<FilterButton
						onClick={() => onClick("Debug")}
						label="Next"
                        active={activeCategory === "Debug"}
					>
						<VscDebugAll size="20" />
					</FilterButton>
				</div>
			</div>
		</LazyMotion>
	);
}
