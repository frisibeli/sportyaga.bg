import React from 'react';
import PropTypes from 'prop-types'

const SportSearch = props => {
	return (
    <div>
        <h1><center>Търсене на конкретен спорт</center></h1>
		
		<center><input type="text"/></center>   
		<h6/>
		<center><img width={40} src={require('../images/lens.jpg')} /></center>
    </div>
)};

export default SportSearch;
