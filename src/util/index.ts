import { useState } from "preact/hooks";

let idCounter = 0;
export const createId = (label: string) => `${label}--${idCounter++}`;

export const resetIdCounter = () => {
	idCounter = 0;
};

export const useId = (label: string) => {
	const [id] = useState(() => createId(label));
	return id;
};

export const focus = (elem: HTMLElement) => {
	if (!elem) return;
	const tabIndex = "tabindex";
	if (!elem.hasAttribute(tabIndex)) {
		elem.setAttribute(tabIndex, "-1");
		const blurListener = () => {
			elem.removeAttribute(tabIndex);
			elem.removeEventListener("blur", blurListener);
		};
		elem.addEventListener("blur", blurListener);
	}
	elem.focus();
};

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export function throttle<Fn extends (...args: any[]) => any>(
	callback: Fn,
	limit: number,
): Fn {
	let waiting = false;
	const throttled = ((...args) => {
		if (!waiting) {
			callback(...args);
			waiting = true;
			setTimeout(function () {
				waiting = false;
			}, limit);
		}
	}) as Fn;
	return throttled;
}
