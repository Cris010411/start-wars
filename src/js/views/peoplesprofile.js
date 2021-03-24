import React, { useState, useEffect, useContext } from "react";
import PropTypes from "prop-types";
import { Link, useParams } from "react-router-dom";
import { Context } from "../store/appContext";
import rigoImage from "../../img/perscard.jpg";

export const Peoplesprofile = props => {
	const { store, actions } = useContext(Context);
	const params = useParams();
	let dato = [];

	//console.log(store.detalle);
	//let peg = store.detalle.name;
	//let patron = / /g,
	//	nuevoValor = "";

	//	let nuevaCadena = peg.replace(patron, "");
	//	console.log(nuevaCadena);

	let link = "../../img/" + store.detalle.name + ".jpg";

	console.log(link);
	return (
		<div className="container-fluid">
			<div className="jumbotron top1">
				<div className="row">
					<div className="col-3">
						<img src={rigoImage} className="" alt="Responsive image" width="290px" height="230px" />
					</div>
					<div className="col">
						<h1 className="display-4">Personaje: {store.detalle.name}</h1>

						<p style={{ textAlign: "justify" }}>
							Star Wars (conocida también en español como La guerra de las galaxias)​ es una franquicia
							compuesta primordialmente de una serie de películas concebidas por el cineasta
							estadounidense George Lucas en la década de 1970, y producidas y distribuidas por The Walt
							Disney Company a partir de 2012.
						</p>
					</div>
				</div>
				<div
					className="row text-justify"
					style={{ marginTop: "20px", borderTop: "2px solid rgb(121, 104, 9)" }}>
					<div className="col-2">
						<p className="asize">
							Name:
							<br />
							{store.detalle.name}
						</p>
					</div>
					<div className="col-2">
						<p className="asize">
							Birth:
							<br />
							{store.detalle.birth_year}
						</p>
					</div>
					<div className="col-2">
						<p className="asize">
							Gender:
							<br />
							{store.detalle.gender}
						</p>
					</div>
					<div className="col-2">
						<p className="asize">
							Height:
							<br />
							{store.detalle.height}
						</p>
					</div>
					<div className="col-2">
						<p className="asize">
							Skin Color:
							<br />
							{store.detalle.skin_color}
						</p>
					</div>
					<div className="col-2">
						<p className="asize">
							Eye Color:
							<br />
							{store.detalle.eye_color}
						</p>
					</div>
				</div>

				<div className="row">
					<Link to="/">
						<span
							className="btn btn-primary btn-lg pos1"
							style={{ color: "white", backgroundColor: "rgb(121, 104, 9)", border: "none" }}
							href="#"
							role="button">
							Back home
						</span>
					</Link>
				</div>
			</div>
		</div>
	);
};

Peoplesprofile.propTypes = {
	match: PropTypes.object
};
