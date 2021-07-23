import React from 'react';
import { Link } from 'react-router-dom';

import '../assets/styles/components/Register.scss';

const Register = () => (
    <section className="register">
        <section className="register__container">
            <h2 className="reg">Regístrate</h2>
            <form className="register__container--form">
                <input className="input" id="input__reg" type="text" placeholder="Nombre"/>
                <input className="input" id="input__reg" type="text" placeholder="Correo"/>
                <input className="input" id="input__reg" type="password" placeholder="Contraseña"/>
                <button className="button">Registrarme</button>
            </form>
            <Link to="/login">
                Iniciar sesión
            </Link>
        </section>
    </section>
);

export default Register;