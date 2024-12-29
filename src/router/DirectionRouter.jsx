import React from 'react';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Landing from '../views/Landing';
import NoEncontrado from '../views/NoEncontrado';
import {LibrosVista} from "../views/LibrosVista";
import {CheckOut} from "../views/CheckOut";
import DetalleLibro from "../views/DetalleLibro";
import {CarritoCompras} from "../components/CarritoComponent";
import useInactivityRedirect from '../hooks/useInactivity';

export const DirectionRouter = () => {


    return (
        <BrowserRouter>
            <UseInactivity/>
            <CarritoCompras> </CarritoCompras>
            <div>
                <Routes>
                    <Route path="/" element={<Landing/> }/>
                    <Route path="/inicio" element={<LibrosVista />} />
                    <Route path="/libros/:libroId" element={<DetalleLibro />} />
                    <Route path="/carrito" element={<CheckOut />} />
                    <Route path="*" element={<NoEncontrado />} />

                </Routes>
            </div>
        </BrowserRouter>

    );
}
const UseInactivity = () => {
    useInactivityRedirect("/", 5000);
    return null;
}


export default DirectionRouter;