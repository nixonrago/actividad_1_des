import React, {useContext, useState} from 'react';
import {Link, useParams} from 'react-router-dom';
import {LibroContexto} from '../components/LibrosContexto';
import {useNavigate} from "react-router";
import {CarritoContexto} from "../components/CarritoContexto";
import {Libro_index} from "../components/Libro_component";
import useReviews from "../hooks/useReviews";
import {FooterLibro} from "../components/FooterLibro";


const DetalleLibro = () => {
    const navigate = useNavigate();
    const {libroId} = useParams();
    const {Libros} = useContext(LibroContexto);
    const libro = Libros.find(r => r.id === libroId);
    const reviews = useReviews(libroId);


    const { agregarLibro, eliminarLibro } = useContext(CarritoContexto)

    if (!libro) {
        return <h2>Libro no encontrado </h2>;
    }
    const handleAgregar = (compra) =>{
        agregarLibro(compra)
    }
    const handleQuitar = (id) =>{
        eliminarLibro(id)
    }
    console.log(libro.titulo);

    return (
        <div className="container detalle-libro-1 center-text">
            <h2 className="detalle-libro-titulo">{libro.titulo}</h2>
            <img className="detalle-libro" src={libro.imagen} alt={libro.titulo}/>
            <p className="detalle-libro">Autor: {libro.autor}</p>
            <p className="detalle-libro">Paginas: {libro.paginas}</p>
            <p className="detalle-libro">Puntuación: {libro.calificacion} / 5</p>
            <p className="detalle-libro">Idioma: {libro.idioma} </p>
            <p className="detalle-libro">Precio: {"USD. " + libro.precio} </p>
            <p className="detalle-libro-sinopsis">Sinopsis: {libro.sinopsis} </p>

            <button type="button" className="btn btn-success gap-3  me-5 "
                    onClick={() => navigate("/inicio/")}> Regresar al inicio
            </button>

            <button type="button" className="btn btn-primary" onClick={() => handleAgregar(libro)}> Añadir al Carrito
            </button>

            {/* Sección de críticas */}
            <div className="reviews-section mt-5">
                <h3>Críticas de los lectores:</h3>
                {reviews.length > 0 ? (
                    <div id="reviewsCarousel" className="carousel slide" data-bs-ride="carousel">
                        <div className="carousel-inner">
                            {reviews.map((review, index) => (
                                <div key={review.id} className={`carousel-item ${index === 0 ? 'active' : ''}`}>
                                    <div className="review-item text-center p-3">
                                        <p><strong>{review.autor}:</strong></p>
                                        <p>{review.contenido}</p>
                                        {/* Mostrar estrellas según la calificación */}
                                        <div className="rating">
                                            <span style={{width: `${(review.calificacion / 5) * 100}%`}}>★★★★★</span>
                                            ★★★★★
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                        {/* Controles del carrusel */}
                        <button className="carousel-control-prev" type="button" data-bs-target="#reviewsCarousel"
                                data-bs-slide="prev">
                            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                            <span className="visually-hidden">Previous</span>
                        </button>
                        <button className="carousel-control-next" type="button" data-bs-target="#reviewsCarousel"
                                data-bs-slide="next">
                            <span className="carousel-control-next-icon" aria-hidden="true"></span>
                            <span className="visually-hidden">Next</span>
                        </button>
                    </div>
                ) : (
                    <p className="center-text"> <strong> No hay críticas disponibles para este libro. </strong> </p>
                )}
            </div>

            <FooterLibro/>
        </div>

    )
}
export default DetalleLibro;