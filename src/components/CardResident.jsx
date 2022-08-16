import React, { useEffect } from "react";
import useFetch from "../hooks/useFetch";

const CardResident = ({ url }) => {
	const resident = useFetch(url);

	return (
		<article className="card-container">
			<header className="card-container-header">
				<img src={resident?.image} alt={`image of ${resident?.name}`} />
				<div>
					<div className="circle"></div>
					<span className="status">{resident?.status}</span>
				</div>
			</header>
			<div className="card-container-info">
				<h3 className="card-container-info-name">{resident?.name}</h3>
				<ul className="card-container-info-list">
					<li>
						<span>Species: </span> {resident?.species}
					</li>
					<li>
						<span>Origin:</span> {resident?.origin.name}
					</li>
					<li>
						<span>Eppisodes where appear: </span> {resident?.episode.length}
					</li>
				</ul>
			</div>
		</article>
	);
};

export default CardResident;
