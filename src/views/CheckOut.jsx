import React, {useContext, useState} from "react"
import { CarritoContexto } from "../components/CarritoContexto"
import {LibroContexto} from "../components/LibrosContexto";
import {useNavigate} from "react-router";
import {FooterLibro} from "../components/FooterLibro";

export const CheckOut = () => {
    const navigate = useNavigate();
    let {listaCompras, eliminarLibro, aumentarCantidad, disminuirCantidad} = useContext(CarritoContexto)
    const {Libros} = useContext(LibroContexto);
    const calcularTotal = () => {
        return listaCompras.reduce((total, item) => total + item.precio * item.cantidad, 0 ).toFixed(2)
    }

    const mensajeAlerta = () => {
        alert("Gracias por su compra");
        vaciarCarrito();
    };

    const vaciarCarrito = () => {

        alert("Será redirigido al INICIO");
        for (let id=0; id<Libros.length; id++) {
            for (let i = 0; i < listaCompras.length; i++) {
                eliminarLibro(listaCompras[i].id);
            }
        }

        navigate("/inicio/")
    };

    return (
        <>
            <div className="div-checkout">


            <table class="table">
                <thead>
                <tr>
                    <th scope="col">Nombre de Libro</th>
                    <th scope="col">Imagen Portada</th>
                    <th scope="col">Precio (USD.)</th>
                    <th scope="col">Cantidad</th>
                    <th scope="col">Eliminar Libro</th>
                </tr>
                </thead>
                <tbody>
                {



                    listaCompras.map(item => (
                        <tr key={item.id}>
                            <th>{item.titulo}</th>
                            <th><img src={item.imagen} width={75} /></th>
                                <td>{item.precio}</td>

                                <td>
                                    <button
                                        className="btn btn-ouline-primary"
                                        onClick={() => disminuirCantidad(item.id)}
                                    >-
                                    </button>
                                    <button className="btn btn-primary">{item.cantidad}</button>
                                    <button
                                        className="btn btn-ouline-primary"
                                        onClick={() => aumentarCantidad(item.id)}
                                    >+
                                    </button>
                                </td>
                                <td>
                                    <button
                                        type="button"
                                        className="btn btn-danger"
                                        onClick={() => eliminarLibro(item.id)}
                                    >Eliminar
                                    </button>
                                </td>
                        </tr>
                    ))

                }

                <th><b>TOTAL: </b></th>
                <td> </td>
                <td> </td>
                <td>${calcularTotal()}</td>

                </tbody>
            </table>

            </div>


            <div className="gap-2 container-center-grid">
                <button
                    className="btn btn-primary"
                    onClick={mensajeAlerta}
                    disabled={listaCompras<1}

                >PROCEDER CON EL PAGO</button>
            </div>
            <FooterLibro/>
        </>
    )

}