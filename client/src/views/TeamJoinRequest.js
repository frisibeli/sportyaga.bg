import React from 'react';
import {Link} from 'react-router-dom';
import PropTypes from 'prop-types'
const propTypes = {};

const defaultProps = {};

const SportJoinRequest = props => {
    const options = [
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
