//import logo from './logo.svg';
import React, {useEffect, useState} from 'react';
//import './App.css';
import DirectionRouter from "./router/DirectionRouter";
import {useLibreria} from "./hooks/useLibreria";
import {LibroContexto} from "./components/LibrosContexto";
import {Carrito} from "./components/Carrito";


function App() {
    const Libros = useLibreria();



  return (

      <Carrito>
      <LibroContexto.Provider value={{Libros}}>

        <DirectionRouter></DirectionRouter>

    </LibroContexto.Provider>
      </Carrito>

        );

}

export default App;
