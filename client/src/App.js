import React, { Component } from 'react';
import logo from './logo.svg';
import Header from './components/Header';
import LandingPage from './views/LandingPage';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
          <Header />
          <section className="section">
            <div className="container content">
              <LandingPage />
            </div>
          </section>
      </div>
    );
  }
}

export default App;
