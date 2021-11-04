import Card from "../../components/Card";
import GridPage from "../../components/GridPage";
import BAThesis from "../../components/Imgs/BAThesis";
import HPStrelow from "../../components/Imgs/HPStrelow";
import RecipeApp from "../../components/Imgs/RecipeApp";
import Pixelnetz from "../../components/Imgs/Pixelnetz";
import Portfolio from "../../components/Imgs/Portfolio";
import Remote from "../../components/Imgs/Remote";
import SvelteNavigator from "../../components/Imgs/SvelteNavigator";

const Project = () => (
	<GridPage>
		<GridPage.Desc>
			On this page, you will find a list of private and academic software
			projects. Click a project card to view a more detailed description of a
			project.
		</GridPage.Desc>
		<GridPage.Cards>
			<Card route="/ba-thesis">
				<Card.Img label="React, Vue and Svelte">
					<BAThesis />
				</Card.Img>
				<Card.Body>
					<Card.Heading>Bachelor Thesis</Card.Heading>
					<Card.Description>
						In my bachelor thesis, I compared three popular reactive frontend
						JavaScript frameworks. The main points of interest for the
						comparison were performance, the availability of reusable libraries
						and resources and the learning curve of each option.
					</Card.Description>
				</Card.Body>
			</Card>
			<Card route="/svelte-navigator">
				<Card.Img label="Compass">
					<SvelteNavigator />
				</Card.Img>
				<Card.Body>
					<Card.Heading>Svelte Navigator</Card.Heading>
					<Card.Description>
						Svelte Navigator is an accessible single page app routing library
						for apps built with the <q>Svelte</q> frontend framework.
					</Card.Description>
				</Card.Body>
			</Card>
			<Card route="/recipe-app">
				<Card.Img label="Noodle dish in a bowl">
					<RecipeApp />
				</Card.Img>
				<Card.Body>
					<Card.Heading>Recipe App</Card.Heading>
					<Card.Description>
						<q>Recipe App</q> was developed as part of my bachelor thesis. It
						consists of a backend, responsible for providing the recipe data,
						and three frontend apps. Each frontend is implemented using a
						different JavaScript framework, to showcase each frameworks
						advantages and disadvantages.
					</Card.Description>
				</Card.Body>
			</Card>
			<Card route="/pixelnetz">
				<Card.Img label="Mobile phones laid out in a grid blinking in various colors">
					<Pixelnetz />
				</Card.Img>
				<Card.Body>
					<Card.Heading>Pixel&shy;netz</Card.Heading>
					<Card.Description>
						With Pixelnetz (en: pixel grid) the attendees of an event become
						part of the show. Each visitor can participate in the light show, by
						connecting their phone to the pixel grid.
					</Card.Description>
				</Card.Body>
			</Card>
			<Card route="/hp-strelow">
				<Card.Img label="Spiral">
					<HPStrelow />
				</Card.Img>
				<Card.Body>
					<Card.Heading>HP-Strelow</Card.Heading>
					<Card.Description>
						hp-strelow.de is the business page for the naturopathic practice of
						Kristiane Strelow.
					</Card.Description>
				</Card.Body>
			</Card>
			<Card route="/remote">
				<Card.Img label="Remote control buttons">
					<Remote />
				</Card.Img>
				<Card.Body>
					<Card.Heading>Remote Control</Card.Heading>
					<Card.Description>
						<q>Remote Control</q> is a simple app you can install on your
						computer. It allows you to control media playback via a simple web
						app, that connects to your device. This way you can play or pause
						videos, alter their loudness or select a new film on a streaming
						platform.
					</Card.Description>
				</Card.Body>
			</Card>
			<Card route="/portfolio">
				<Card.Img label="The letter 'M'">
					<Portfolio />
				</Card.Img>
				<Card.Body>
					<Card.Heading>Portfolio</Card.Heading>
					<Card.Description>
						[Insert joke about recursion here]
					</Card.Description>
				</Card.Body>
			</Card>
		</GridPage.Cards>
	</GridPage>
);

export default Project;
