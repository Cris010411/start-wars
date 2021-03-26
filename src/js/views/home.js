import React, { useEffect, useState, useContext } from "react";
import { Context } from "../store/appContext";
import rigoImage from "../../img/rigo-baby.jpg";
import "../../styles/home.scss";
import { Card } from "../component/card";
import { PlanetsCard } from "../component/planetsCard";

export const Home = () => {
	const { store, actions } = useContext(Context);

	useEffect(() => {
		actions.getPlanets();
		actions.getPeoples();
		actions.Favorite();
	}, []);

	return (
		<div className="container-fluid ">
			<h1 className="pers">Personajes</h1>
			<div className="scrollmenu scro1">
				<div className="row text-center">
					<div className="col" style={{ margin: "3rem 1rem 1rem 1rem" }}>
						{store.peoples.map((items, i) => {
							//actions.getInfPeoples1(items.uid);
							return (
								<div key={i} style={{ marginRight: "10px" }}>
									<Card
										title={items.name}
										//url={items.url}
										//uid={items.uid}
										index={i + 1}
										gender={items.gender}
										hair={items.hair_color}
										eye={items.eye_color}
										//	gender={store.inf.gender}
									/>
								</div>
							);
						})}
					</div>
				</div>
			</div>
			<h1 className="plane">Planetas</h1>
			<div className="scrollmenu scro">
				<div className="row text-center">
					<div className="col" style={{ margin: "3rem 1rem 1rem 1rem" }}>
						{store.planets.map((items, i) => {
							return (
								<div key={i} style={{ marginRight: "10px" }}>
									<PlanetsCard
										UrlImage={items.UrlImage}
										name={items.name}
										terrain={items.terrain}
										uid={items.uid}
									/>
								</div>
							);
						})}
					</div>
				</div>
			</div>
		</div>
	);
};
