import React, { Component } from 'react';
import PropTypes from 'prop-types';
import TeamPreview from '../views/TeamPreview'
import {Team} from '../data/api'

const propTypes = {};

const defaultProps = {};

class TeamPreviewContainer extends Component {
    constructor(props) {
        super(props);
        this.state = {
            team: {
                players:[]
            }
        };
    }

    componentDidMount(){
        Team.get(this.props.match.params.teamId).then(({data}) => {
            this.setState({team:data})
        })
    }

    render() {
        return <TeamPreview team={this.state.team} />
    }
}

TeamPreviewContainer.propTypes = propTypes;

TeamPreviewContainer.defaultProps = defaultProps;

export default TeamPreviewContainer;
