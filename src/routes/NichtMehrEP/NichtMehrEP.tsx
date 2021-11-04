import MusicWrapper from "../../components/MusicWrapper";
import NichtMehr from "../../components/Imgs/NichtMehr";

const NichtMehrEp = () => (
	<MusicWrapper>
		<MusicWrapper.Img>
			<NichtMehr />
		</MusicWrapper.Img>
		<MusicWrapper.Body>
			<q>Nicht Mehr</q> (en: <q>Not any more</q>) is the first EP I released. It
			features three instrumental songs. The sounds are a blend of electronic
			instruments, organic samples, synthesizers, electric guitar and acoustic
			as well as electronic drums. To my ears, the EP has a relaxed, atmospheric
			indie vibe.
			<br />
			<br />
			<a
				href="https://open.spotify.com/album/4iFKAnjFgZ0RFafM2pTaku"
				target="_blank"
				rel="noopener noreferrer"
			>
				Listen to the EP on Spotify
			</a>
			.
			<br />
			<a
				href="https://michelstrelow.bandcamp.com/album/nicht-mehr"
				target="_blank"
				rel="noopener noreferrer"
			>
				Download the EP on Bandcamp
			</a>
			.
		</MusicWrapper.Body>
	</MusicWrapper>
);

export default NichtMehrEp;
