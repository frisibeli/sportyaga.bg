import React from 'react';
import PropTypes from 'prop-types'
import '../styles/addsport.css'

const AddingSport = props => (
    <div>
    <h1> Описание на спорт</h1>
    <div className="discription">
        <textarea rows="4" cols="50">

</textarea>
</div>
<a className="button" href="#">
            		<div className="query">
                    Изпрати заявка
                    </div>
                  </a>
    </div>
);

export default AddingSport;
