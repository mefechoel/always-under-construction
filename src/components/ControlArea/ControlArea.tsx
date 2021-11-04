import type { JSX } from "preact";
import style from "./ControlArea.module.scss";

const createRange = (size: number) => [...new Array(size)].map((x, i) => i);

const ControlArea = ({
	width,
	height,
	onHover,
}: {
	width: number;
	height: number;
	onHover: (x: number, y: number) => void;
}): JSX.Element => {
	const createMouseOverHandler = (x: number, y: number) => () => {
		onHover(x, y);
	};

	return (
		<div className={style.container}>
			{createRange(height).map((y) => (
				<div key={y} className={style.row}>
					{createRange(width).map((x) => (
						<div
							key={x}
							onMouseOver={createMouseOverHandler(x, y)}
							className={style.hoverArea}
						/>
					))}
				</div>
			))}
		</div>
	);
};

export default ControlArea;
