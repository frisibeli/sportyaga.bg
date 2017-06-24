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
              
              @username
            </p>
           
          </header>
          <div className="card-image">
            <figure className="image is-4by3">
              <img src="https://placehold.it/1280x960" alt="Image"></img>
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
              
              @username
            </p>
           
          </header>
          <div className="card-image">
            <figure className="image is-4by3">
              <img src="https://placehold.it/1280x960" alt="Image"></img>
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
              
              @username
            </p>
           
          </header>
          <div className="card-image">
            <figure className="image is-4by3">
              <img src="https://placehold.it/1280x960" alt="Image"></img>
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
