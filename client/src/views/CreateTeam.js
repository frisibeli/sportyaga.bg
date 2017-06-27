import React from 'react';
import PropTypes from 'prop-types'
import '../styles/createTeam.css';
import {Link} from 'react-router-dom';
const propTypes = {};

const defaultProps = {};

const CreateTeam = props => {
    const roles = [
        {name: "Нападател"},
        {name: "Гард"},
        {name: "Център"}
    ];
    return (
        <div>
            Кратко описание
            <br/>
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
                    <input className="input inputLength" type="text" placeholder="Име"/>
                </p>
                <label className="label">Хора в отбора</label>
                <p className="control">
                    <textarea className="textarea" placeholder="Съотборници"></textarea>
                </p>
                <label className="label"> Свободни роли</label>
                {roles.map((role, i) => {
                    return <div>
                        <p className="control">
                            <label className="checkbox"><input type="checkbox" key={i} value={role.name}/>{role.name}
                            </label>
                        </p>
                    </div>
                })}
                {/*<select>*/}
                {/*{options.map((option, i) => {*/}
                {/*return <option key={i}>{option.name}</option>*/}
                {/*})}*/}
                {/*</select>*/}
            </div>
            {/*<p class="control">*/}
            {/*<span class="select">*/}
            {/*<select>*/}
            {/*<option>Select dropdown</option>*/}
            {/*<option>With options</option>*/}
            {/*</select>*/}
            {/*</span>*/}
            {/*</p>*/}

            <p className="control">
                <Link className="button is-active" to="/team-all">Откажи създаване
                </Link>
                <Link className="button is-active margin" to="/team-all">Създай отбор
                </Link>
                {/*<button className="button is-active">Откажи създаване</button>*/}
                {/*<button className="button is-active margin">Създай отбор</button>*/}
            </p>
        </div>

    )
};

CreateTeam.propTypes = propTypes;

CreateTeam.defaultProps = defaultProps;

export default CreateTeam;
