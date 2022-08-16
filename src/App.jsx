import { useEffect, useState } from "react";
import "./App.css";
import axios from "axios";
import CardResident from "./components/CardResident";
import LocationInfo from "./components/LocationInfo";

function App() {
	const [searchInput, setSearchInput] = useState("");
	const [location, setLocation] = useState();

	useEffect(() => {
		let randomLocation;

		if (searchInput === "") {
			randomLocation = Math.floor(Math.random() * (126 - 1) + 1);
		} else {
			randomLocation = searchInput;
		}

		const URL = `https://rickandmortyapi.com/api/location/${randomLocation}`;
		axios
			.get(URL)
			.then((res) => setLocation(res.data))
			.catch((err) => console.log(err));
	}, [searchInput]);

	// Busqueda por input

	const handleSubmit = (e) => {
		e.preventDefault();
		setSearchInput(e.target.search.value);
	};

	return (
		<div className="App">
			<div className="App-header">
				<h1>Rick and Morty</h1>
				<form className="App-form" onSubmit={handleSubmit}>
					<input id="search" type="text" placeholder="type a location id" />
					<button>Search</button>
				</form>
			</div>
			<LocationInfo location={location} />
			<div className="card">
				{location?.residents.map((url) => (
					<CardResident key={url} url={url} />
				))}
			</div>
		</div>
	);
}

export default App;
