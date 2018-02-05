import React, { Component } from 'react';
import PropTypes from 'prop-types';
import MyTeams from '../views/MyTeams'
import {User} from '../data/api'

const propTypes = {};

const defaultProps = {};

class UserTeamsContainer extends Component {
    constructor(props) {
        super(props);
        this.state = {
            teams: []
        };
    }

    componentDidMount(){
        User.me().then(({data}) => {
            this.setState({teams:data.teams})
        })
    }

    render() {
        return <MyTeams teams={this.state.teams} />
    }
}

UserTeamsContainer.propTypes = propTypes;

UserTeamsContainer.defaultProps = defaultProps;

export default UserTeamsContainer;
