import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import '../assets/styles/components/Register.scss';

const Register = () => {
    const [form, setValues] = useState({
        email: '',
        name: '',
        password: '',
    });

const handleInput = (event) => {
    setValues({
        ...form,
        [event.target.name]: event.target.value,
    });
};

const handleSubmit = event => {
    event.preventDefault();
    console.log(form);
};

    return(
        <section className="register">
            <section className="register__container">
                <h2 className="reg">Regístrate</h2>
                <form className="register__container--form" onSubmit={handleSubmit}>
                    <input
                        name="name"
                        className="input"
                        id="input__reg"
                        type="text"
                        placeholder="Nombre"
                        onChange={handleInput}
                    />
                    <input
                        name="email"
                        className="input"
                        id="input__reg2"
                        type="text"
                        placeholder="Correo"
                        onChange={handleInput}
                    />
                    <input
                        name="password"
                        className="input"
                        id="input__reg3"
                        type="password"
                        placeholder="Contraseña"
                        onChange={handleInput}
                    />
                    <button
                    className="button"
                    type="submit"
                    >Registrarme</button>
                </form>
                <Link to="/login">
                    Iniciar sesión
                </Link>
            </section>
        </section>
    );
}

export default Register;