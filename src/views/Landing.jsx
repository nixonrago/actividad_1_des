//Fuente: Clases de la materia - Acoplado al presente proyecto.
import React from 'react';
import {Link} from "react-router-dom";
import useRedirection from "../hooks/useRedirection";
import useInactivityRedirect from '../hooks/useInactivity';

function Landing() {
    //useInactivityRedirect("/inicio", 5000);

    useRedirection("/inicio", 2000); // Redireccionamos a la vista de restaurantes en 3 segundos

    return (
        <div className="landing-container">
            <div className="landing-content">
                <Link to={"/inicio"} className="landing-link">
                    <h1>Bienvenidos a RELATOS DE PAPEL</h1>
                    <h2>Librería - Online</h2>
                </Link>
                <span className="laser-pointer"></span>
                <span className="laser-pointer-reverse"></span>

            </div>
        </div>
    );
}

export default Landing;
