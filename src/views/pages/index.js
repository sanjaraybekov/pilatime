import React from "react";
import { Route, Switch } from "react-router-dom";
import Notfound from "./404";

export default function PagesRoute() {
	return (
		<Switch>
			<Route path="/pages/404" component={Notfound} />
			<Route component={Notfound} />
		</Switch>
	);
}
