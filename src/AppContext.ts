import { createContext } from "preact";
import type { StateUpdater } from "preact/hooks";
import type { RouteConfigs, RouteConfig } from "./routes";

const AppContext = createContext<{
	routes: RouteConfigs;
	routeList: RouteConfig[];
	navIsOpen: boolean;
	setNavIsOpen: StateUpdater<boolean>;
}>({
	routes: {} as never,
	routeList: [] as never,
	// eslint-disable-next-line @typescript-eslint/no-empty-function
	setNavIsOpen: (() => {}) as never,
	navIsOpen: false as never,
});

export default AppContext;
