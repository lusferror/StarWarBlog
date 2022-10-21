import React, {useState,useEffect} from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import ScrollToTop from "./component/scrollToTop";

import { Home } from "./views/home";
import { Demo } from "./views/demo";
import { Single } from "./views/single";
import Prueba from "./views/prueba";
import injectContext from "./store/appContext";

import { Navbar } from "./component/navbar";
import { Footer } from "./component/footer";

//create your first component
const Layout = () => {
	const [planetas,setPlanetas] = useState({})
	const [properties, setProperties] = useState({})
	var propiedades = {}
	//the basename is used when your project is published in a subdirectory and not in the root of the domain
	// you can set the basename on the .env file located at the root of this project, E.g: BASENAME=/react-hello-webapp/
	const basename = process.env.BASENAME || "";

	useEffect(()=>{
		fetch('https://www.swapi.tech/api/planets/5',{
		method:"GET",
		headers:{
			"Content-Type":"application/json"
		}
	},[planetas])
	.then(resp=>{
		console.log(resp.status);
		// console.log()
		return resp.json();
	})
	.then(data=>{
		console.log("este es el body: ",data);
		setPlanetas(data)
	})
	.catch(error=>{
		console.error(error)
	})

	console.log("los planetas",planetas.result.properties.name)

	
	},[])

	console.log("AQUI ESTAN LOS PLANEAS ",planetas.result)

	return (
		<div>
			<BrowserRouter basename={basename}>
				<ScrollToTop>
					<Navbar />
					<Switch>
						<Route exact path="/">
							<Home data={planetas}/>
						</Route>
						<Route exact path="/demo">
							<Demo />
						</Route>
						<Route exact path="/single/:theid">
							<Single />
						</Route>
						<Route exact path="/prueba">
							<Prueba/>
						</Route>
						<Route>
							<h1>Not found!</h1>
						</Route>
					</Switch>
					<Footer />
				</ScrollToTop>
			</BrowserRouter>
		</div>
	);
};

export default injectContext(Layout);
