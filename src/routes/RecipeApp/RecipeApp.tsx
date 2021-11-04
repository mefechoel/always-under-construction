import DetailsWrapper from "../../components/DetailsWrapper";
import RecipeAppImg from "../../components/Imgs/RecipeApp";
import { Link } from "../../components/Router";
import recipeHomeAvif1000 from "./img/recipe-home-1000.avif";
import recipeHomeAvif750 from "./img/recipe-home-750.avif";
import recipeHomeAvif500 from "./img/recipe-home-500.avif";
import recipeHomeAvif250 from "./img/recipe-home-250.avif";
import recipeHomeWebp1000 from "./img/recipe-home-1000.webp";
import recipeHomeWebp750 from "./img/recipe-home-750.webp";
import recipeHomeWebp500 from "./img/recipe-home-500.webp";
import recipeHomeWebp250 from "./img/recipe-home-250.webp";
import recipeHomeJpg1000 from "./img/recipe-home-1000.jpg";
import recipeHomeJpg750 from "./img/recipe-home-750.jpg";
import recipeHomeJpg500 from "./img/recipe-home-500.jpg";
import recipeHomeJpg250 from "./img/recipe-home-250.jpg";
import recipeFavAvif1000 from "./img/recipe-fav-1000.avif";
import recipeFavAvif750 from "./img/recipe-fav-750.avif";
import recipeFavAvif500 from "./img/recipe-fav-500.avif";
import recipeFavAvif250 from "./img/recipe-fav-250.avif";
import recipeFavWebp1000 from "./img/recipe-fav-1000.webp";
import recipeFavWebp750 from "./img/recipe-fav-750.webp";
import recipeFavWebp500 from "./img/recipe-fav-500.webp";
import recipeFavWebp250 from "./img/recipe-fav-250.webp";
import recipeFavJpg1000 from "./img/recipe-fav-1000.jpg";
import recipeFavJpg750 from "./img/recipe-fav-750.jpg";
import recipeFavJpg500 from "./img/recipe-fav-500.jpg";
import recipeFavJpg250 from "./img/recipe-fav-250.jpg";
import recipeSearchAvif1000 from "./img/recipe-search-1000.avif";
import recipeSearchAvif750 from "./img/recipe-search-750.avif";
import recipeSearchAvif500 from "./img/recipe-search-500.avif";
import recipeSearchAvif250 from "./img/recipe-search-250.avif";
import recipeSearchWebp1000 from "./img/recipe-search-1000.webp";
import recipeSearchWebp750 from "./img/recipe-search-750.webp";
import recipeSearchWebp500 from "./img/recipe-search-500.webp";
import recipeSearchWebp250 from "./img/recipe-search-250.webp";
import recipeSearchJpg1000 from "./img/recipe-search-1000.jpg";
import recipeSearchJpg750 from "./img/recipe-search-750.jpg";
import recipeSearchJpg500 from "./img/recipe-search-500.jpg";
import recipeSearchJpg250 from "./img/recipe-search-250.jpg";
import recipeDetailAvif1000 from "./img/recipe-detail-1000.avif";
import recipeDetailAvif750 from "./img/recipe-detail-750.avif";
import recipeDetailAvif500 from "./img/recipe-detail-500.avif";
import recipeDetailAvif250 from "./img/recipe-detail-250.avif";
import recipeDetailWebp1000 from "./img/recipe-detail-1000.webp";
import recipeDetailWebp750 from "./img/recipe-detail-750.webp";
import recipeDetailWebp500 from "./img/recipe-detail-500.webp";
import recipeDetailWebp250 from "./img/recipe-detail-250.webp";
import recipeDetailJpg1000 from "./img/recipe-detail-1000.jpg";
import recipeDetailJpg750 from "./img/recipe-detail-750.jpg";
import recipeDetailJpg500 from "./img/recipe-detail-500.jpg";
import recipeDetailJpg250 from "./img/recipe-detail-250.jpg";
import ImgGrid from "../../components/ImgGrid";
import Img, { createStdSrcSet } from "../../components/Img";

