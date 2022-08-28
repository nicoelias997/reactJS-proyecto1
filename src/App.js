import React from "react";
import Contador from "./components/Contador";
import Eventos from "./components/Eventos";
import Listas from "./components/Listas";
import Parrafo from "./components/Parrafo"
import Variables from "./components/Variables";



function App() {
  return (
    <div>
     <h1>Hola mundo React</h1>
     {/* <Parrafo></Parrafo>
     <Variables></Variables>
     <Eventos></Eventos>
     <Contador></Contador> */}
     <Listas></Listas>
    </div>
  );
}

export default App;
