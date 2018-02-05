import React, { Component } from 'react';
import PropTypes from 'prop-types';
import TeamPreview from '../views/TeamPreview'
import {Team, User} from '../data/api'

const propTypes = {};

const defaultProps = {};

class TeamPreviewContainer extends Component {
    constructor(props) {
        super(props);
        this.state = {
            joined:false,
            team: {
                players:[]
            }
        };
        this.joinTeam = this.joinTeam.bind(this);
        this.leaveTeam = this.leaveTeam.bind(this);
    }

    componentDidMount(){
        let user = localStorage.getItem('user');
        user = JSON.parse(user);
        Team.get(this.props.match.params.teamId).then(({data}) => {
            this.setState({team:data})
            data.players.forEach(player => {
                if(player.id == user.id){
                    this.setState({joined:true})
                }
            })
        })
    }

    joinTeam(){
        let user = localStorage.getItem('user');
        user = JSON.parse(user);
        User.joinTeam(this.state.team.id).then(()=>{
            this.setState({
                joined:true,
                team:{
                    ...this.state.team,
                    players: [...this.state.team.players, user]
                }
            })
        })
    }

    leaveTeam(){
        let user = localStorage.getItem('user');
        user = JSON.parse(user);
        User.leaveTeam(this.state.team.id).then(()=>{
            this.setState({
                joined:false,
                team:{
                    ...this.state.team,
                    players: [...this.state.team.players.filter(p => p.id != user.id)]
                }
            })
        })
    }

    render() {
        return <TeamPreview 
                    joinTeam={this.joinTeam} 
                    joined={this.state.joined} 
                    leaveTeam={this.leaveTeam}
                    team={this.state.team} />
    }
}

TeamPreviewContainer.propTypes = propTypes;

TeamPreviewContainer.defaultProps = defaultProps;

export default TeamPreviewContainer;
