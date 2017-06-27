import React from 'react';
import {Link} from 'react-router-dom';
import '../styles/login.css';
const LoginPage = props => (
    <div className="login-wrapper columns">
        <div className="column is-8 is-hidden-mobile hero-banner">
            <section className="hero is-fullheight is-dark">
                <div className="hero-body">
                    <div className="container section">
                        <div className="has-text-right">
                            <h1 className="title is-1">Login</h1> <br/>
                            <p className="title is-3">Secure User Account Login</p>
                        </div>
                    </div>
                </div>
                <div className="hero-footer">
                    <p className="has-text-centered">Image © Glenn Carstens-Peters via unsplash</p>
                </div>
            </section>
        </div>
        <div className="column is-4">
            <section className="hero is-fullheight">
                <div className="hero-heading">
                    <div className="section has-text-centered">
                        <img src={require('../images/logo.png')} alt="Bulma logo" width="150px"/>
                    </div>
                </div>
                <div className="hero-body">
                    <div className="container">
                        <div className="columns">
                            <div className="column is-8 is-offset-2">
                                <h1 className="avatar has-text-centered section">
                                    <img src={"https://placehold.it/128x128"}/>
                                </h1>
                                <div className="login-form">
                                    <p className="control has-icon has-icon-right">
                                        <input className="input email-input" type="text"
                                               placeholder="jsmith@example.org"/>
                                        <span className="icon user">
                      <i className="fa fa-user"></i>
                    </span>
                                    </p>
                                    <p className="control has-icon has-icon-right">
                                        <input className="input password-input" type="password" placeholder="●●●●●●●"/>
                                        <span className="icon user">
                      <i className="fa fa-lock"></i>
                    </span>
                                    </p>
                                    <p className="control login">
                                        {/*<button className="button is-success is-outlined is-large is-fullwidth">Влез*/}
                                        {/*</button>*/}
                                        <Link className="button is-success is-outlined is-large is-fullwidth" to="/logged">Влез
                                        </Link>
                                    </p>
                                </div>
                                <div className="section forgot-password">
                                    <p className="has-text-centered">
                                        <Link to="/forgotten-password">Забравена парола
                                        </Link>
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    </div>
);

export default LoginPage;
