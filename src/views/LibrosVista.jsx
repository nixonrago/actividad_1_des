import React, {useContext, useState} from 'react';
import '../styles/styles.css';
import {Libro_index} from "../components/Libro_component";
import {LibroContexto} from "../components/LibrosContexto";
import {CarritoContexto} from "../components/CarritoContexto";
import Landing from "./Landing";
import {FooterLibro} from "../components/FooterLibro";

export const LibrosVista= () => {

    const { Libros } = useContext(LibroContexto);

    const [busqueda, setBusqueda] = useState("");

    const { agregarLibro, eliminarLibro } = useContext(CarritoContexto)

    const librosFiltrados = (Libros || []).filter((libro) => libro.titulo?.toLowerCase().includes(busqueda.toLowerCase()) );
/*
    const librosFiltrados = (Libros || []).filter((libro) =>
        [libro.titulo, libro.autor, libro.id].some((campo) => campo?.toString().toLowerCase().includes(busqueda.toLowerCase()))
    );
*/

    const handleAgregar = (compra) =>{
        agregarLibro(compra)
    }
    const handleQuitar = (id) =>{
        eliminarLibro(id)
    }

    return (

        <div className="container center-text ">
            <h2 className="center-text">Libros Disponibles - RELATOS DE PAPEL</h2>
            <div className="d-flex justify-content-center my-3 ">

                 <input
                  type="text"
                  placeholder="Buscar por título..."
                  value={busqueda}
                  onChange={(e) => setBusqueda(e.target.value)}
                  className="barra-busqueda form-control"
                  />
            </div>

            <div className="libro-container container">

                {librosFiltrados.length > 0 ? (
                    librosFiltrados.map((libro, index) => (
                            <Libro_index
                                key={index}
                                imagen={libro.imagen}
                                titulo={libro.titulo}
                                autor={libro.autor}
                                paginas={libro.paginas}
                                idioma={libro.idioma}
                                calificacion={libro.calificacion}
                                sinopsis={"Ver en más información, para obtener detalles del libro . . ."}
                                precio={"USD. "+libro.precio}
                                id={libro.id}
                                handleAgregar={() => handleAgregar(libro)}
                                handleQuitar={() => handleQuitar(libro.id)}
                            />
                        ))
                    ) : (
                    <Landing>< /Landing>
                    )}


                {}
            </div>
        <FooterLibro/>
        </div>
    );
}