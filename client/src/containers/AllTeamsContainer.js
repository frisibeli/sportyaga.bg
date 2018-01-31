import React, { Component } from 'react';
import PropTypes from 'prop-types';
import AllTeams from '../views/AllTeams'
import {Team} from '../data/api'

const propTypes = {};

const defaultProps = {};

class AllTeamsContainer extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    componentDidMount(){
        Team.getAll().then(data => {
            console.log(data)
        })
    }

    render() {
        return <AllTeams />
    }
}

AllTeamsContainer.propTypes = propTypes;

AllTeamsContainer.defaultProps = defaultProps;

export default AllTeamsContainer;
