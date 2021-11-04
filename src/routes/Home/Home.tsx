import portrait1000Jpg from "./imgs/portrait-1000.jpg";
import portrait750Jpg from "./imgs/portrait-750.jpg";
import portrait500Jpg from "./imgs/portrait-500.jpg";
import portrait250Jpg from "./imgs/portrait-250.jpg";
import portrait1000Webp from "./imgs/portrait-1000.webp";
import portrait750Webp from "./imgs/portrait-750.webp";
import portrait500Webp from "./imgs/portrait-500.webp";
import portrait250Webp from "./imgs/portrait-250.webp";
import portrait1000Avif from "./imgs/portrait-1000.avif";
import portrait750Avif from "./imgs/portrait-750.avif";
// For some reason, the 500px avif version breaks when pubished
// to prod system...
import portrait512Avif from "./imgs/portrait-512.avif";
import portrait250Avif from "./imgs/portrait-250.avif";
import TextContainer from "../../components/TextContainer";
import Img, { createStdSrcSet } from "../../components/Img";
import style from "./Home.module.scss";

const Home = () => (
	<>
		<h2>Welcome!</h2>
		<TextContainer>
			<div className={style.portraitWrapper}>
				<Img
					srcset={{
						avif: createStdSrcSet({
							1000: portrait1000Avif,
							750: portrait750Avif,
							500: portrait512Avif,
							250: portrait250Avif,
						}),
						webp: createStdSrcSet({
							1000: portrait1000Webp,
							750: portrait750Webp,
							500: portrait500Webp,
							250: portrait250Webp,
						}),
						jpeg: createStdSrcSet({
							1000: portrait1000Jpg,
							750: portrait750Jpg,
							500: portrait500Jpg,
							250: portrait250Jpg,
						}),
					}}
					className={style.portrait}
					alt="Michel Strelow standing in front of a brick wall"
					src={portrait750Jpg}
					width={750}
					height={750}
					loading="lazy"
				/>
			</div>
			<p className={style.text}>
				Hello! My name is Michel Strelow and you&apos;ve found my portfolio
				website. I am interested in the web, programming, music, typography and
				photography. In the beginning of 2021, I completed my bachelors degree
				in{" "}
				<a
					href="https://www.th-nuernberg.de/en/faculties/efi/study/media-engineering-beng/"
					target="_blank"
					rel="noopener noreferrer"
				>
					Media Engineering
				</a>{" "}
				at{" "}
				<a
					href="https://www.th-nuernberg.de/en/"
					target="_blank"
					rel="noopener noreferrer"
				>
					Technische Hochschule Nürnberg
				</a>
				. Parallel to my studies, I am employed as a working student at{" "}
				<a
					href="https://www.init.de/en"
					target="_blank"
					rel="noopener noreferrer"
				>
					<span aria-hidden="true">]</span>init<span aria-hidden="true">[</span>{" "}
					AG
				</a>
				, where I work as a frontend web developer. For this website, I have
				selected a few of my private and academic projects.
			</p>
		</TextContainer>
	</>
);

export default Home;
