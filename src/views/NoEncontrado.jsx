import React from 'react';
import {useNavigate} from "react-router";

function NoEncontrado() {
    const navigate = useNavigate();
    return (
        <div className="not-found">
            <h1>404 - Página no encontrada </h1>
            <h2
                className="text-primary"
                style={{ cursor: 'pointer' }}
                onClick={navigate("/inicio/")}>Regresar a Página de Inicio </h2>
        </div>
    );
}

export default NoEncontrado;