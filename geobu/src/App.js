import './App.css';
import React from 'react';
import MyMap from "./Components/map.js";
import Boton from "./Components/Boton.js";
import Ubicarte from "./Images/boton_ubicar.png";
import Ubicar_Persona from "./Images/boton-ubicar-persona.png"

const myfunction = () => {
  console.log("CLICKED");
};

function App() {
  return (
    <div className="App">
      <MyMap />

      <Boton 
      image={Ubicarte}
      name="Ubicarte"
      ubicar={myfunction}
      esBotonUbicar={true}
      />

      <Boton 
      image={Ubicar_Persona}
      name="Ubicarte Persona"
      ubicar={myfunction} 
      esBotonUbicar={false}/>
    </div>
  );
}

export default App;
