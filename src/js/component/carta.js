import React  from "react";
import HC from "../../img/HC.png"
import { useState } from "react";

const Carta = (props) => {
    // console.log(props.planetas.result)
    const [propiedades, setPropiedades] = useState({})
    return (
        <div className="card mx-auto" style={{width: "18rem"}}>
            <img src={HC} className="card-img-top" alt="..."/>
                <div className="card-body">
                    <h5 className="card-title">HOLA</h5>
                    <p className="card-text">{props.planetas.message}</p>
                    <a href="#" className="btn btn-primary">Go somewhere</a>
                </div>
        </div>
    )
}

export default Carta;
