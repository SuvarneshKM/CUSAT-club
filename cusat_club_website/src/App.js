import React from "react";
import Home from "./pages/desktop/Home";
import { BrowserRouter, Route } from "react-router-dom";
import { Switch } from "react-router";
import useDeviceType from "./hooks/deviceType";

function App() {
	const deviceType = useDeviceType();
	if (deviceType === "mobile") {
		return (
			<BrowserRouter>
				<div className="App">
					<h1>Mob view</h1>
				</div>
			</BrowserRouter>
		);
	} else {
		return (
			<BrowserRouter>
				<div className="App">
					<Switch>
						<Route path="/" component={Home} id="home" exact></Route>
						<Route path="/about"></Route>
						<Route path="/events"></Route>
						<Route path="/team"></Route>
						<Route path="/contact"></Route>
					</Switch>
				</div>
			</BrowserRouter>
		);
	}
}

export default App;
