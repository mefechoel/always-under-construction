import DetailsWrapper from "../../components/DetailsWrapper";
import PixelnetzImg from "../../components/Imgs/Pixelnetz";
import pixelnetzAvif1000 from "./img/pixelnetz-1000.avif";
import pixelnetzAvif750 from "./img/pixelnetz-750.avif";
import pixelnetzAvif500 from "./img/pixelnetz-500.avif";
import pixelnetzAvif250 from "./img/pixelnetz-250.avif";
import pixelnetzWebp1000 from "./img/pixelnetz-1000.webp";
import pixelnetzWebp750 from "./img/pixelnetz-750.webp";
import pixelnetzWebp500 from "./img/pixelnetz-500.webp";
import pixelnetzWebp250 from "./img/pixelnetz-250.webp";
import pixelnetzJpg1000 from "./img/pixelnetz-1000.jpg";
import pixelnetzJpg750 from "./img/pixelnetz-750.jpg";
import pixelnetzJpg500 from "./img/pixelnetz-500.jpg";
import pixelnetzJpg250 from "./img/pixelnetz-250.jpg";
import pixelnetzJpg from "./img/pixelnetz.jpg";
import style from "./Pixelnetz.module.scss";

const Pixelnetz = () => (
	<DetailsWrapper className={style.wrapper}>
		<DetailsWrapper.Img className={style.img}>
			<PixelnetzImg />
		</DetailsWrapper.Img>
		<DetailsWrapper.Body>
			<q>Pixelnetz</q> (en: pixel grid) was created as a group project during
			the 5th and 6th semester of my{" "}
			<a
				href="https://www.th-nuernberg.de/en/faculties/efi/study/media-engineering-beng/"
				target="_blank"
				rel="noopener noreferrer"
			>
				Media Engineering
			</a>{" "}
			studies. The main objective was, to create a system, using which attendees
			of an event could be part of the light show using their smartphones. This
			can be best exemplified in the setting of a sports arena. Every visitor is
			assigned a seat. All the seats are laid out in a grid. Each visitor also
			carries a smartphone with them. If we now imagine, all visitors were to
			hold out their smartphones in front of them, each smartphone could be
			thought of as one pixel of a screen.
			<br />
			The pixel grid is a system, that knows where each smartphone is located
			and is able to change the color of the phone&apos;s screen. This way it
			can display pictures and videos using the arenas layout as a screen.
			<br />
			<br />
			The pixel grid consists of three main components. First, a public web app
			each attendee of an event opens on their smartphone. This app registers
			the phone and its position, which can be retrieved from a qr code, that
			can be scanned at the seat. When a picture or a video is displayed, the
			app adjusts the web pages background color to match the pixel in the image
			it represents.
			<br />
			The second and most integral part of the pixel grid is its backend. It
			consists of a NodeJS server, that connects to every phone and established
			a WebSocket connection. Using this WebSocket, it is able to send live data
			to the phone. Next, it syncs the phone&apos;s and the server&apos;s clock.
			This is, to make sure, that when a video is displayed, all phones step
			from one frame to the next at the exact same time. Otherwise smooth video
			playback would not be possible. When it is time to display a video, the
			backend sends the color data a phone should display and the start time of
			the video through the WebSocket. This color data is called a{" "}
			<q>sequence</q>. It is also the backend&apos;s responsibility to create
			sequence data from images and videos (in the form of animated GIFs). It
			does this in a component called the <q>rasterizer</q>. It is written in
			the Rust programming language, to ensure maximum performance. Rust makes
			parallel programming relatively easy, which is a great fit for the
			rasterizer, as it needs to loop through the frames of an animated image
			and each frames pixels. This process can be sped up drastiacally, by
			looping through frames and pixels in parallel.
			<br />
			The third and last component is the control app, which is protected with a
			password and only accessible to the people running the light show. It can
			be used to upload new images and videos, to monitor connected devices, to
			start and stop video playback and to preview a video, setting the video
			dimensions to the size of the currently connected grid. The controll app
			is a web app written in the JavaScript programming language using the
			frontend libraries{" "}
			<a href="https://reactjs.org/" target="_blank" rel="noopener noreferrer">
				React
			</a>{" "}
			and{" "}
			<a href="https://redux.js.org/" target="_blank" rel="noopener noreferrer">
				Redux
			</a>
			.
		</DetailsWrapper.Body>
		<figure className={style.figure}>
			<a href={pixelnetzJpg} target="_blank" rel="noopener noreferrer">
				<picture>
					<source
						type="image/avif"
						srcSet={`${pixelnetzAvif1000} 1000w, ${pixelnetzAvif750} 750w, ${pixelnetzAvif500} 500w, ${pixelnetzAvif250} 250w`}
					/>
					<source
						type="image/webp"
						srcSet={`${pixelnetzWebp1000} 1000w, ${pixelnetzWebp750} 750w, ${pixelnetzWebp500} 500w, ${pixelnetzWebp250} 250w`}
					/>
					<source
						type="image/jpeg"
						srcSet={`${pixelnetzJpg1000} 1000w, ${pixelnetzJpg750} 750w, ${pixelnetzJpg500} 500w, ${pixelnetzJpg250} 250w`}
					/>
					<img
						width={1000 * 2}
						height={562 * 2}
						src={pixelnetzJpg1000}
						alt="Multiple smartphones displaying a colorful gradient, next to a computer, controlling the animation via the control web app"
						loading="lazy"
					/>
				</picture>
			</a>
			<figcaption className={style.caption}>
				Control web page running an animation
			</figcaption>
		</figure>
	</DetailsWrapper>
);

export default Pixelnetz;
