import React from 'react';
import PropTypes from 'prop-types'

const Header = props => (
    <nav className="nav has-shadow" id="top">
            <div className="container">
              <div className="nav-left">
                <a className="nav-item" href="../index.html">
                  <img src="../images/bulma.png" alt="Description" />
                </a>
              </div>
              <span className="nav-toggle">
                <span></span>
                <span></span>
                <span></span>
              </span>
              <div className="nav-right nav-menu">
                <a className="nav-item is-tab is-active">
                  Начало
                </a>
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
                  <a className="button">
                    Вход
                  </a>
                  <a className="button is-info">
                    Регистрация
                  </a>
                </span>
              </div>
            </div>
          </nav>
);
export default Header;
