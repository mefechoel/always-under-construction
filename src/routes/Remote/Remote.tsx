import DetailsWrapper from "../../components/DetailsWrapper";
import Img, { createStdSrcSet } from "../../components/Img";
import RemoteImg from "../../components/Imgs/Remote";
import page1Avif1000 from "./img/remote-1-1000.avif";
import page1Avif750 from "./img/remote-1-750.avif";
import page1Avif500 from "./img/remote-1-500.avif";
import page1Avif250 from "./img/remote-1-250.avif";
import page1Webp1000 from "./img/remote-1-1000.webp";
import page1Webp750 from "./img/remote-1-750.webp";
import page1Webp500 from "./img/remote-1-500.webp";
import page1Webp250 from "./img/remote-1-250.webp";
import page1Jpg1000 from "./img/remote-1-1000.jpg";
import page1Jpg750 from "./img/remote-1-750.jpg";
import page1Jpg500 from "./img/remote-1-500.jpg";
import page1Jpg250 from "./img/remote-1-250.jpg";
import page2Avif1000 from "./img/remote-2-1000.avif";
import page2Avif750 from "./img/remote-2-750.avif";
import page2Avif500 from "./img/remote-2-500.avif";
import page2Avif250 from "./img/remote-2-250.avif";
import page2Webp1000 from "./img/remote-2-1000.webp";
import page2Webp750 from "./img/remote-2-750.webp";
import page2Webp500 from "./img/remote-2-500.webp";
import page2Webp250 from "./img/remote-2-250.webp";
import page2Jpg1000 from "./img/remote-2-1000.jpg";
import page2Jpg750 from "./img/remote-2-750.jpg";
import page2Jpg500 from "./img/remote-2-500.jpg";
import page2Jpg250 from "./img/remote-2-250.jpg";
import page3Avif1000 from "./img/remote-3-1000.avif";
import page3Avif750 from "./img/remote-3-750.avif";
import page3Avif500 from "./img/remote-3-500.avif";
import page3Avif250 from "./img/remote-3-250.avif";
import page3Webp1000 from "./img/remote-3-1000.webp";
import page3Webp750 from "./img/remote-3-750.webp";
import page3Webp500 from "./img/remote-3-500.webp";
import page3Webp250 from "./img/remote-3-250.webp";
import page3Jpg1000 from "./img/remote-3-1000.jpg";
import page3Jpg750 from "./img/remote-3-750.jpg";
import page3Jpg500 from "./img/remote-3-500.jpg";
import page3Jpg250 from "./img/remote-3-250.jpg";
import ImgGrid from "../../components/ImgGrid";
import style from "./Remote.module.scss";

const Remote = () => (
	<DetailsWrapper className={style.wrapper}>
		<DetailsWrapper.Img className={style.img}>
			<RemoteImg />
		</DetailsWrapper.Img>
		<DetailsWrapper.Body>
			<q>Remote Control</q> is a simple app you can install on your computer. It
			allows you to control media playback via a simple web app, that connects
			to your device. This way you can play or pause videos, alter their
			loudness or select a new movie on a streaming platform.
			<br />
			The application you install on your computer is a simple program, written
			in Rust, that hosts a server on the local network. The server is
			implemented using the Rust library{" "}
			<a href="https://rocket.rs/" target="_blank" rel="noopener noreferrer">
				Rocket
			</a>
			. It exposes endpoints, that when requested, issue commands to the
			operating system. Using the libraries{" "}
			<a
				href="https://docs.rs/enigo/0.0.14/enigo/"
				target="_blank"
				rel="noopener noreferrer"
			>
				Enigo
			</a>{" "}
			and{" "}
			<a
				href="https://docs.rs/winapi/0.3.9/winapi/"
				target="_blank"
				rel="noopener noreferrer"
			>
				WinAPI
			</a>
			, keyboard or mouse input can be simulated. This way, the app can control
			media loudness or playback by virtually pressing media keys.
			<br />
			The app also serves a web app, that can be accessed with a smartphone,
			that is connected to the same network as the host computer. The web app is
			implemented using the JavaScript frontend framework{" "}
			<a href="https://svelte.dev/" target="_blank" rel="noopener noreferrer">
				Svelte
			</a>
			. It features three screens. First, a screen with buttons, with which the
			most basic media playback options can be controled. Playback can be paused
			and resumed, the loudness can be altered and tracks can be skipped.
			Second, a trackpad to move the mouse, click and scroll the screen. And
			last a settings page, which allows the user to change the app&apos; color
			scheme and fine tune the experience.
			<br />
			<br />
			Checkout the projects{" "}
			<a
				href="https://github.com/mefechoel/remote-control"
				target="_blank"
				rel="noopener noreferrer"
			>
				GitHub repository
			</a>
			.
		</DetailsWrapper.Body>
		<ImgGrid>
			<figure>
				<a href={page1Jpg1000} target="_blank" rel="noopener noreferrer">
					<Img
						srcset={{
							avif: createStdSrcSet({
								"1000": page1Avif1000,
								"750": page1Avif750,
								"500": page1Avif500,
								"250": page1Avif250,
							}),
							webp: createStdSrcSet({
								"1000": page1Webp1000,
								"750": page1Webp750,
								"500": page1Webp500,
								"250": page1Webp250,
							}),
							jpeg: createStdSrcSet({
								"1000": page1Jpg1000,
								"750": page1Jpg750,
								"500": page1Jpg500,
								"250": page1Jpg250,
							}),
						}}
						width={750}
						height={1478}
						src={page1Jpg750}
						alt="Page one of the app displaying a grid of control buttons"
						loading="lazy"
					/>
				</a>
				<figcaption>
					Page one - Control buttons for the main functions, such as play/pause
				</figcaption>
			</figure>
			<figure>
				<a href={page2Jpg1000} target="_blank" rel="noopener noreferrer">
					<Img
						srcset={{
							avif: createStdSrcSet({
								"1000": page2Avif1000,
								"750": page2Avif750,
								"500": page2Avif500,
								"250": page2Avif250,
							}),
							webp: createStdSrcSet({
								"1000": page2Webp1000,
								"750": page2Webp750,
								"500": page2Webp500,
								"250": page2Webp250,
							}),
							jpeg: createStdSrcSet({
								"1000": page2Jpg1000,
								"750": page2Jpg750,
								"500": page2Jpg500,
								"250": page2Jpg250,
							}),
						}}
						width={750}
						height={1478}
						src={page2Jpg750}
						alt="Page two of the app displaying a trackpad to move the mouse"
						loading="lazy"
					/>
				</a>
				<figcaption>Page two - Trackpad to move and click the mouse</figcaption>
			</figure>
			<figure>
				<a href={page3Jpg1000} target="_blank" rel="noopener noreferrer">
					<Img
						srcset={{
							avif: createStdSrcSet({
								"1000": page3Avif1000,
								"750": page3Avif750,
								"500": page3Avif500,
								"250": page3Avif250,
							}),
							webp: createStdSrcSet({
								"1000": page3Webp1000,
								"750": page3Webp750,
								"500": page3Webp500,
								"250": page3Webp250,
							}),
							jpeg: createStdSrcSet({
								"1000": page3Jpg1000,
								"750": page3Jpg750,
								"500": page3Jpg500,
								"250": page3Jpg250,
							}),
						}}
						width={750}
						height={1478}
						src={page3Jpg750}
						alt="Page three of the app displaying settings"
						loading="lazy"
					/>
				</a>
				<figcaption>Page three - Settings page</figcaption>
			</figure>
		</ImgGrid>
	</DetailsWrapper>
);

export default Remote;
