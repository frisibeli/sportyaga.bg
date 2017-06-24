import React from 'react';
import PropTypes from 'prop-types'
import '../styles/allteams.css'

const AllTeams = props => {
	const teams = [
		{name: "Машините", players:10, searchingFor:"нападател", advanced:true},
		{name: "Валетата", players:4, searchingFor:"либеро", advanced:false},
		{name: "Дамите", players:8, searchingFor:"разпределител", advanced:true},
		{name: "Гардеробите", players:7, searchingFor:"нападател", advanced:false},
		{name: "Ретро", players:9, searchingFor:"разпределител", advanced:false},
		{name: "Нежните", players:3, searchingFor:"диагонал", advanced:true},
		{name: "Кавалерия", players:5, searchingFor:"либеро", advanced:false},
		{name: "Спокойните", players:7, searchingFor:"център", advanced:false},
		{name: "Лексис", players:11, searchingFor:"нападател", advanced:true}
	]
	return (
    <div>
       <table>
            <thead>
            <tr>
                <th>Име на отбор</th>
                <th></th>
                <th>Брой на хора</th>
                <th>Търсим</th>
                <th>Напреднали</th>
            </tr>
            {teams.map((team, i) => {
            	return <tr key={i}>
            		<td>{team.name}</td>
            		<td>
            		<a className="button" href={team.name}>
            		<div className="view">
                    Преглед
                    </div>
                  </a>
                  </td>
            		
            		<td>{team.players}</td>
            		<td>{team.searchingFor}</td>
            		<td><input type="checkbox" disabled checked={team.advanced}/></td>
            	</tr>
            })}
            </thead>
            </table>
        </div>
    )
};

export default AllTeams;
