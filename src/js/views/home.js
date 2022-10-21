import React from "react";
import Carta from "../component/carta";
import "../../styles/home.css";

export const Home = (props) => {
	return(
	<div className="text-center mt-5">
		<h1>Hello Rigo!</h1>
		<div>
		<Carta planetas={props.data}/>
		</div>
	</div>
)};
