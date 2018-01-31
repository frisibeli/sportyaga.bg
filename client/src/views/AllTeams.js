import React from 'react';
import {Link} from 'react-router-dom';
import PropTypes from 'prop-types'
import '../styles/allteams.css'

const AllTeams = ({teams}) => {
	return (
    <div>
       <table>
            <thead>
            <tr>
                <th>Име на отбор</th>
                <th></th>
                <th>Брой на хора</th>
                <th>Спорт</th>
            </tr>
            {teams.map((team, i) => <tr key={i}>
            		<td>{team.name}</td>
            		<td></td>
            		<td>{team.players.length}/{team.maxPlayers}</td>
            		<td>{team.sport.name}</td>
            		<td><Link className="button" to={'/team-preview/'+team.id}>Преглед</Link></td>
            	</tr>
            )}
            </thead>
            </table>
            <div className="back-button">
             <Link className="button Button--hollow-success" to="/sport-preview">Назад
            </Link>
            </div>
        </div>
    )
};

export default AllTeams;
