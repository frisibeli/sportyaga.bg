import React from 'react';
import PropTypes from 'prop-types';
import LocationPicker from 'react-location-picker';
import '../styles/createTeam.css';
import { Link } from 'react-router-dom';

const propTypes = {};
const defaultProps = {};

const CreateTeam = props => {
    const { sports, createTeam } = props;

    let teamName = "";
    let maxPlayers = null;
    let sportId = null;
    let description = "";

    return (
        <div className="columns">
            <div className="column is-6">
                <div className="panel-block">
                    <label className="label">Име на отбор</label>
                    <p className="control">
                        <input className="input inputLength" type="text" placeholder="Име" onChange={(e) => { teamName = e.target.value }} />
                    </p>
                    <label className="label">Играчи</label>
                    <p className="control">
                        <input type="number" className="input inputLength" placeholder="Максимален брой играчи" onChange={(e) => { maxPlayers = e.target.value }} />
                    </p>

                    <select className="select" onChange={(e) => { sportId = e.target.value }} >
                    <option>Избор на спорт</option>
                        {sports.map((sport, i) => {
                            return <option value={sport.id} key={i}>{sport.name}</option>
                        })}
                    </select>
                    
                    <label className="label">Адрес на стадиона/игрището</label>
                    <p className="control">
                        <input type="text" className="input inputLength" placeholder="Адрес" value={props.address} disabled />
                    </p>

                    <label className="label">Координати</label>
                    <p className="control">
                        {props.position.lat}, {props.position.lng}
                    </p>

                    <textarea className="textarea" placeholder="Описание" onChange={(e) => { description = e.target.value }} />
                </div>

                <p className="control">
                    <button className="button is-active margin" onClick={() => { createTeam(teamName, sportId, maxPlayers, description) }}>Създай отбор</button>
                </p>
            </div>
            <div className="column is-6">
                <LocationPicker 
                    containerElement={ <div style={ {height: '100%'} } /> }
                    mapElement={ <div style={ {height: '400px'} } /> }
                    defaultPosition={props.defaultPosition}
                    onChange={props.handleLocationChange}
                />
            </div>
        </div>
    )
};

CreateTeam.propTypes = propTypes;

CreateTeam.defaultProps = defaultProps;

export default CreateTeam;
