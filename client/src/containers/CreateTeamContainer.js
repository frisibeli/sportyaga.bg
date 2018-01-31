import React, { Component } from 'react';
import PropTypes from 'prop-types';
import CreateTeam from '../views/CreateTeam'
import { Sport, Team } from '../data/api'

const propTypes = {};
const defaultProps = {};

class CreateTeamContainer extends Component {
    constructor(props) {
        super(props);
        this.state = {
            sports: []
        };
        this.createTeam = this.createTeam.bind(this);
    }

    componentDidMount() {
        Sport.getAllSports().then((data) => {
            this.setState({ sports: data.data })
        })
    }

    createTeam(name, sport, maxPlayers, description) {
        Team.createTeam(name, sport, maxPlayers, description).then((response) => {
            this.props.history.push('/team-all')
        }).catch(error => {
            console.log(error)
        })
    }

    render() {
        return <CreateTeam sports={this.state.sports} createTeam={this.createTeam} />
    }
}

CreateTeam.propTypes = propTypes;

CreateTeam.defaultProps = defaultProps;

export default CreateTeamContainer;
