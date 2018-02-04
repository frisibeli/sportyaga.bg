import React, { Component } from 'react';
import PropTypes from 'prop-types';
import LoginPage from '../views/LoginPage'
import {Auth} from '../data/api'

const propTypes = {};

const defaultProps = {};

class LoginContainer extends Component {
    constructor(props) {
        super(props);
        this.login = this.login.bind(this);
    }

    login(email, password){
        Auth.login(email, password).then(({data}) => {
            alert(data.id)
        }).catch(error => {
            alert('Incorrect credentials');
        })
    }

    render() {
        return <LoginPage login={this.login} />
    }
}

LoginContainer.propTypes = propTypes;

LoginContainer.defaultProps = defaultProps;

export default LoginContainer;
