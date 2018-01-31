import React, { Component } from 'react';
import PropTypes from 'prop-types';
import RegisterPage from '../views/RegisterPage'
import { Sport, Team } from '../data/api'

const propTypes = {};
const defaultProps = {};

class RegistrationContainer extends Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }



    render() {
        return <RegisterPage  />
    }
}

Registration.propTypes = propTypes;

Registration.defaultProps = defaultProps;

export default RegistrationContainer;
