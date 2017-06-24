import React, {Component} from 'react';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
// import Elemental from 'elemental';
// import { Button, Alert, Spinner, Modal } from 'elemental';
import logo from './logo.svg';
import Header from './components/Header';
import Footer from './components/Footer';
import Page from './components/Page';

import LandingPage from './views/LandingPage';
import RegisterPage from './views/RegisterPage';
import LoginPage from './views/LoginPage';
import SportPreview from './views/SportPreview';
import SportJoinRequest from './views/SportJoinRequest';
import TeamPreview from './views/TeamPreview';
import CreateTeam from './views/CreateTeam';

import ForgottenPasswordPage from './views/ForgottenPasswordPage'
import AllTeams from './views/AllTeams'
import MyTeams from './views/MyTeams'
class App extends Component {
    render() {
        return (
            <div>
                <Header />
                <Switch>
                    <Route path="/login" render={() => (
                        <Page><LoginPage/></Page>
                    )}/>
                    <Route path="/register" render={() => (
                        <Page><RegisterPage/></Page>
                    )}/>

                    <Route path="/forgotten-password" render={() => (
                        <Page><ForgottenPasswordPage/></Page>
                    )}/>

                    <Route path="/sport-preview" render={() => (
                        <Page title="Преглед на спорт" leftColumn="http://placehold.it/800x60">
                            <SportPreview/>
                        </Page>
                    )}/>

                    <Route path="/team-all" render={() => (
                        <Page title="Преглед на всички отбори" leftColumn={require('./images/1.jpg')}>
                            <AllTeams/>
                        </Page>
                    )}/>
                    <Route path="/team-create" render={() => (
                        <Page title="Създаване на отбор" leftColumn="http://placehold.it/800x60">
                            <CreateTeam/>
                        </Page>
                    )}/>
                    <Route path="/team-preview" render={() => (
                        <Page title="Преглед на отбор">
                            <TeamPreview/>
                        </Page>
                    )}/>
                    <Route path="/join-team" render={() => (
                        <Page title="Заявка за присъединяване на отбор" leftColumn="http://placehold.it/800x60">
                            <SportJoinRequest/>
                        </Page>
                    )}/>
                    <Route path="/adding-sport" render={() => (
                        <Page title="Заявка за добавяне на отбор" leftColumn="leftColumn={require('./images/1.jpg')}">
                           
                        </Page>
                    )}/>
                    <Route path="/" render={() => (
                        <Page><LandingPage/></Page>
                    )}/>

                </Switch>
                <Footer />
            </div>
        )
            ;
    }

}

export default App;
