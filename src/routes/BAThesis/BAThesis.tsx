import DetailsWrapper from "../../components/DetailsWrapper";
import BAThesisImg from "../../components/Imgs/BAThesis";
import style from "./BAThesis.module.scss";

const BAThesis = () => (
	<DetailsWrapper className={style.wrapper}>
		<DetailsWrapper.Img className={style.img}>
			<BAThesisImg />
		</DetailsWrapper.Img>
		<DetailsWrapper.Body>
			My bachelor thesis was written during the winter semester 2020/2021. It is
			entitled{" "}
			<q>
				A comparison of reactive frontend web-frameworks - Developing a
				progressive web app with React, Vue und Svelte
			</q>{" "}
			(original German title:{" "}
			<q lang="de">
				Reaktive Frontend-Web-Frameworks im Vergleich - Entwicklung einer
				Progressive Web App mit React, Vue und Svelte
			</q>
			). Its goal was to find out about advantages and disadvantages of each
			framework, with a focus on performance, the availability of reusable
			libraries and resources and the learning curve of each option.
			<br />
			<br />
		</DetailsWrapper.Body>
		<details className={style.details}>
			<summary>Read the abstract in English:</summary>
			<p className={style.abstract}>
				In recent years, the virtual DOM based JavaScript frameworks React and
				Vue, have become the de-facto standard for creating user interfaces.
				Svelte, a new framework, has sparked interest among developers,
				promising improved performance through its fully compiler based
				architecture. To compare advantages and disadvantages of each option and
				to enable an informed decision for or against a framework, an example
				application was developed. It was implemented three times, using React,
				Vue and Svelte respectively. Svelte was indeed able to greatly improve
				the application&apos;s size and with it the download time, as well as
				its runtime performance. However, since Svelte&apos;s community is much
				smaller than that of React or Vue, the number of reusable libraries and
				helpful online forums is very limited. Vue turned out to have a flat
				learning curve and is thus a good fit for inexperienced developers or
				teams with fast onboarding requirements. React shines when the project
				requires flexibility. It enables productive development with its large
				number of available libraries and is easily integrated with lots of
				peripheral technologies. It is not to be expected, that Svelte will ever
				be adopted as widely as React or Vue. Its influence however is
				observable today in other frameworks and it will likely shape future
				advances in web development.
			</p>
		</details>
		<details className={style.details}>
			<summary>Read the abstract in German:</summary>
			<p lang="de" className={style.abstract}>
				Die Virtual DOM basierten JavaScript Frameworks React und Vue, haben
				sich in den letzten Jahren als die beliebtesten User-Interface
				Frameworks etabliert. Das neue Framework Svelte verspricht durch seine
				vollständig Compiler basierte Architektur verbesserte Performance und
				weckt das Interesse von Entwickler*innen. Um die drei Technologien zu
				vergleichen und eine fundierte Entscheidung für oder gegen ein Framework
				treffen zu können, wurde eine Beispielanwendung entwickelt, die drei
				mal, je mit einer der Optionen, umgesetzt wurde. Es zeigte sich, dass
				der Einsatz eines Compilers bei Svelte tatsächlich zu einer stark
				verbesserten Ladezeit und Anwendungsperformance führte. Da Svelte eine
				wesentlich kleinere Community als die verglichenen Frameworks besitzt,
				ist die Auswahl an begleitenden Bibliotheken und Hilfe in online Foren
				jedoch stark begrenzt. Vue erwies sich als besonders leicht zu erlernen
				und bietet sich daher für Teams mit wenig Erfahrung oder viel
				Personalwechsel an. React ist eine gute Wahl, wenn Flexibilität gefragt
				ist und bietet eine große Zahl an Bibliotheken zur Vereinfachung der
				Entwicklung und zum Einsatz begleitender Technologien. Es ist allerdings
				vergleichsweise komplex und erfordert eine längere Zeit zum erlernen. Es
				ist unwahrscheinlich, dass Svelte je ähnlich viel eingesetzt werden wird
				wie React oder Vue, der Einfluss auf andere Frameworks ist allerdings
				bereits heute erkennbar und wird sich auch in zukünftigen Frameworks
				zeigen.
			</p>
		</details>
	</DetailsWrapper>
);

export default BAThesis;
