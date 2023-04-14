import React from "react";
import { Route, Switch } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
const Notfound = React.lazy(() => import("./pages/404"));
const Home = React.lazy(() => import("./home"));
const App = React.lazy(() => import("./pages/app"));
export default function AppRoot() {
	return (
		<React.Suspense fallback={"..."}>
			<Switch>
				<Route path={"*"}>
					<AnimatePresence>
						<Switch>
							<Route exact path="/" component={Home} />
							<Route path="/app" component={App} />
							<Route component={Notfound} />
						</Switch>
					</AnimatePresence>
				</Route>
			</Switch>
		</React.Suspense>
	);
}
