import React, { useState, useEffect, useContext } from "react";
import PropTypes from "prop-types";
import rigoImage from "../../img/person.jpg";
import "../../styles/home.scss";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";

export const Card = props => {
	const { store, actions } = useContext(Context);
	let item = props.index;

	useEffect(() => {
		actions.getInfPeoples(item);
	}, []);

	return (
		<div>
			<div
				className="card "
				style={{ color: "white", width: "20rem", height: "20rem", backgroundColor: "rgb(121, 104, 9)" }}>
				<img className="card-img-top" src={rigoImage} alt="Card image cap" height="125" />
				<div className="card-body">
					<h5 className="card-title">{props.title}</h5>
					<p className="card-text margen">
						Gender:
						{props.gender}
						<br />
						Hair color:
						{props.hair}
						<br />
						Hair color: {props.eye}
						<br />
					</p>

					<Link to={"/peoplesprofile/" + props.index}>
						<button
							className="btn btn-primary pos1"
							style={{ color: "rgb(121, 104, 9)", backgroundColor: "white", border: "none" }}>
							Learn More
						</button>
					</Link>

					<div className="pos2">
						<i
							className="fa fa-heart"
							onClick={() => actions.Favorite(props.uid, props.title, props.url)}
						/>
					</div>
				</div>
			</div>
		</div>
	);
};

Card.propTypes = {
	title: PropTypes.string,
	gender: PropTypes.string,
	hair: PropTypes.string,
	eye: PropTypes.string,
	uid: PropTypes.string,
	url: PropTypes.string,
	index: PropTypes.number
};
