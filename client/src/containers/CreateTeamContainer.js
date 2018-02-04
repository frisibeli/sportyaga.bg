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
            sports: [],
            location: {
                position: {
                    lat: 42.630984442807275,
                    lng: 23.33372955322261
                },
                address:"бул. „Симеоновско шосе“ 99Б, 1434 в.з. Симеоново - север, София, България"
            }
        };
        this.createTeam = this.createTeam.bind(this);
        this.setLocation = this.setLocation.bind(this);
    }

    componentDidMount() {
        Sport.getAllSports().then((data) => {
            this.setState({ sports: data.data })
        })
    }

    setLocation(location){
        console.log(location)
        this.setState({location})
    }

    createTeam(name, sport, maxPlayers, description) {
        console.log(sport)
        Team.createTeam(
            name, 
            sport, 
            maxPlayers, 
            description, 
            this.state.location.position.lat,
            this.state.location.position.lng,
            this.state.location.address 
        ).then((response) => {
            this.props.history.push('/team-all')
        }).catch(error => {
            console.log(error)
        })
    }

    render() {
        return <CreateTeam
                    sports={this.state.sports} 
                    createTeam={this.createTeam} 
                    defaultPosition={this.state.location.position}
                    address={this.state.location.address}
                    position={this.state.location.position}
                    handleLocationChange={this.setLocation}
                />
    }
}

CreateTeam.propTypes = propTypes;

CreateTeam.defaultProps = defaultProps;

export default CreateTeamContainer;
