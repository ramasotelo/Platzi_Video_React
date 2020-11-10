import React, { useState }from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { loginRequest } from '../actions';
import iconGoogle from '../assets/static/icon-google.png';
import iconTw from '../assets/static/icon-tw.png';

import '../assets/styles/components/Login.scss';

const Login = props => {

    const [form , setValues] = useState({
        email: '',
    });
    const handleInput = event => {
        setValues({
            ...form,
            [event.target.name]: event.target.value
        })
    }

    const handleSumbit = event =>{
        event.preventDefault();
        props.loginRequest(form);
        props.history.push('/');
    }

    return(
        <section className="login">
            <section className="login__container">
                <h2>Iniciar Sesion</h2>
                <form className="login__container--form" onSubmit={handleSumbit}>
                    <input
                        name="email"
                        className="input1" 
                        type="text" 
                        placeholder="Correo Electronico"
                        onChange={handleInput}
                    />
                    <input 
                        name="password"
                        className="input1" 
                        type="password" 
                        placeholder="Contraseña" 
                        onChange={handleInput}
                    />
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

}

const mapDispatchToProps = {
    loginRequest,
};

export default connect(null,mapDispatchToProps)(Login);

