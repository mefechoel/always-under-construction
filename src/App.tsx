import "./index.scss";
import type { JSX } from "preact";
import cx from "./cx";
import {
	Ref,
	useCallback,
	useEffect,
	useLayoutEffect,
	useMemo,
	useRef,
	useState,
} from "preact/hooks";
import style from "./App.module.scss";
import { throttle } from "./util";

const setProperty = (
	elem: HTMLElement | null | undefined,
	property: string,
	value: number | string,
) => {
	elem?.style.setProperty(property, `${value}`);
};

const App = (): JSX.Element => {
	const mainRef: Ref<HTMLElement | null> = useRef(null);

	const [shift, setShift] = useState({
		x: 0,
		y: 0,
		z: 0,
		perspective: 0,
	});

	const setShiftValue = useCallback(
		(
			patch:
				| Partial<typeof shift>
				| ((prevState: typeof shift) => Partial<typeof shift>),
		) => {
			setShift((prevShift) => ({
				...prevShift,
				...(typeof patch === "function" ? patch(prevShift) : patch),
			}));
		},
		[],
	);

	useLayoutEffect(() => {
		Object.entries(shift).forEach(([key, value]) => {
			setProperty(mainRef.current, `--shift-${key}`, `${value}`);
		});
	}, [shift]);

	const mouseStartY = useRef<number>(0);

	const moveXY = useCallback(
		(posX: number, posY: number) => {
			const ratioX = posX / window.innerWidth;
			const ratioY = posY / window.innerHeight;
			const offsetX = ratioX - 0.5;
			const offsetY = ratioY - 0.5;
			setShiftValue({ x: offsetX, y: offsetY });
		},
		[setShiftValue],
	);

	const handleMouseMove = useMemo(
		() =>
			throttle((e: MouseEvent) => {
				const isMousePressed = !!e.buttons;
				const isCtrlPressed = e.ctrlKey;
				const { clientX, clientY } = e;
				if (!isMousePressed && !isCtrlPressed) {
					moveXY(clientX, clientY);
					return;
				}
				const deltaY = clientY - mouseStartY.current;
				const deltaYRatio = deltaY / window.innerHeight;
				console.log(deltaYRatio);
				if (isCtrlPressed) {
					setShiftValue((prevShift) => ({
						z: prevShift.z + deltaYRatio * 3,
					}));
				}
				setShiftValue((prevShift) => ({
					perspective: prevShift.perspective + deltaYRatio * 3,
				}));
			}, 100),
		[setShiftValue],
	);

	const handleMouseDown = (e: MouseEvent) => {
		mouseStartY.current = e.clientY;
		console.log("MouseDown");
	};
	const handleMouseUp = () => {
		console.log("MouseUp");
	};
	const handleScroll = () => {
		console.log("Scroll");
	};

	const pointerStartX = useRef<number>(0);
	const pointerStartY = useRef<number>(0);
	const handlePointerDown: JSX.PointerEventHandler<HTMLElement> = (e) => {
		pointerStartX.current = e.clientX;
		pointerStartY.current = e.clientY;
	};
	const handlePointerMove: JSX.PointerEventHandler<HTMLElement> = throttle(
		(e) => {
			const deltaX = pointerStartX.current - e.clientX;
			const deltaY = pointerStartY.current - e.clientY;
			moveXY(deltaX, deltaY);
		},
		100,
	);

	return (
		<>
			<main
				ref={mainRef}
				data-app-wrapper=""
				className={style.main}
				onMouseMove={handleMouseMove}
				onMouseDown={handleMouseDown}
				onMouseUp={handleMouseUp}
				// onPointerDown={handlePointerDown}
				// onPointerMove={handlePointerMove}
				// onPointerEnter
				onScroll={handleScroll}
			>
				<div className={style.loremWrapper}>
					<div className={cx(style.lorem, style.lorem1)}>
						Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eveniet
						animi, quas voluptatibus nam aut optio consequatur iste facilis
						officia aspernatur earum laudantium illo libero rerum odit dolorem
						cum voluptatem accusantium beatae! Voluptates repellendus ullam
						facere. Ut ad incidunt, dolores excepturi iusto dignissimos ab
						laborum dolorum libero iure. Tempore debitis quod, eligendi nostrum
						consequuntur natus excepturi, beatae non minima ducimus omnis sint
						autem porro ab. Iste natus ea vitae ad ut labore aperiam tempore, ex
						modi, ipsam, est incidunt? Et culpa fuga accusantium voluptatum!
					</div>
					<div className={cx(style.lorem, style.lorem2)}>
						Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eveniet
						animi, quas voluptatibus nam aut optio consequatur iste facilis
						officia aspernatur earum laudantium illo libero rerum odit dolorem
						cum voluptatem accusantium beatae! Voluptates repellendus ullam
						facere. Ut ad incidunt, dolores excepturi iusto dignissimos ab
						laborum dolorum libero iure. Tempore debitis quod, eligendi nostrum
						consequuntur natus excepturi, beatae non minima ducimus omnis sint
						autem porro ab. Iste natus ea vitae ad ut labore aperiam tempore, ex
						modi, ipsam, est incidunt? Et culpa fuga accusantium voluptatum!
					</div>
					<div className={cx(style.lorem, style.lorem3)}>
						Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eveniet
						animi, quas voluptatibus nam aut optio consequatur iste facilis
						officia aspernatur earum laudantium illo libero rerum odit dolorem
						cum voluptatem accusantium beatae! Voluptates repellendus ullam
						facere. Ut ad incidunt, dolores excepturi iusto dignissimos ab
						laborum dolorum libero iure. Tempore debitis quod, eligendi nostrum
						consequuntur natus excepturi, beatae non minima ducimus omnis sint
						autem porro ab. Iste natus ea vitae ad ut labore aperiam tempore, ex
						modi, ipsam, est incidunt? Et culpa fuga accusantium voluptatum!
					</div>
					<div className={cx(style.lorem, style.lorem4)}>
						Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eveniet
						animi, quas voluptatibus nam aut optio consequatur iste facilis
						officia aspernatur earum laudantium illo libero rerum odit dolorem
						cum voluptatem accusantium beatae! Voluptates repellendus ullam
						facere. Ut ad incidunt, dolores excepturi iusto dignissimos ab
						laborum dolorum libero iure. Tempore debitis quod, eligendi nostrum
						consequuntur natus excepturi, beatae non minima ducimus omnis sint
						autem porro ab. Iste natus ea vitae ad ut labore aperiam tempore, ex
						modi, ipsam, est incidunt? Et culpa fuga accusantium voluptatum!
					</div>
					<div className={cx(style.lorem, style.lorem5)}>
						Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eveniet
						animi, quas voluptatibus nam aut optio consequatur iste facilis
						officia aspernatur earum laudantium illo libero rerum odit dolorem
						cum voluptatem accusantium beatae! Voluptates repellendus ullam
						facere. Ut ad incidunt, dolores excepturi iusto dignissimos ab
						laborum dolorum libero iure. Tempore debitis quod, eligendi nostrum
						consequuntur natus excepturi, beatae non minima ducimus omnis sint
						autem porro ab. Iste natus ea vitae ad ut labore aperiam tempore, ex
						modi, ipsam, est incidunt? Et culpa fuga accusantium voluptatum!
					</div>
				</div>
			</main>
		</>
	);
};

export default App;
