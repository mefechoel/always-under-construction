import fs from "fs/promises";
import path from "path";
import renderToString from "preact-render-to-string";
import prepass from "preact-ssr-prepass";
import { minify as minifyHtml } from "html-minifier-terser";
import App from "./App";
import projects from "./routes/Projects";
import index from "./routes/Home";
import music from "./routes/Music";
import impressum from "./routes/Impressum";
import datenschutz from "./routes/Datenschutz";
import baThesis from "./routes/BAThesis";
import svelteNavigator from "./routes/SvelteNavigator";
import recipeApp from "./routes/RecipeApp";
import hpStrelow from "./routes/HPStrelow";
import portfolio from "./routes/Portfolio";
import remote from "./routes/Remote";
import pixelnetz from "./routes/Pixelnetz";
import nichtMehr from "./routes/NichtMehrEP";
import prag from "./routes/PragSingle";
import { createRoutes } from "./routes";
import { resetIdCounter } from "./util";

const routes = createRoutes({
	projects,
	index,
	impressum,
	music,
	datenschutz,
	baThesis,
	svelteNavigator,
	recipeApp,
	hpStrelow,
	portfolio,
	remote,
	pixelnetz,
	nichtMehr,
	prag,
});

const minifierOptions = {
	removeComments: false,
	collapseWhitespace: true,
	removeRedundantAttributes: true,
	useShortDoctype: true,
	removeEmptyAttributes: true,
	removeStyleLinkTypeAttributes: true,
	quoteCharacter: '"',
	minifyJS: true,
	minifyCSS: true,
	minifyURLs: true,
};

interface Chunk {
	file: string;
	src?: string;
	isDynamicEntry?: boolean;
	imports?: string[];
	css?: string[];
}

async function main() {
	const distDir = "./dist";
	const indexFile = path.join(distDir, "index.html");
	const templateFile = path.join(distDir, "_index.html");
	const hasTemplate = (await fs.readdir(distDir)).includes(templateFile);
	const template = await fs.readFile(
		hasTemplate ? templateFile : indexFile,
		"utf8",
	);
	if (!hasTemplate) {
		await fs.rename(indexFile, templateFile);
	}
	const manifest: {
		[k: string]: Chunk;
	} = JSON.parse(
		await fs.readFile(path.join(distDir, "manifest.json"), "utf8"),
	);
	const manifestEntries: [string, Chunk][] = Object.entries(manifest);

	const loopDependentChunks = (
		chunk: Chunk,
		cb: (c: Chunk) => void,
		visited = new Set<string>(),
	) => {
		chunk.imports?.forEach((file) => {
			if (visited.has(file)) return;
			visited.add(file);
			const nextChunk = manifest[file];
			if (nextChunk) {
				cb(nextChunk);
				loopDependentChunks(nextChunk, cb, visited);
			}
		});
	};

	const promises = Object.values(routes).map(
		async ({ path: url, name, title, filePath }) => {
			// eslint-disable-next-line no-console
			console.log(`Prerendering chunk "${name}"`);

			// Reset the id counter, so that no global state is persisted
			// between pre-renders
			resetIdCounter();

			const app = <App routes={routes} url={url} />;
			const manifestEntry = manifestEntries.find(([file]) =>
				file.endsWith(filePath),
			);
			if (!manifestEntry) {
				throw new Error(`Could not find lazy loaded route ${filePath}`);
			}
			const [, chunk] = manifestEntry;

			const createCssLinks = (cssFileList: string[]) =>
				cssFileList.map(
					(cssFile) => `<link rel="stylesheet" href="/${cssFile}" />`,
				);
			const createModuleLinks = (jsFileList: string[]) =>
				jsFileList.map(
					(jsFile) => `<link rel="modulepreload" href="/${jsFile}" />`,
				);

			let cssFiles: string[] = [...(chunk.css || [])];
			let jsFiles: string[] = [chunk.file];

			loopDependentChunks(chunk, (c) => {
				if (c.css) {
					const addCss = c.css.filter(
						(css) => !template.includes(`href="/${css}"`),
					);
					cssFiles = [...cssFiles, ...addCss];
				}
				if (
					!template.includes(`href="/${c.file}"`) &&
					!template.includes(`src="/${c.file}"`)
				) {
					jsFiles = [...jsFiles, c.file];
				}
			});

			const cssLinks = [...new Set(createCssLinks(cssFiles))];
			const modulePreload = [...new Set(createModuleLinks(jsFiles))];

			const additionalLinks = [...cssLinks, ...modulePreload].join("\n");

			await prepass(app);
			const html = renderToString(app);
			const titleTag = `<title>${title}</title>`;
			const prerender = template
				.replace(/<!--\s*HTML_OUTLET\s*-->/, html)
				.replace("</head>", `${additionalLinks}</head>`)
				.replace(/<title>.*<\/title>/, titleTag);
			const minifiedHtml = minifyHtml(prerender, minifierOptions);
			await fs.writeFile(
				path.join(distDir, `${name}.html`),
				minifiedHtml,
				"utf8",
			);

			// eslint-disable-next-line no-console
			console.log(`Prerendering chunk "${name}" completed!`);
		},
	);

	// eslint-disable-next-line no-console
	return Promise.all(promises).then(() => console.log("Prerendering Done!\n"));
}

main();
