import React from 'react';
import { Link } from 'react-router-dom';

import iconGoogle from '../assets/static/icon-google.png';
import iconTw from '../assets/static/icon-tw.png';

import '../assets/styles/components/Login.scss';

const Login = () => (
    <section className="login">
        <section className="login__container">
            <h2>Iniciar Sesion</h2>
            <form className="login__container--form">
                <input className="input1" type="text" placeholder="Correo Electronico" />
                <input className="input1" type="password" placeholder="Contraseña" />
                <button>Iniciar sesion</button>
                <div className="login__container--remember-me">
                    <label>
                        <input type="checkbox" name="" id="checbox1" value="checkbox" /> Recuerdame
                    </label>
                    <a href="google.com">Olvide mi contraseña</a>
                </div>
            </form>
            <section className="login__container--social-media">
                <div><img src={iconGoogle} />Inicia la sesion con google</div>
                <div> <img src={iconTw} />Inicia la sesion con twitter</div>
            </section>
            <p className="login__container--register">No tienes cuenta? 
                <Link to='/register'>
                Registrate
                </Link>
            </p>
        </section>
  </section>

)


export default Login;

