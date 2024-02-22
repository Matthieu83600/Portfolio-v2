import { BsFillEnvelopeOpenFill, BsGithub, BsLinkedin, BsTwitterX } from "react-icons/bs";

export const SOCIAL_MEDIA = [
	{
		id: "linkedin",
		icon: <BsLinkedin className="text-blue-700 dark:text-slate-50"/>,
		title: "Mon profil LinkedIn",
		url: "www.linkedin.com/in/matthieu-bonjour"
	},
	{
		id: "twitter",
		icon: <BsTwitterX className="text-blue-700 dark:text-slate-50"/>,
		title: "Mon profil Twitter",
		url: "https://twitter.com/BonjourMat83600?=V9bTy94aQMLvl_l96_nnZA&s=09"
	},
	{
		id: "github",
		icon: <BsGithub className="text-blue-700 dark:text-slate-50"/>,
		title: "Mon profil GitHub",
		url: "https://github.com/Matthieu83600"
	},
	{
		id: "mail",
		icon: <BsFillEnvelopeOpenFill className="text-blue-700 dark:text-slate-50"/>,
		title: "Send me an email",
		url: "mailto://matthieu83600-pro@outlook.fr"
	}
];