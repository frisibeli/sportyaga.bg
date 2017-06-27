import React from 'react';
import {Link} from 'react-router-dom';

const HeaderForLoginUsers = props => (
    <nav className="nav has-shadow" id="top">
            <div className="container">
              <div className="nav-left">
                <a className="nav-item" href="../index.html">
                  <img src={require('../images/logo.png')} alt="Description" />
                </a>
              </div>
              <span className="nav-toggle">
                <span></span>
                <span></span>
                <span></span>
              </span>
              <div className="nav-right nav-menu">
                <Link className="nav-item is-tab is-active" to="/">
                  Начало
                </Link>
                <a className="nav-item is-tab">
                  Нов член
                </a>
                <a className="nav-item is-tab">
                  За нас
                </a>
                <a className="nav-item is-tab">
                  Контакти
                </a>
                <span className="nav-item">
                  <Link className="button" to="/login">
                    Вход
                  </Link>
                  <Link className="button is-info" to="/register">
                    Регистрация
                  </Link>
                </span>
              </div>
            </div>
          </nav>
);
export default HeaderForLoginUsers;
