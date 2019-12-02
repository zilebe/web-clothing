import React from "react";
import { Switch, Route } from "react-router-dom";
import "./App.css";
import HomePage from "./pages/homepage/homepage";

const HatsPage = () => {
	return (
		<div>
			<h1>HATS PAGE</h1>
			<h2>SHOP NOW</h2>
		</div>
	);
};

function App() {
	return (
		<div>
			<Switch>
				<Route exact path="/" component={HomePage} />
				<Route path="/hats" component={HatsPage} />
			</Switch>
		</div>
	);
}

export default App;
