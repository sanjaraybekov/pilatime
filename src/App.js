import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
// REDUX
import { Provider } from "react-redux";
import store from "./store";

import MainView from "./views";

export default function App() {
	return (
		<Provider store={store}>
			<BrowserRouter basename={"/"}>
				<Switch>
					<Route path={"/"}>
						<MainView />
					</Route>
				</Switch>
			</BrowserRouter>
		</Provider>
	);
}
