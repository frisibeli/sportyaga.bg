import React, { Component } from 'react';
import logo from './logo.svg';
import Header from './components/Header';
import Footer from './components/Footer';
import Page from './components/Page';
import LandingPage from './views/LandingPage';
import AllTeams from './views/AllTeams'
class App extends Component {
  render() {
    return (
      <div className="App">
          <Header />
          <Page title="Преглед на всички Отбори">
            <AllTeams />
          </Page>
          <Footer />
      </div>
    );
  }
}

export default App;
