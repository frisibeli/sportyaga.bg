import React from 'react';
import PropTypes from 'prop-types'
import {Link} from 'react-router-dom';

import '../styles/myteams.css'

const Team = ({name}) => (
    <div className="column is-4">
        <div className="card">
            <header className="card-header">
                <p className="card-header-title">

                    @{name}
                </p>

            </header>
            <div className="card-image">
                <figure className="image is-4by3">
                    <img src={require('../images/1.jpg')} alt="Image"/>
                </figure>
            </div>
            <div className="card-content">
                <div className="panel-block-item">
                    <div className="myteams">
                        {/*<a className="button" href="#">*/}
                        <div className="view">
                            <Link className="view" to={'/team-preview/Валетата'}>
                                Преглед
                            </Link>
                        </div>
                        {/*</a>*/}
                    </div>
                    <div className="myteams">
                        {/*<a className="button" href="#">*/}
                        <div className="view">
                            <Link className="view" to={'/team-preview/Валетата'}>
                                Напускане
                            </Link>
                        </div>
                        {/*</a>*/}
                    </div>
                </div>
            </div>
        </div>
    </div>
)

const MyTeams = props => (
    <div className="container section">

        <div className="columns">
            {props.teams.map((t, i) => <Team {...t} key={i}/> )}
        </div>

    </div>
);

export default MyTeams;
