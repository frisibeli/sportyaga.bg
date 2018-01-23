import React from 'react';
import {Link} from 'react-router-dom';
import PropTypes from 'prop-types'
import '../styles/teamPreview.css';
import Page from '../components/Page';
import Header from '../components/Header';
const propTypes = {};

const defaultProps = {};

const TeamPreview = props => {
    const teammates = [
        {teamId: "1",name: "Бай Пешо"},
        {teamId: "1",name: "Маняка"},
        {teamId: "1",name: "Лудия"}
    ];
    return (

        <div>
            {/*<Header/>*/}
            <Page title="Преглед на отбор">
                {console.log(this.context)}
                {props.match.params.teamName}
                <hr/>
                <div className="columns">
                    <fieldset className="FormField">
                        <legend>Съотборници</legend>
                        <div className="column is-14 board" id="b4">
                            <div className="box is-gray">
                                <div className="items">
                                    {teammates.map((teammate, i) => {
                                        return <div className="box" key={i}>
                                            <p className="meta">
                                                <img src={require('../images/user.png')} className="small"
                                                     alt="Description"/>
                                                <span className="title">{teammate.name}</span>
                                                <br/>
                                                <button className="button is-primary">Профил</button>
                                                <Link className="button is-default" to={'/send-message'}>ЛС</Link>
                                                {/*<button className="button is-default">ЛС</button>*/}
                                            </p>
                                        </div>
                                    })}
                                </div>
                            </div>
                        </div>
                    </fieldset>

                    <fieldset className="FormField">
                        <legend>Чат</legend>
                        <div className="column is-14 board" id="b4">
                            <div className="box is-gray">
                                <div className="items">
                                    <p className="control">
                                        <textarea style={{height: "300px", width: "100%"}} disabled="disabled"/>
                                        <input className="input" type="input"/>
                                        <button className="button is-primary">Изпрати</button>

                                    </p>
                                </div>
                            </div>
                        </div>
                    </fieldset>
                    <fieldset className="FormField">
                        <legend>Опции</legend>
                        <div className="column is-14 board" id="b4">
                            <div className="box is-gray">
                                <div className="items">
                                    <p className="control">
                                        <Link className="button is-active medium" to="/team-all">Напусни отбора
                                        </Link>
                                        <br/>
                                        <Link className="button is-active medium" to="/team-all">Търси хора
                                        </Link>
                                        <br/>
                                        <Link className="button is-active medium" to="/team-all">Получени покани
                                        </Link>
                                        <br/>
                                        <Link className="button is-active medium" to="/view-join-team">Изпрати покана
                                        </Link>
                                        <br/>
                                        <button className="button is-active medium" disabled="disabled">Адрес на терена
                                        </button>
                                        <br/>
                                        <iframe
                                            src={"https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d11733.301577801149!2d23.330188!3d42.67564915!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sbg!2sbg!4v1498307708466"}
                                            width="200px" height="200px"></iframe>
                                    </p>
                                </div>
                            </div>
                        </div>
                    </fieldset>
                </div>
            </Page>
            {/*<Link to="/my-teams" className="button">Назад</Link>*/}

        </div>
    )
};

TeamPreview.propTypes = propTypes;

TeamPreview.defaultProps = defaultProps;

export default TeamPreview;
