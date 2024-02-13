import { FaHome, FaTools } from "react-icons/fa";
import { IoIosPerson } from "react-icons/io";
import { BsFillBriefcaseFill } from "react-icons/bs";
import { GrContact } from "react-icons/gr";

export const MENU_OPTIONS = [
	{ 
		id: "0", 
		icon: <FaHome size={24} className="text-blue-700 dark:text-slate-50"/>,
		name: "Accueil", 
		url: "#intro" 
	},
	{ 
		id: "1", 
		icon: <IoIosPerson size={24} className="text-blue-700 dark:text-slate-50"/>,
		name: "À propos", 
		url: "#about" 
	},
	{ 
		id: "2", 
		icon: <FaTools size={24} className="text-blue-700 dark:text-slate-50"/>,
		name: "Tech", 
		url: "#tech" 
	},
	{ 
		id: "3", 
		icon: <BsFillBriefcaseFill size={24} className="text-blue-700 dark:text-slate-50"/>,
		name: "Projets", 
		url: "#projects" 
	},
	{
		id: "4",
		icon: <GrContact size={24} className="text-blue-700 dark:text-slate-50"/>,
		name: "Contact",
		url: "#contact"
	}
];