import MusicWrapper from "../../components/MusicWrapper";
import Prag from "../../components/Imgs/Prag";

const PragSingle = () => (
	<MusicWrapper>
		<MusicWrapper.Img>
			<Prag />
		</MusicWrapper.Img>
		<MusicWrapper.Body>
			<q>Prag</q> (en: <q>Prague</q>) is the first single I released. It is an
			instrumental song featuring heavy electric guitars and drums, with an
			atmospheric progressive rock/metal sound. It is inspired by the cold and
			foggy atmosphere around Prague&apos;s riverside and hills during winter.
			<br />
			<br />
			<a
				href="https://open.spotify.com/album/6e29d4hDp3hUxTvzmGH4T2"
				target="_blank"
				rel="noopener noreferrer"
			>
				Listen to the single on Spotify
			</a>
			.
			<br />
			<a
				href="https://michelstrelow.bandcamp.com/album/prag"
				target="_blank"
				rel="noopener noreferrer"
			>
				Download the single on Bandcamp
			</a>
			.
		</MusicWrapper.Body>
	</MusicWrapper>
);

export default PragSingle;
