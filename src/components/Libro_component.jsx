import React from "react";
import { Link } from "react-router-dom";

export const Libro_index = ({ titulo, autor, paginas, idioma, calificacion, sinopsis,imagen,id, handleAgregar, handleQuitar, precio }) => {

    const [agregar, setAgregar] = React.useState(false);

    const clickAgregar = () => {
        handleAgregar()
        setAgregar(true);
        console.log("ejecutanto funcion clickAgregar");
    }

    const clickQuitar = () => {
        handleQuitar()
        setAgregar(false)
        console.log("ejecutanto funcion clickQuitar");
    }
console.log("estoy en libro component funcion Libro_index");

    return (
        <div className="presentacion">
            <img src={imagen}/>
            <h3>Titulo: {titulo}</h3>
            <p>Autor: {autor} </p>
            <p>Paginas: {paginas}</p>
            <p>Idioma: {idioma}</p>
            <p>Calificacion: {calificacion} / 5</p>
            <p>Precio: {precio}</p>
            <p>Siniopsis: {sinopsis}</p>
            <Link to={`/libros/${id}`}>
                <button
                    className="btn btn-sm btn-info me-2"
                >MAS INFORMACION</button>
            </Link>
            {agregar
                ? <button
                    type="button "
                    onClick={clickQuitar}
                    className="btn btn-sm btn-warning me-3"
                >
                    Quitar del Carrito
                </button>
                : <button
                    type="button"
                    className="btn btn-sm btn-primary me-2"
                    onClick={clickAgregar}
                >
                    Agregar Carrito
                </button>
            }

        </div>
    );
}
