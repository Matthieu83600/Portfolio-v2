const author = "Matthieu Bonjour";
const description = "Je m'appelle Matthieu Bonjour, et je suis développeur front-end junior. Bienvenue sur mon portfolio.";
const url = "https://matthieubonjour.fr/";

export const Metadata = {
	metadataBase: new URL("https://matthieubonjour.fr/"),
	title: {
		default: `Portfolio | ${author}`,
		template: `%s | ${author}`
	},
	description: description,
	icons: {
		icon: "/assets/logo.svg"
	},
	keywords: [
		"Matthieu Bonjour",
        "Matthieu Bonjour - développeur",
		"Matthieu Bonjour - developer",
		"Développeur front-end",
		"Frontend developer",
        "Site portfolio",
		"Portfolio website",
        "Portfolio développeur front-end",
		"Frontend Developer Portfolio"
	],
	creator: author,
	authors: [{ name: author, url: url }]
};