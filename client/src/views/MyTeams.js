import React from 'react';
import PropTypes from 'prop-types'
import '../styles/myteams.css'

const MyTeams = props => (
	<div className="container section">

    <div className="columns">

       <div className="column is-4">
        <div className="card">
          <header className="card-header">
            <p className="card-header-title">
              
              @Валетата
            </p>
           
          </header>
          <div className="card-image">
            <figure className="image is-4by3">
               <img src={require('../images/1.jpg')} alt="Image"/>
            </figure>
          </div>
          <div className="card-content">
            <div className="panel-block-item">
            <div className="myteams">
              <a className="button" href="#">
            		<div className="view">
                    Преглед
                    </div>
                  </a>
                  </div>
                  <div className="myteams">
            <a className="button" href="#">
            		<div className="view">
            			
                    Напускане
                  
                    </div>
                  </a>
                  </div>          
            </div>
          </div>
        </div>
      </div>

      <div className="column is-4">
        <div className="card">
          <header className="card-header">
            <p className="card-header-title">
              
              @Дамите
            </p>
           
          </header>
          <div className="card-image">
            <figure className="image is-4by3">
               <img src={require('../images/2.jpg')} alt="Image"/>
            </figure>
          </div>
          <div className="card-content">
            <div className="panel-block-item">
            <div className="myteams">
              <a className="button" href="#">
            		<div className="view">
                    Преглед
                    </div>
                  </a>
                  </div>
                  <div className="myteams">
            <a className="button" href="#">
            		<div className="view">
                    Напускане
                    </div>
                  </a>
                  </div>          
            </div>
          </div>
        </div>
      </div>

      <div className="column is-4">
        <div className="card">
          <header className="card-header">
            <p className="card-header-title">
              
              @Гардеробите
            </p>
           
          </header>
          <div className="card-image">
            <figure className="image is-4by3">
               <img src={require('../images/3.jpg')} alt="Image"/>
            </figure>
          </div>
          <div className="card-content">
            <div className="panel-block-item">
            <div className="myteams">
              <a className="button" href="#">
            		<div className="view">
                    Преглед
                    </div>
                  </a>
                  </div>
                  <div className="myteams">
            <a className="button" href="#">
            		<div className="view">
            			
                    Напускане
                  
                    </div>
                  </a>
                  </div>          
            </div>
          </div>
        </div>
      </div>


    </div>
    <div className="columns">
     <div className="column is-4">
        <div className="card">
          <header className="card-header">
            <p className="card-header-title">
              
              @Лексис
            </p>
           
          </header>
          <div className="card-image">
            <figure className="image is-4by3">
                <img src={require('../images/4.jpg')} alt="Image"/>
            </figure>
          </div>
          <div className="card-content">
            <div className="panel-block-item">
            <div className="myteams">
              <a className="button" href="#">
            		<div className="view">
                    Преглед
                    </div>
                  </a>
                  </div>
                  <div className="myteams">
            <a className="button" href="#">
            		<div className="view">
                    Напускане
                    </div>
                  </a>
                  </div>          
            </div>
          </div>
        </div>
      </div>
      <div className="column is-4">
        <div className="card">
          <header className="card-header">
            <p className="card-header-title">
              
              @Спокойните
            </p>
           
          </header>
          <div className="card-image">
            <figure className="image is-4by3">
               <img src={require('../images/5.jpg')} alt="Image"/>
            </figure>
          </div>
          <div className="card-content">
            <div className="panel-block-item">
            <div className="myteams">
              <a className="button" href="#">
            		<div className="view">
                    Преглед
                    </div>
                  </a>
                  </div>
                  <div className="myteams">
            <a className="button" href="#">
            		<div className="view">
                    Напускане
                    </div>
                  </a>
                  </div>          
            </div>
          </div>
        </div>
      </div>
      <div className="column is-4">
        <div className="card">
          <header className="card-header">
            <p className="card-header-title">
              
              @Кавалерия
            </p>
           
          </header>
          <div className="card-image">
            <figure className="image is-4by3">
               <img src={require('../images/6.jpg')} alt="Image"/>
            </figure>
          </div>
          <div className="card-content">
            <div className="panel-block-item">
            <div className="myteams">
              <a className="button" href="#">
            		<div className="view">
                    Преглед
                    </div>
                  </a>
                  </div>
                  <div className="myteams">
            <a className="button" href="#">
            		<div className="view">
                    Напускане
                    </div>
                  </a>
                  </div>          
            </div>
          </div>
        </div>
      </div>

  </div>
  </div>
);

export default MyTeams;
