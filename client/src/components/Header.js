import React from 'react';
import {NavLink as Link} from 'react-router-dom';

const Header = props => (
    <nav className="nav has-shadow" id="top">
        <div className="container">
            <div className="nav-left">
                <a className="nav-item" href="../index.html">
                    <img src={require('../images/logo.png')} alt="Description"/>
                </a>
            </div>
            <span className="nav-toggle">
                <span></span>
                <span></span>
                <span></span>
              </span>
            <div className="nav-right nav-menu">
                {props.authorized ? (
                <span className="nav-item">
                <Link exact className="nav-item is-tab" activeClassName="is-active" to="/">
                    Начало
                </Link>
                <Link className="nav-item is-tab" activeClassName="is-active" to="/team-all">
                    Търсене на отбор
                </Link>
                <Link className="nav-item is-tab" activeClassName="is-active" to="/team-create">
                    Създаване на отбор
                </Link>
                <Link className="nav-item is-tab" activeClassName="is-active" to="/my-teams">
                    Моите отбори
                </Link>
                <Link className="nav-item is-tab" activeClassName="is-active" to="/accept-team">
                    Известия(2)
                </Link>
                </span>):<span></span>}
                {!props.authorized?(
                <span className="nav-item">
                  <Link className="button" to="/login">
                    Вход
                  </Link>
                  <Link className="button is-info" to="/register">
                    Регистрация
                  </Link>
                </span>):(
                <span className="nav-item">
                  <Link className="button" onClick={props.logout} to="/login">
                    Изход
                  </Link>
                </span>
                )}
            </div>
        </div>
    </nav>
);
export default Header;
