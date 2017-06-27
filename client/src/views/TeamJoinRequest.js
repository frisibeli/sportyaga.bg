import React from 'react';
import {Link} from 'react-router-dom';
import PropTypes from 'prop-types'
const propTypes = {};

const defaultProps = {};

const SportJoinRequest = props => {
    const options = [
        {name: "Нападател"},
        {name: "Център"},
        {name: "Гард"}
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
            {/*<p class="control">*/}
            {/*<span class="select">*/}
            {/*<select>*/}
            {/*<option>Select dropdown</option>*/}
            {/*<option>With options</option>*/}
            {/*</select>*/}
            {/*</span>*/}
            {/*</p>*/}
            <p className="control">
                <span className="select">
                <select>
                    {options.map((option, i) => {
                        return <option key={i}>{option.name}</option>
                    })}
                </select>
                </span>
            </p>
            <p className="control">
                <Link className="button is-primary" to="/team-preview">Отказ
                </Link>
                <Link className="button is-default margin" to="/team-preview">Присъединяване
                </Link>
                <Link className="button is-default margin" to="/view-join-team">Повече информация
                </Link>
            </p>
        </div>

    )
};

SportJoinRequest.propTypes = propTypes;

SportJoinRequest.defaultProps = defaultProps;

export default SportJoinRequest;
