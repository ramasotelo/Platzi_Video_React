import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import gravatar from '../utils/gravatar';
import { logoutRequest } from '../actions';
import '../assets/styles/components/Header.scss';
import logo from '../assets/static/logo-platzi-video-BW2.png';
import userIcon from '../assets/static/user-icon.png';


const Header = props => {
    const { user } = props;
    const hasUser = Object.keys(user).length > 0;
    const handleLogout = () => {
        props.logoutRequest({});
    };
    return (
        <header className="header">
            <Link to='/'>
                <img className="header__img" src={logo} alt="Platzi Video"/>
            </Link>
            <div className="header__menu">
            <div className="header__menu--profile">
                {hasUser ? 
                    <img src={gravatar(user.email)} alt={user.email}/>:
                    <img src={userIcon} alt="User"/>
                }
                <p>Perfil</p>
            </div>
            <ul>
                <li>
                    {hasUser ? 
                        <a href="/">{user.name}</a>
                        :
                        null
                    }
                </li>
                <li>
                    {hasUser ? 
                        <li>
                            <a href="#logout" onClick={handleLogout}>
                                Cerrar Sesion
                            </a>
                        </li>
                        :
                        <Link to='/login'>
                            Iniciar sesion
                        </Link>
                    }
                </li>
            </ul>
            </div>
        </header>
    );
}

Header.prototype = {
    user: PropTypes.object.isRequired,
    logoutRequest: PropTypes.func.isRequired,
}

const mapStateToProps = state => {
    return{
        user: state.user,
    }
};

const mapDispatchToProps = {
    logoutRequest,
};

export default connect(mapStateToProps,mapDispatchToProps)(Header);