import React from 'react';
import iconGoogle from '../assets/static/icon-google.png';
import iconTw from '../assets/static/icon-tw.png';

import '../assets/styles/components/Register.scss';


const Register = ()=> (
    <section className="login">
        <section className="login__container">
            <h2>Registrate</h2>
            <form className="login__container--form">
                <input className="input1" type="text" placeholder="Nombre" />
                <input className="input1" type="text" placeholder="Correo Electronico" />
                <input className="input1" type="password" placeholder="Contraseña" />
                <button>Regístrate</button>
            </form>
                <section className="login__container--social-media">
                <div><img src={iconGoogle} />Registrate con Google</div>
                <div> <img src={iconTw} />Registrate con Twitter</div>
                </section>
        </section>
  </section>
);

export default Register;