const RecipeApp = () => (
	<DetailsWrapper>
		<DetailsWrapper.Img>
			<RecipeAppImg />
		</DetailsWrapper.Img>
		<DetailsWrapper.Body>
			<q>Recipe App</q> was developed as part of my{" "}
			<Link to="/ba-thesis">bachelor thesis</Link>. It consists of a NodeJS
			backend written in TypeScript using the server library{" "}
			<a href="https://koajs.com/" target="_blank" rel="noopener noreferrer">
				Koa
			</a>
			. It is responsible for providing the recipe data and running search
			queries. To access and view the recipes, one of three frontend apps can be
			used. Each frontend provides the same user interface and functionality,
			but is implemented using a different JavaScript framework, to showcase
			each frameworks advantages and disadvantages. The frameworks used are{" "}
			<a href="https://reactjs.org/" target="_blank" rel="noopener noreferrer">
				React
			</a>
			,{" "}
			<a href="https://vuejs.org/" target="_blank" rel="noopener noreferrer">
				Vue
			</a>{" "}
			and{" "}
			<a href="https://svelte.dev/" target="_blank" rel="noopener noreferrer">
				Svelte
			</a>
			, all of which are reactive frontend frameworks.
			<br />
			<br />
			Take a look at the page about my{" "}
			<Link to="/ba-thesis">bachelor thesis</Link> for more information.
		</DetailsWrapper.Body>
		<ImgGrid>
			<figure>
				<a href={recipeHomeJpg1000} target="_blank" rel="noopener noreferrer">
					<Img
						srcset={{
							avif: createStdSrcSet({
								"1000": recipeHomeAvif1000,
								"750": recipeHomeAvif750,
								"500": recipeHomeAvif500,
								"250": recipeHomeAvif250,
							}),
							webp: createStdSrcSet({
								"1000": recipeHomeWebp1000,
								"750": recipeHomeWebp750,
								"500": recipeHomeWebp500,
								"250": recipeHomeWebp250,
							}),
							jpeg: createStdSrcSet({
								"1000": recipeHomeJpg1000,
								"750": recipeHomeJpg750,
								"500": recipeHomeJpg500,
								"250": recipeHomeJpg250,
							}),
						}}
						width={750}
						height={1361}
						src={recipeHomeJpg750}
						alt="The home page of the recipe app, displaying a random recipe"
						loading="lazy"
					/>
				</a>
				<figcaption>
					Home page - A new random recipe is displayed on every visit
				</figcaption>
			</figure>
			<figure>
				<a href={recipeSearchJpg1000} target="_blank" rel="noopener noreferrer">
					<Img
						srcset={{
							avif: createStdSrcSet({
								"1000": recipeSearchAvif1000,
								"750": recipeSearchAvif750,
								"500": recipeSearchAvif500,
								"250": recipeSearchAvif250,
							}),
							webp: createStdSrcSet({
								"1000": recipeSearchWebp1000,
								"750": recipeSearchWebp750,
								"500": recipeSearchWebp500,
								"250": recipeSearchWebp250,
							}),
							jpeg: createStdSrcSet({
								"1000": recipeSearchJpg1000,
								"750": recipeSearchJpg750,
								"500": recipeSearchJpg500,
								"250": recipeSearchJpg250,
							}),
						}}
						width={750}
						height={1361}
						src={recipeSearchJpg750}
						alt="The search page of the recipe app"
						loading="lazy"
					/>
				</a>
				<figcaption>
					Search page - Search by entering the name of a dish or a category of
					dishes
				</figcaption>
			</figure>
			<figure>
				<a href={recipeFavJpg1000} target="_blank" rel="noopener noreferrer">
					<Img
						srcset={{
							avif: createStdSrcSet({
								"1000": recipeFavAvif1000,
								"750": recipeFavAvif750,
								"500": recipeFavAvif500,
								"250": recipeFavAvif250,
							}),
							webp: createStdSrcSet({
								"1000": recipeFavWebp1000,
								"750": recipeFavWebp750,
								"500": recipeFavWebp500,
								"250": recipeFavWebp250,
							}),
							jpeg: createStdSrcSet({
								"1000": recipeFavJpg1000,
								"750": recipeFavJpg750,
								"500": recipeFavJpg500,
								"250": recipeFavJpg250,
							}),
						}}
						width={750}
						height={1361}
						src={recipeFavJpg750}
						alt="The favourites page of the recipe app"
						loading="lazy"
					/>
				</a>
				<figcaption>
					Favourites page - Favourites are saved to localStorage, so they are
					persisted over multiple sessions
				</figcaption>
			</figure>
			<figure>
				<a href={recipeDetailJpg1000} target="_blank" rel="noopener noreferrer">
					<Img
						srcset={{
							avif: createStdSrcSet({
								"1000": recipeDetailAvif1000,
								"750": recipeDetailAvif750,
								"500": recipeDetailAvif500,
								"250": recipeDetailAvif250,
							}),
							webp: createStdSrcSet({
								"1000": recipeDetailWebp1000,
								"750": recipeDetailWebp750,
								"500": recipeDetailWebp500,
								"250": recipeDetailWebp250,
							}),
							jpeg: createStdSrcSet({
								"1000": recipeDetailJpg1000,
								"750": recipeDetailJpg750,
								"500": recipeDetailJpg500,
								"250": recipeDetailJpg250,
							}),
						}}
						width={750}
						height={1361}
						src={recipeDetailJpg750}
						alt="The details view of a specific recipe"
						loading="lazy"
					/>
				</a>
				<figcaption>
					Details view - View cooking instructions and ingredients of a recipe
				</figcaption>
			</figure>
		</ImgGrid>
	</DetailsWrapper>
);

export default RecipeApp;
