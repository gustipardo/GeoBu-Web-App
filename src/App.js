import './App.css';
import React from 'react';
import MyMap from "./Components/map.js";
import Boton from "./Components/Boton.js";
import Menu from "./Components/Menu.js";
import Ubicarte from "./Images/boton_ubicar.png";
import Ubicar_Persona from "./Images/boton-ubicar-persona.png"
import { SwipeableDrawer } from '@mui/material';
import Drawer from "./Components/Drawer.js";

const myfunction = () => {
  console.log("CLICKED");
};

function App() {
  return (
    <div className="App">
      <MyMap />

    </div>
  );
}

export default App;
