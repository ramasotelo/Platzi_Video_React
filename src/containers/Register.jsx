import React, { useState } from 'react';
import { connect } from 'react-redux';
import { registerRequest } from '../actions';
import iconGoogle from '../assets/static/icon-google.png';
import iconTw from '../assets/static/icon-tw.png';

import '../assets/styles/components/Register.scss';


const Register = props => {
    const [form, setValues] = useState({
        email: '',
        name:'',
        password:'',
    });
    const handleInput = event =>{
        setValues({
            ...form,
            [event.target.name]: event.target.value,
        })
    };

    const handleSumbit = event =>{
        event.preventDefault();
        props.registerRequest(form);
        props.history.push("/");
    }

    return(
        <section className="login">
            <section className="login__container">
                <h2>Registrate</h2>
                <form className="login__container--form" onSubmit={handleSumbit}>
                    <input
                        name="name"
                        className="input1" 
                        type="text" 
                        placeholder="Nombre"
                        onChange={handleInput} 
                    />
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
                    <button>Regístrate</button>
                </form>
                    <section className="login__container--social-media">
                    <div><img src={iconGoogle} />Registrate con Google</div>
                    <div> <img src={iconTw} />Registrate con Twitter</div>
                    </section>
            </section>
        </section>
    );
}

const mapDispatchToProps = {
    registerRequest,
}

export default connect(null,mapDispatchToProps)(Register);