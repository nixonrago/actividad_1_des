import { Badge } from "@mui/material";
import { ShoppingCart } from "@mui/icons-material";
import { CarritoContexto } from "./CarritoContexto";
import { NavLink } from "react-router-dom";
import React, { useContext, useState } from "react";
import {useNavigate} from "react-router";

export const CarritoCompras = () => {
    const navigate = useNavigate();

    const {listaCompras, eliminarLibro, aumentarCantidad, disminuirCantidad} = useContext(CarritoContexto);
    console.log("Estoy en carrito Component");

    const [mostrarCarrito, setMostrarCarrito] = useState(false);

    const toggleCarrito = () => {
        setMostrarCarrito(!mostrarCarrito);
    };

    return (
        <div>
            <nav className="navbar navbar-expand-lg bg-body-tertiary navbar-light barra-carrito bg-light">
                <div className="container-fluid">
                    {/* NavLink para la ruta de inicio, sin href */}
                    <NavLink to="/" className="navbar-brand">
                        INICIO
                    </NavLink>
                    <button
                        className="navbar-toggler"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#navbarSupportedContent"
                        aria-controls="navbarSupportedContent"
                        aria-expanded="false"
                        aria-label="Toggle navigation"
                    >
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                            </li>
                        </ul>

                        <div onClick={toggleCarrito}
                             style={{cursor: "pointer", display: "inline-flex", alignItems: "center"}}>
                            <Badge badgeContent={listaCompras.length} color="primary" className="text-dark shopping-cart">
                                <ShoppingCart color="action"/>
                            </Badge>
                        </div>
                    </div>
                </div>
            </nav>


            {mostrarCarrito && (
                <div className="carrito-dropdown">
                    <h5 className="center-text">Carrito de Compras</h5>
                    {listaCompras.length > 0 ? (
                        <ul className="list-group">
                            {listaCompras.map((producto) => (
                                <li key={producto.id}
                                    className="list-group-item d-flex justify-content-between align-items-center">
                                    <div>
                                        <strong>{producto.titulo}</strong>
                                        <p>Cantidad: {producto.cantidad}</p>
                                        <p>Precio: ${producto.precio.toFixed(2)}</p>
                                    </div>
                                    <div>
                                        <button
                                            className="btn btn-sm btn-secondary me-2"
                                            onClick={() => aumentarCantidad(producto.id)}
                                        >
                                            +
                                        </button>
                                        <button
                                            className="btn btn-sm btn-secondary me-2"
                                            onClick={() => disminuirCantidad(producto.id)}
                                            disabled={producto.cantidad <= 1}
                                        >
                                            -
                                        </button>
                                        <button
                                            className="btn btn-sm btn-danger"
                                            onClick={() => eliminarLibro(producto.id)}
                                        >
                                            Eliminar
                                        </button>
                                    </div>
                                </li>
                            ))}
                        </ul>
                    ) : (
                        <p> <strong>El carrito está vacío.</strong> </p>

                    )

                    }

                    <button
                        disabled={listaCompras.length < 1}
                        className="btn btn-sm bg-success"
                        onClick={() => {
                            toggleCarrito();
                            navigate("/carrito/");
                        }
                        }
                    >
                        Ir a CHECKOUT
                    </button>

                </div>


            )}

        </div>
    );
}