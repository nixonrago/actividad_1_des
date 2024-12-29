import React from "react";

export const FooterLibro = () => {
    return (
        <footer className="footer mt-auto">
            <div className="container">
                <div className="row text-center">

                    <div className="col-lg-4 mb-3">

                        <h5 className="mb-3"> RELATOS DE PAPEL </h5>
                        <p> Es una librería que esta optando por el e-commerce, y quiere far un plus a sus clientes, llevando a la puerta de sus casas sus libros favoritos </p>
                    </div>

                    <div className="col-lg-4 mb-3">
                        <h5 className="mb-3">Contacto</h5>
                        <p className="mb-1">Correo electrónico: info@relatosdepapel.com</p>
                        <p>Teléfono: 123-456-7890</p>
                    </div>

                    <div className="col-lg-4 mb-3">
                        <h5 className="mb-3">Derechos de autor</h5>
                        <p>(c) 2024. UNIR - Todos los derechos reservados.</p>
                    </div>
                </div>
            </div>
        </footer>
    );
};