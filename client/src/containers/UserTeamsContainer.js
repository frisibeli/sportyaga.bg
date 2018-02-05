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
        this.leaveTeam = this.leaveTeam.bind(this);
    }

    componentDidMount(){
        User.me().then(({data}) => {
            this.setState({teams:data.teams})
        })
    }

    leaveTeam(id){
        User.leaveTeam(id).then(()=>{
            this.setState({teams: this.state.teams.filter(t => t.id != id)})
        })
    }

    render() {
        return <MyTeams leaveTeam={this.leaveTeam} teams={this.state.teams} />
    }
}

UserTeamsContainer.propTypes = propTypes;

UserTeamsContainer.defaultProps = defaultProps;

export default UserTeamsContainer;
