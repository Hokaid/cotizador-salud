import React from 'react';
import './Login.scss';
import telefono from "../images/gl_mobile-20x20.png";
import escudo from "../images/gl_shield-20x20.png";
import suelo from "../images/Illustration-1.png";
import { useHistory } from 'react-router-dom';

interface Props {

}

export const Login: React.FC<Props> = () => {
    const history = useHistory()
    const handleLogin = () => {
        history.push('/gracias');
    }

    return (
        <div>
            <img className="decoracion" src={suelo}/>
            <div className="row">
                <div className="col-7 seguro-info-container">
                    <div className="seguro-info-titulo">Seguro de <span className="titulo-resalt">Salud</span></div>
                    <div className="beneficios-lista">
                        <div className="beneficio-item"><img className="beneficio-icono" src={escudo}/>Cómpralo de manera fácil y rápida</div>
                        <div className="beneficio-item"><img className="beneficio-icono" src={telefono}/>Cotiza y compra tu seguro 100% digital</div>
                        <div className="beneficio-item"><img className="beneficio-icono" src={escudo}/>Hasta S/.12 millones de cobertura anual</div>
                        <div className="beneficio-item"><img className="beneficio-icono" src={telefono}/>Más de 300 clinicas en todo el Perú</div>
                    </div>
                    <div className="copyright-container">© 2021 ;y Company</div>
                </div>
                <div className="col-5">
                    <div className="seguro-inputs">
                        <div className="seguro-titulo">Obtén tu <span>seguro ahora</span></div>
                        <div className="seguro-subtitle">Ingresa los datos para comenzar</div>
                        <div className="input-group seguro-input">
                            <select className="form-select selectdoc">
                                <option value="1" selected>DNI</option>
                                <option value="2">PA</option>
                            </select>
                            <input type="number" className="form-control" placeholder="Nro de Documento"/>
                        </div>
                        <input type="date" className="form-control seguro-input" placeholder="Fecha de nacimiento"/>
                        <input type="number" className="form-control seguro-input" placeholder="Celular"/>
                        <div className="form-check seguro-check">
                            <input className="form-check-input" type="checkbox"/>
                            <label className="form-check-label">Acepto la <a className="seguro-link">Politica de Protección de Datos Personales y los Terminos y Condiciones</a></label>
                        </div>
                        <div className="form-check seguro-check">
                            <input className="form-check-input" type="checkbox"/>
                            <label className="form-check-label">Acepto la <a className="seguro-link">Politica de Envío de Comunicaciones Comerciales</a></label>
                        </div>
                        <button type="button" onClick={handleLogin} className="btn btn-primary seguro-boton">COMENCEMOS</button>
                    </div>
                </div>
            </div>
        </div>
    );
}