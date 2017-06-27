import React from 'react';
import {Link} from 'react-router-dom';
import PropTypes from 'prop-types'

const propTypes = {};

const defaultProps = {};

const SportPreview = props => (
    <div>
        <p>
            Айкидо е съвременно японско бойно изкуство (гендай будо). Подобно на другите японски бойни изкуства, освен
            метод на самоотбрана, айкидо е и начин на духовно и физическо самоусъвършенстване. Името „айкидо“ се изписва
            с йероглифите „ай“ (съразмерност), „ки“ (енергия) и „до“ (път) и най-общо се превежда като „път на
            хармоничната сила“. Практикуващият айкидо се нарича айкидока. Освен това, в европейските езици се използва
            още айкидист. Айкидо е разработено от Морихей Уешиба (наричан от айкидистите О'Сенсей – „големият сенсей“)
            между 30-те и 60-те години на 20 век. В основата на айкидо залягат движения от древните школи Дайто-рю
            айки-джуцу и Иуама-рю кенджуцу, в които Уешиба се обучава като млад.

        </p>

        <p className="control">
            <Link className="button Button--hollow-success" to="/team-all">Покажи отбори
            </Link>
            <Link className="button Button--hollow-success" to="/">Назад
            </Link>

        </p>
    </div>
);

SportPreview.propTypes = propTypes;

SportPreview.defaultProps = defaultProps;

export default SportPreview;
