const initialOrientation = useRef({ yy: -1, xx: -1 });

const [accellState, setAccellState] = useState({
	x: -1,
	y: -1,
	aX: -1,
	aY: -1,
	aZ: -1,
	xx: -1,
	yy: -1,
});
useEffect(() => {
	const handleOrientation = throttle((event: DeviceOrientationEvent) => {
		const x = event.beta || 0; // In degree in the range [-180,180]
		const y = event.gamma || 0; // In degree in the range [-90,90]

		let yy = Math.round(y);
		let xx = Math.round(x);

		if (x > 0 && x < 90) {
			xx = 100 - Math.round(x) / 2.1;
		} else if (x > -90 && x < 0) {
			xx = 100 - Math.round(x) / 2.1;
		} else {
			xx = 100;
		}

		if (y > 0 && y < 90) {
			yy = 100 + Math.round(y) / 2.1;
		} else if (y > -90 && y < 0) {
			yy = 100 - Math.round(y) / 2.1;
		} else {
			yy = 100;
		}

		xx = Number(xx.toFixed(2));
		yy = Number(yy.toFixed(2));

		if (
			initialOrientation.current.xx === -1 &&
			initialOrientation.current.yy === -1
		) {
			initialOrientation.current = { xx, yy };
		}

		setAccellState((prev) => ({
			...prev,
			xx: initialOrientation.current.xx - xx,
			yy: initialOrientation.current.yy - yy,
		}));

		const xabc = initialOrientation.current.xx - xx;
		const yabc = initialOrientation.current.yy - yy;
		setShiftValue({ x: xabc, y: yabc });
	}, 200);

	const handleAccelerometerUpdate = throttle((e: DeviceMotionEvent) => {
		const aX = e.accelerationIncludingGravity?.x || 0;
		const aY = e.accelerationIncludingGravity?.y || 0;
		const aZ = e.accelerationIncludingGravity?.z || 0;
		const xPosition = Number(Math.atan2(aY, aZ).toFixed(2));
		const yPosition = Number(Math.atan2(aX, aZ).toFixed(2));
		setAccellState((prev) => ({
			...prev,
			x: xPosition,
			y: yPosition,
			aX: Number(aX.toFixed(2)),
			aY: Number(aY.toFixed(2)),
			aZ: Number(aZ.toFixed(2)),
		}));
	}, 200);
	if (window.DeviceMotionEvent) {
		window.addEventListener("devicemotion", handleAccelerometerUpdate, true);
		window.addEventListener("deviceorientation", handleOrientation, true);
	}
	return () => {
		window.removeEventListener("devicemotion", handleAccelerometerUpdate, true);
		window.removeEventListener("deviceorientation", handleOrientation, true);
	};
}, []);
