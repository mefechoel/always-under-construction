import Card from "../../components/Card";
import GridPage from "../../components/GridPage";
import style from "./Music.module.scss";
import Prag from "../../components/Imgs/Prag";
import NichtMehr from "../../components/Imgs/NichtMehr";

const Music = () => (
	<GridPage>
		<GridPage.Desc>
			On this page, you will find music I composed, recorded, mixed, mastered
			and released. Click on a card to find links to the released songs.
		</GridPage.Desc>
		<GridPage.Cards>
			<Card route="/nicht-mehr-ep">
				<div className={style.imgWrapper}>
					<NichtMehr className={style.coverImg} />
				</div>
				<Card.Body>
					<Card.Heading>Nicht Mehr</Card.Heading>
					<Card.Description>
						<q>Nicht Mehr</q> (en: <q>Not any more</q>) is the first EP I
						released. It features three instrumental songs. The sounds are a
						blend of electronic instruments, organic samples, synthesizers,
						electric guitar and acoustic as well as electronic drums. To my
						ears, the EP has a relaxed, atmospheric indie vibe.
					</Card.Description>
				</Card.Body>
			</Card>
			<Card route="/prag-single">
				<div className={style.imgWrapper}>
					<Prag className={style.coverImg} />
				</div>
				<Card.Body>
					<Card.Heading>Prag</Card.Heading>
					<Card.Description>
						<q>Prag</q> (en: <q>Prague</q>) is the first single I released. It
						is an instrumental song featuring heavy electric guitars and drums,
						with an atmospheric progressive rock/metal sound. It is inspired by
						the cold and foggy atmosphere around Prague&apos;s riverside and
						hills during winter.
					</Card.Description>
				</Card.Body>
			</Card>
		</GridPage.Cards>
	</GridPage>
);

export default Music;
