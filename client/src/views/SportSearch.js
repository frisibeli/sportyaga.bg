import React from 'react';
import PropTypes from 'prop-types'
import {Link} from 'react-router-dom';
const SportSearch = props => {
	return (
    <div>
        <h1><center>Търсене на конкретен спорт</center></h1>
		
		<center><input type="text"/></center>   
		<h6/>
		<center><img width={40} src={require('../images/lens.jpg')} /></center>
		<center><Link className="button is-primary" to={'/sport-preview'}>Айкидо</Link></center>
    </div>
)};

export default SportSearch;
