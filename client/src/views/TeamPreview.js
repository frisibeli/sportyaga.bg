import React from 'react';
import {Link} from 'react-router-dom';
import PropTypes from 'prop-types'
import '../styles/teamPreview.css';
import Page from '../components/Page';
import Header from '../components/Header';
const propTypes = {};

const defaultProps = {
    team:{
        players:[]
    }
};

const TeamPreview = ({team, leaveTeam, joined, joinTeam}) => {
    return (
        <div>
            <Page title="Преглед на отбор">
                {team.name}
                <hr/>
                <div className="columns">
                    <fieldset className="FormField">
                        <legend>Съотборници</legend>
                        <div className="column is-14 board" id="b4">
                            <div className="box is-gray">
                                <div className="items">
                                    {team.players.map((teammate, i) => {
                                        return <div className="box" key={i}>
                                            <p className="meta">
                                                <img src={require('../images/user.png')} className="small"
                                                     alt="Description"/>
                                                <span className="title">{teammate.name}</span>
                                                <br/>
                                                <button className="button is-primary">Профил</button>
                                                <Link className="button is-default" to={'/send-message'}>ЛС</Link>
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
                                        {joined && <button onClick={leaveTeam} className="button is-active medium">Напусни отбора
                                        </button>}
                                        {!joined && <button onClick={joinTeam} className="button is-active medium">Присъедиини се в отбора
                                        </button>}
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

        </div>
    )
};

TeamPreview.propTypes = propTypes;

TeamPreview.defaultProps = defaultProps;

export default TeamPreview;
