import React from 'react';
import './Gracias.scss';
import suelo from "../images/Illustration-1.png";
import base from "../images/Base.png";

interface Props {

}

export const Gracias: React.FC<Props> = () => {
    return (
        <div>
            <img className="decoracion" src={suelo}/>
            <div className="row">
                <div className="col-5">
                    <img className="base" src={base}/>
                </div>
                <div className="col-7 contenedor-info">
                    <div className="gracias-container">
                        <div className="gracias-titulo">¡Gracias por <span>confiar en nosotros!</span></div>
                        <div className="gracias-subtitulo">Queremos conocer mejor la salud de los asegurados. Un asesor <span>se pondra en contacto</span> contigo en las siguientes <span>48 horas</span></div>
                        <div className="boton-container"><button type="button" className="btn btn-primary gracias-boton">IR A SALUD</button></div>
                    </div>
                </div>
            </div>
        </div>
    );
}