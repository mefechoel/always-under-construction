import { Link } from "../../components/Router";
import DetailsWrapper from "../../components/DetailsWrapper";
import SvelteNavigatorImg from "../../components/Imgs/SvelteNavigator";

const SvelteNavigator = () => (
	<DetailsWrapper>
		<DetailsWrapper.Img>
			<SvelteNavigatorImg />
		</DetailsWrapper.Img>
		<DetailsWrapper.Body>
			Svelte Navigator is an accessible single page app routing library for apps
			built with the <q>Svelte</q> frontend framework. When working on the
			Svelte frontend for my <Link to="/ba-thesis">bachelor thesis</Link>, I was
			unable to find a routing libraries that worked correctly with my app. The
			main problem was, that the Svelte app was served from a subdirectory on my
			server, which existing libraries did not handle well.
			<br />
			Furthermore a lot of care was taken to ensure, that Svelte Navigator helps
			people build accessible websites. Historically,{" "}
			<a
				href="https://medium.com/@robdel12/single-page-apps-routers-are-broken-255daa310cf"
				target="_blank"
				rel="noopener noreferrer"
			>
				SPA routing libraries did not work well with assistive technologies
			</a>
			. Svelte Navigator ensures that after a navigation, focus is moved to the
			part of the app that has actually changed, giving a starting point for
			users of assistive technologies to quickly discover added content.
			<br />
			<br />
			Checkout{" "}
			<a
				href="https://github.com/mefechoel/svelte-navigator"
				target="_blank"
				rel="noopener noreferrer"
			>
				Svelte Navigator&apos;s GitHub repository
			</a>{" "}
			and its{" "}
			<a
				href="https://www.npmjs.com/package/svelte-navigator"
				target="_blank"
				rel="noopener noreferrer"
			>
				NPM package page
			</a>
			.
		</DetailsWrapper.Body>
	</DetailsWrapper>
);

export default SvelteNavigator;
