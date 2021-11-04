import DetailsWrapper from "../../components/DetailsWrapper";
import PortfolioImg from "../../components/Imgs/Portfolio";
import { Link } from "../../components/Router";

const Portfolio = () => (
	<DetailsWrapper>
		<DetailsWrapper.Img>
			<PortfolioImg />
		</DetailsWrapper.Img>
		<DetailsWrapper.Body>
			This portfolio is built with modern CSS, TypeScript and{" "}
			<a href="https://preactjs.com/" target="_blank" rel="noopener noreferrer">
				Preact
			</a>
			, an alternative to React, that is only a fraction of React&apos;s size,
			thus enabling a much improved loading performance. Since most of the
			content is static, each sub page is pre-rendered into a HTML file, which
			contains the HTML structure Preact would produce for the given page. This
			way, the page is still usable when JavaScript is disabled. Furthermore,
			loading performance and SEO are improved drastically through this
			approach. The pre-rendering is implemented using the{" "}
			<a href="https://vitejs.dev/" target="_blank" rel="noopener noreferrer">
				Vite JavaScript bundler
			</a>{" "}
			and the Preact utilities{" "}
			<a
				href="https://github.com/preactjs/preact-render-to-string"
				target="_blank"
				rel="noopener noreferrer"
			>
				preact-render-to-string
			</a>{" "}
			and{" "}
			<a
				href="https://github.com/preactjs/preact-ssr-prepass"
				target="_blank"
				rel="noopener noreferrer"
			>
				preact-ssr-prepass
			</a>
			. To further improve performance, all assets are compressed using modern
			codecs, such as WebP and AVIF for images and Zopfli (an improved Gzip
			algorithm) for text files.
			<br />
			<br />A custom, lightweight router, based on the{" "}
			<a
				href="https://github.com/mefechoel/svelte-navigator-history"
				target="_blank"
				rel="noopener noreferrer"
			>
				history module
			</a>{" "}
			of <Link to="svelte-navigator">Svelte Navigator</Link>, provides the
			usability benefits of a single page without sacrificing loading
			performance, thanks to pre-rendering.
			<br />
			<br />
			The font used on the page is{" "}
			<a
				href="https://rsms.me/inter/"
				target="_blank"
				rel="noopener noreferrer"
			>
				Inter
			</a>{" "}
			- a clean, modern and versatile sans-serif font. By using its variable
			font version, a plethora of font styles, ranging from thin to black and
			from straight to oblique, can be used while only needing one font file.
			<br />
			The icons used on the page are taken from the{" "}
			<a
				href="https://github.com/tabler/tabler-icons"
				target="_blank"
				rel="noreferrer"
			>
				Tabler Icons
			</a>{" "}
			and{" "}
			<a
				href="https://github.com/google/material-design-icons"
				rel="noopener noreferrer"
			>
				Material Icons
			</a>{" "}
			libraries.
			<br />
			<br />
			Checkout the project&apos;s{" "}
			<a
				href="https://github.com/mefechoel/portfolio"
				target="_blank"
				rel="noopener noreferrer"
			>
				GitHub repository
			</a>
			.
		</DetailsWrapper.Body>
	</DetailsWrapper>
);

export default Portfolio;
