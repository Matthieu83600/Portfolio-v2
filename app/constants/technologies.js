import { AiFillHtml5, AiFillGithub } from "react-icons/ai";
import { DiCss3, DiJqueryLogo, DiVisualstudio } from "react-icons/di";
import { IoLogoJavascript } from "react-icons/io";
import { FaSass, FaReact, FaNode, FaGitAlt, FaFigma, FaTrello, FaSlack } from "react-icons/fa";
import { BsBootstrap } from "react-icons/bs";
import { TbBrandTypescript, TbBrandRedux, TbBrandNextjs, TbBrandTailwind, TbBrandVscode } from "react-icons/tb";
import { SiExpress, SiVisualbasic, SiMongodb, SiSwagger, SiPostman } from "react-icons/si";

export const TECHNOLOGIES = [
	{
		category: "Front-end",
		items: [
			{ name: "HTML", icon: <AiFillHtml5 size={32} /> },
			{ name: "CSS", icon: <DiCss3 size={32} /> },
			{ name: "Sass", icon: <FaSass size={32} /> },
			{ name: "JS", icon: <IoLogoJavascript size={32} /> },
			{ name: "jQuery", icon: <DiJqueryLogo size={32} /> },
			{ name: "TypeScript", icon: <TbBrandTypescript size={32} /> },
			{ name: "React", icon: <FaReact size={32} /> },
			{ name: "Redux", icon: <TbBrandRedux size={32} /> },
			{ name: "Next", icon: <TbBrandNextjs size={32} /> },
			{ name: "Tailwind CSS", icon: <TbBrandTailwind size={32} /> },
			{ name: "Bootstrap", icon: <BsBootstrap size={32} /> },
		]
	},
	{
		category: "Back-end",
		items: [
			{ name: "Node", icon: <FaNode size={32} /> },
			{ name: "Express", icon: <SiExpress size={32} /> }
		]
	},
	{
		category: "Autres langages",
		items: [
			{ name: "Visual Basic", icon: <SiVisualbasic size={32} /> },
		]
	},
	{
		category: "Bases de données",
		items: [
			{ name: "MongoDB", icon: <SiMongodb size={32} /> },
		]
	},
	{
		category: "Versioning",
		items: [
			{ name: "Git", icon: <FaGitAlt size={32} /> },
			{ name: "Github", icon: <AiFillGithub size={32} /> },
		]
	},
	{
		category: "Outils UI/UX",
		items: [
			{ name: "Figma", icon: <FaFigma size={32} /> },
		]
	},
	{
		category: "IDE",
		items: [
			{ name: "VsCode", icon: <TbBrandVscode size={32} /> },
			{ name: "Visual Studio", icon: <DiVisualstudio size={32} /> },
		]
	},
	{
		category: "Autres outils",
		items: [
			{ name: "Trello", icon: <FaTrello size={32} /> },
			{ name: "Slack", icon: <FaSlack size={32} /> },
			{ name: "Swagger", icon: <SiSwagger size={32} /> },
			{ name: "Postman", icon: <SiPostman size={32} /> },
		]
	}
];