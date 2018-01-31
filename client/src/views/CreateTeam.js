import React from 'react';
import PropTypes from 'prop-types';
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
        <div>
            Кратко описание
            <br />
            <p>
                Баскетболът (от английски: basketball) е отборен спорт с топка, който се играе от два отбора с по 5
                играчи на правоъгълно игрище с размери 28×15 m. Всеки отбор се стреми да вкара топката в коша на
                противника. Кошовете са с диаметър 45,72 cm и са монтирани на височина 3,05 m на табло в двата насрещни
                края на игрището. Размерът на игралното поле е 28 метра (страничната линия) и 15 метра (линията под
                коша). Баскетболът е един от най-популярните и най-гледани спортове в света.
            </p>
            <div className="panel-block">
                <label className="label">Име на отбор</label>
                <p className="control">
                    <input className="input inputLength" type="text" placeholder="Име" onChange={(e) => { teamName = e.target.value }} />
                </p>
                <label className="label">Играчи</label>
                <p className="control">
                    <input type="number" className="input inputLength" placeholder="Максимален брой играчи" onChange={(e) => { maxPlayers = e.target.value }} />
                </p>

                <select onChange={(e) => { sportId = e.target.value }} >
                 <option>Избер на спорт</option>
                    {sports.map((sport, i) => {
                        return <option value={sport.id} key={i}>{sport.name}</option>
                    })}
                </select>

                <textarea className="textarea" placeholder="Описание" onChange={(e) => { description = e.target.value }} />
            </div>

            <p className="control">
                <Link className="button is-active" to="/team-all">Откажи създаване
                </Link>
                {/* <Link className="button is-active margin" to="/team-all">Създай отбор
                </Link> */}
                {/* <button className="button is-active">Откажи създаване</button> */}

                <button className="button is-active margin" onClick={() => { createTeam(teamName, sportId, maxPlayers, description) }}>Създай отбор</button>
            </p>
        </div>
    )
};

CreateTeam.propTypes = propTypes;

CreateTeam.defaultProps = defaultProps;

export default CreateTeam;
