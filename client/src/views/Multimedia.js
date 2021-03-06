import React from 'react';
import PropTypes from 'prop-types'
import viewallsports from '../styles/viewallsports.css';

const Multimedia = props => {
	const sports = [
		{name: "Айкидо", video: "https://www.youtube.com/embed/0afWMLpO5oE"},
		{name: "Аеробика", video: "https://www.youtube.com/embed/kuiKlLS0I8w"},
		{name: "Бадминтон", video: "https://www.youtube.com/embed/jeUIEV5E5Ww"},
		{name: "Баскетбол", video: "https://www.youtube.com/embed/F69NORRriZs"},
		{name: "Бейзбол", video: "https://www.youtube.com/embed/AF1LKWw1jog"},
		{name: "Бокс", video: "https://www.youtube.com/embed/1DaK5fiFOmM"},
		{name: "Волейбол", video: "https://www.youtube.com/embed/-FyGYrI7N7o"},
		{name: "Голф", video: "https://www.youtube.com/embed/mvvuvdjh0KE"},
		{name: "Гребане", video: "https://www.youtube.com/embed/5dSHUzzX7jI"},
		{name: "Колоездене", video: "https://www.youtube.com/embed/ZgPZyDe6Utg"},
		{name: "Фехтовка", video: "https://www.youtube.com/embed/65Y7dvQAc08"},
		{name: "Футбол", video: "https://www.youtube.com/embed/Sl-_NuDxiFQ"},
	];
	// let video = sports[props.sport];
	return (
    <div>
		<center><h1> Преглед на мултимедия </h1></center>
		<div>
			<object width="420" height="315" data={sports[props.sport].video}/>
		</div>

	</div>
	
	
)};

export default Multimedia;