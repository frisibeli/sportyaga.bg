import React from 'react';
import {Link} from 'react-router-dom';
import PropTypes from 'prop-types'
import '../styles/allteams.css'

const AllTeams = props => {
	const teams = [
        {teamId:"1",name: "Машините", players:10, searchingFor:"нападател", advanced:true, teammates: [{teamId:"1",name:"Цецо"},{teamId:"1",name:"Пешо"}]},
        {teamId:"2",name: "Валетата", players:4, searchingFor:"либеро", advanced:false, teammates: [{teamId:"2",name:"Цецо"},{teamId:"2",name:"Пешо"}]},
        {teamId:"3",name: "Дамите", players:8, searchingFor:"разпределител", advanced:true, teammates: [{teamId:"3",name:"Цецо"},{teamId:"3",name:"Пешо"}]},
        {teamId:"4",name: "Гардеробите", players:7, searchingFor:"нападател", advanced:false, teammates: [{teamId:"4",name:"Цецо"},{teamId:"4",name:"Пешо"}]},
        {teamId:"5",name: "Ретро", players:9, searchingFor:"разпределител", advanced:false, teammates: [{teamId:"5",name:"Цецо"},{teamId:"5",name:"Пешо"}]},
        {teamId:"6",name: "Нежните", players:3, searchingFor:"диагонал", advanced:true, teammates: [{teamId:"6",name:"Цецо"},{teamId:"6",name:"Пешо"}]},
        {teamId:"7",name: "Кавалерия", players:5, searchingFor:"либеро", advanced:false, teammates: [{teamId:"7",name:"Цецо"},{teamId:"7",name:"Пешо"}]},
        {teamId:"8",name: "Спокойните", players:7, searchingFor:"център", advanced:false, teammates: [{teamId:"8",name:"Цецо"},{teamId:"8",name:"Пешо"}]},
        {teamId:"9",name: "Лексис", players:11, searchingFor:"нападател", advanced:true, teammates: [{teamId:"9",name:"Цецо"},{teamId:"9",name:"Пешо"}]}
	];
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
                        <Link className="button " to={'/team-preview/'+team.name} params={{Pesho:"pesho"}}>Преглед
                        </Link>
            		{/*<a className="button" href={team.name}>*/}
                  </td>
            		
            		<td>{team.players}</td>
            		<td>{team.searchingFor}</td>
            		<td><input type="checkbox" disabled checked={team.advanced}/></td>
            	</tr>
            })}
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
