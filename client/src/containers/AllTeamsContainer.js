import React, { Component } from 'react';
import PropTypes from 'prop-types';
import AllTeams from '../views/AllTeams'
import {Team} from '../data/api'

const propTypes = {};

const defaultProps = {};

class AllTeamsContainer extends Component {
    constructor(props) {
        super(props);
        this.state = {
            teams: []
        };
    }

    componentDidMount(){
        Team.getAll().then(({data}) => {
            this.setState({teams:data})
        })
    }

    render() {
        return <AllTeams teams={this.state.teams} />
    }
}

AllTeamsContainer.propTypes = propTypes;

AllTeamsContainer.defaultProps = defaultProps;

export default AllTeamsContainer;
