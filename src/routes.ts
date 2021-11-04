import type { JSX } from "preact";

export type RouteNames =
	| "index"
	| "projects"
	| "impressum"
	| "music"
	| "datenschutz"
	| "svelteNavigator"
	| "recipeApp"
	| "hpStrelow"
	| "portfolio"
	| "remote"
	| "pixelnetz"
	| "baThesis"
	| "nichtMehr"
	| "prag";

export interface RouteDescription {
	path: string;
	name: string;
	filePath: string;
	title: string;
	headingDisabled?: boolean;
	pageName: string;
	footerOnly?: boolean;
	mainPage?: boolean;
}

export const routeDescriptions: {
	[k in RouteNames]: RouteDescription;
} = {
	index: {
		path: "/",
		name: "index",
		filePath: "routes/Home/index.ts",
		title: "Home - Portfolio Michel Strelow",
		headingDisabled: false,
		pageName: "Home",
	},
	projects: {
		path: "/projects",
		name: "projects",
		filePath: "routes/Projects/index.ts",
		title: "Projects - Portfolio Michel Strelow",
		pageName: "Projects",
	},
	music: {
		path: "/music",
		name: "music",
		filePath: "routes/Music/index.ts",
		title: "Music - Portfolio Michel Strelow",
		pageName: "Music",
	},
	impressum: {
		path: "/impressum",
		name: "impressum",
		filePath: "routes/Impressum/index.ts",
		title: "Impressum - Portfolio Michel Strelow",
		pageName: "Impressum",
		footerOnly: true,
	},
	datenschutz: {
		path: "/datenschutz",
		name: "datenschutz",
		filePath: "routes/Datenschutz/index.ts",
		title: "Datenschutz - Portfolio Michel Strelow",
		pageName: "Datenschutz",
		footerOnly: true,
	},
	svelteNavigator: {
		path: "/svelte-navigator",
		name: "svelte-navigator",
		filePath: "routes/SvelteNavigator/index.ts",
		title: "Svelte Navigator - Portfolio Michel Strelow",
		pageName: "Svelte Navigator",
		mainPage: false,
	},
	recipeApp: {
		path: "/recipe-app",
		name: "recipe-app",
		filePath: "routes/RecipeApp/index.ts",
		title: "Recipe App - Portfolio Michel Strelow",
		pageName: "Recipe App",
		mainPage: false,
	},
	hpStrelow: {
		path: "/hp-strelow",
		name: "hp-strelow",
		filePath: "routes/HPStrelow/index.ts",
		title: "HP-Strelow - Portfolio Michel Strelow",
		pageName: "HP-Strelow",
		mainPage: false,
	},
	portfolio: {
		path: "/portfolio",
		name: "portfolio",
		filePath: "routes/Portfolio/index.ts",
		title: "Portfolio - Portfolio Michel Strelow",
		pageName: "Portfolio",
		mainPage: false,
	},
	remote: {
		path: "/remote",
		name: "remote",
		filePath: "routes/Remote/index.ts",
		title: "Remote Control - Portfolio Michel Strelow",
		pageName: "Remote Control",
		mainPage: false,
	},
	pixelnetz: {
		path: "/pixelnetz",
		name: "pixelnetz",
		filePath: "routes/Pixelnetz/index.ts",
		title: "Pixelnetz - Portfolio Michel Strelow",
		pageName: "Pixelnetz",
		mainPage: false,
	},
	baThesis: {
		path: "/ba-thesis",
		name: "ba-thesis",
		filePath: "routes/BAThesis/index.ts",
		title: "Bachelor Thesis - Portfolio Michel Strelow",
		pageName: "Bachelor Thesis",
		mainPage: false,
	},
	nichtMehr: {
		path: "/nicht-mehr-ep",
		name: "nicht-mehr-ep",
		filePath: "routes/NichtMehrEP/index.ts",
		title: "Nicht Mehr EP - Portfolio Michel Strelow",
		pageName: "Nicht Mehr",
		mainPage: false,
	},
	prag: {
		path: "/prag-single",
		name: "prag-single",
		filePath: "routes/PragSingle/index.ts",
		title: "Prag Single - Portfolio Michel Strelow",
		pageName: "Prag",
		mainPage: false,
	},
};

export type RouteComponents = {
	[k in RouteNames]: () => JSX.Element;
};
export type RouteConfig = RouteDescription & { component: () => JSX.Element };
export type RouteConfigs = {
	[k in RouteNames]: RouteConfig;
};

export function createRoutes(routeComponents: RouteComponents): RouteConfigs {
	type RouteDescriptionEntries = [RouteNames, RouteDescription][];
	const entries = Object.entries(routeDescriptions) as RouteDescriptionEntries;
	const routeEntries = entries.map(([name, desc]) => [
		name,
		{ ...desc, component: routeComponents[name] },
	]);
	const routes: RouteConfigs = Object.fromEntries(routeEntries);
	return routes;
}
