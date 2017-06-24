import React from 'react';

const ForgottenPasswordPage = props => (
    <div>
        <section className="hero is-fullheight is-dark is-bold">
            <div className="hero-body">
                <div className="container">
                    <div>
                        <div className="column is-4 is-offset-4">
                            <h1 className="title">
                                Забравена парола
                            </h1>
                            <div className="box">
                                <label className="label">Мейл</label>
                                <p className="control">
                                    <input className="input" type="text" placeholder="jsmith@example.org"/>
                                </p>
                                <p className="control">
                                    <button className="button Button--hollow-success">Изпрати нова парола</button>
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

export default ForgottenPasswordPage;
