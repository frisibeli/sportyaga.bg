import React, { Component } from 'react';
import PropTypes from 'prop-types';
import RegisterPage from '../views/RegisterPage'
import { Auth } from '../data/api'

const propTypes = {};
const defaultProps = {};

class RegistrationContainer extends Component {
    constructor(props) {
        super(props);
        this.register = this.register.bind(this);
    }

    register(email, name, password, repeatPass) {
        if (password === repeatPass) {
            Auth.register(email, name, password).then((response) => {
                this.props.history.push('/');
            }).catch(error => {
                alert("Registration failed")
            })
        } else {
            alert('The passwords your entered are not the same.')
        }
    }

    render() {
        return <RegisterPage register={this.register} />
    }
}

RegistrationContainer.propTypes = propTypes;

RegistrationContainer.defaultProps = defaultProps;

export default RegistrationContainer;
