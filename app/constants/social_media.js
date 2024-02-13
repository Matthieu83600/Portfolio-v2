import { BsFillEnvelopeOpenFill, BsGithub, BsLinkedin, BsTwitterX } from "react-icons/bs";

export const SOCIAL_MEDIA = [
	{
		id: "linkedin",
		icon: <BsLinkedin />,
		title: "Mon profil LinkedIn",
		url: "www.linkedin.com/in/matthieu-bonjour"
	},
	{
		id: "twitter",
		icon: <BsTwitterX />,
		title: "Mon profil Twitter",
		url: "https://twitter.com/BonjourMat83600?=V9bTy94aQMLvl_l96_nnZA&s=09"
	},
	{
		id: "github",
		icon: <BsGithub />,
		title: "Mon profil GitHub",
		url: "https://github.com/Matthieu83600"
	},
	{
		id: "mail",
		icon: <BsFillEnvelopeOpenFill />,
		title: "Send me an email",
		url: "mailto://matthieu83600-pro@outlook.fr"
	}
];