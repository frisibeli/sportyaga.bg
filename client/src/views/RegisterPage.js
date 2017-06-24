import React from 'react';

const RegisterPage = props => (
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
                                    <input className="input" type="text" placeholder="John Smith"/>
                                </p>
                                <label className="label">Име на потребител</label>
                                <p className="control">
                                    <input className="input" type="text" placeholder="jsmith"/>
                                </p>
                                <label className="label">Мейл</label>
                                <p className="control">
                                    <input className="input" type="text" placeholder="jsmith@example.org"/>
                                </p>
                                <hr/>
                                <label className="label">Парола</label>
                                <p className="control">
                                    <input className="input" type="password" placeholder="●●●●●●●"/>
                                </p>
                                <label className="label">Потвърди парола</label>
                                <p className="control">
                                    <input className="input" type="password" placeholder="●●●●●●●"/>
                                </p>
                                <hr/>
                                <p className="control">
                                    <button className="button is-primary" >Регистрирай</button>
                                    <button className="button is-default">Откажи</button>
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
);

export default RegisterPage;
