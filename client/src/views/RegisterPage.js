import React from 'react';
import { Link } from 'react-router-dom';
const propTypes = {};
const defaultProps = {};

const RegisterPage = props => {
    const { register } = props;
    let name = "";
    let email = "";
    let password = "";
    let repeatPasswprd = "";

    return (
        <div>
            <section className="hero is-fullheight is-dark is-bold">
                <div className="hero-body">
                    <div className="container">
                        <div className="columns is-vcentered">
                            <div className="column is-4 is-offset-4">
                                <h1 className="title">
                                    Регистрация на акаунт
                            </h1>
                                <div className="box">
                                    <label className="label">Име</label>
                                    <p className="control">
                                        <input onChange={(e) => { name = e.target.value }} className="input" type="text" placeholder="John Smith" />
                                    </p>
                                    <label className="label">Мейл</label>
                                    <p className="control">
                                        <input onChange={(e) => { email = e.target.value }} className="input" type="text" placeholder="jsmith@example.org" />
                                    </p>
                                    <hr />
                                    <label className="label">Парола</label>
                                    <p className="control">
                                        <input onChange={(e) => { password = e.target.value }} className="input" type="password" placeholder="●●●●●●●" />
                                    </p>
                                    <label className="label">Потвърди парола</label>
                                    <p className="control">
                                        <input onChange={(e) => { repeatPasswprd = e.target.value }} className="input" type="password" placeholder="●●●●●●●" />
                                    </p>
                                    <hr />
                                    <p className="control">
                                        {/* <Link className="button is-primary" to="/sport-all">Регистрирай
                                    </Link> */}
                                        <Link className="button is-default" to="/">Откажи
                                    </Link>
                                        <button className="button is-primary" onClick={() => { register(email, name, password, repeatPasswprd) }} >Регистрирай</button>
                                        {/*<button className="button is-default">Откажи</button>*/}
                                    </p>
                                </div>
                                {/*<p className="has-text-centered">*/}
                                {/*<a href="login.html">Влез</a>*/}
                                {/*|*/}
                                {/*<a href="#">Need help?</a>*/}
                                {/*</p>*/}
                            </div>
                        </div>
                    </div>
                </div>

            </section>
        </div>
    )

};

RegisterPage.propTypes = propTypes;

RegisterPage.defaultProps = defaultProps;

export default RegisterPage;