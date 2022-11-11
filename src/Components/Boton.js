import React from "react";
import "../style_sheets/Boton.css";

function Boton({ image, name, ubicar, esBotonUbicar }) {
    return (
        <img
        className={ esBotonUbicar ? "boton_ubicar" : "boton_ubicar_persona" }
        src={image} 
        alt={name}
        onClick={ubicar} />
    )
}

export default Boton;