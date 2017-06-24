import React from 'react';
import PropTypes from 'prop-types'
import '../styles/createTeam.css';
import {Link} from 'react-router-dom';
const propTypes = {};

const defaultProps = {};

const CreateTeam = props => {
    const roles = [
        {name: "Нападател"},
        {name: "Защитник"},
        {name: "Вратар"}
    ];
    return (
        <div>
            Кратко описание
            <br/>
            <p>
                Lorem Ipsum е елементарен примерен текст, използван в печатарската и типографската индустрия. Lorem
                Ipsum е
                индустриален стандарт от около 1500 година, когато неизвестен печатар взема няколко печатарски букви и
                ги
                разбърква, за да напечата с тях книга с примерни шрифтове. Този начин не само е оцелял повече от 5 века,
                но
                е навлязъл и в публикуването на електронни издания като е запазен почти без промяна. Популяризиран е
                през
                60те години на 20ти век със издаването на Letraset листи, съдържащи Lorem Ipsum пасажи, популярен е и в
                наши
                дни във софтуер за печатни издания като Aldus PageMaker, който включва различни версии на Lorem Ipsum.
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
