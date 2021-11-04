import DetailsWrapper from "../../components/DetailsWrapper";
import HPStrelowImg from "../../components/Imgs/HPStrelow";

const HPStrelow = () => (
	<DetailsWrapper>
		<DetailsWrapper.Img>
			<HPStrelowImg />
		</DetailsWrapper.Img>
		<DetailsWrapper.Body>
			<a
				href="https://hp-strelow.de"
				hrefLang="de"
				target="_blank"
				rel="noopener noreferrer"
			>
				hp-strelow.de
			</a>{" "}
			is the business page for the naturopathic practice of Kristiane Strelow.
			For this project, special care was taken to ensure that the website is
			compatible with a vast range of devices and browsers.
			<br />A naturopathic practice is potentially of interest to a broad
			variety of people, not limited to one age or profession. It can therefore
			be assumed, that the visitors of the page will include people, who are
			technologically not well versed and who might be using outdated devices or
			browsers. To achive the best possible compatibility, the page is built
			using{" "}
			<a
				href="https://mozilla.github.io/nunjucks/"
				target="_blank"
				rel="noopener noreferrer"
			>
				Nunjucks templates
			</a>
			, which are transformed to plain HTML. JavaScript is only used to augment
			the page and to improve usability. All important information can still be
			accessed when JavaScript is disabled.
			<br />
			<br />
			Since the practice is located in a village in a largely rural area, where
			mobile internet connection is sometimes slow or unavailable, a lot of
			attention was paid to improve the pages loading performance. Images and
			assets are compressed using modern codecs. Moreover, a custom{" "}
			<a
				href="https://developers.google.com/web/fundamentals/primers/service-workers/"
				target="_blank"
				rel="noopener noreferrer"
			>
				service worker
			</a>{" "}
			script was developed to aggressively cache all assets to speed up page
			loads. This also makes it possible to view the page when no internet
			connection is available, provided the user has visited the page before.
		</DetailsWrapper.Body>
	</DetailsWrapper>
);

export default HPStrelow;
