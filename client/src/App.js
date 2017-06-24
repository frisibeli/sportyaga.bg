import React, { Component } from 'react';
import logo from './logo.svg';
import Header from './components/Header';
import Footer from './components/Footer';
import LandingPage from './views/LandingPage';
import AllTeams from './views/AllTeams'
class App extends Component {
  render() {
    return (
      <div className="App">
          <Header />
          <section className="section">
            <div className="container content">
              <AllTeams />
            </div>
          </section>
          <Footer />
      </div>
    );
  }
}

export default App;
