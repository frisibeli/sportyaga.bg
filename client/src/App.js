import React, {Component} from 'react';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
// import Elemental from 'elemental';
// import { Button, Alert, Spinner, Modal } from 'elemental';
import logo from './logo.svg';
import Header from './components/Header';
import HeaderForLoginUsers from './components/HeaderForLoginUsers';
import Footer from './components/Footer';
import Page from './components/Page';

import LandingPage from './views/LandingPage';
import RegisterPage from './views/RegisterPage';
import LoginPage from './views/LoginPage';
import SportPreview from './views/SportPreview';
import SportJoinRequest from './views/SportJoinRequest';
import TeamPreview from './views/TeamPreview';
import CreateTeam from './views/CreateTeam';
import AddingSport from './views/AddingSport'
import ForgottenPasswordPage from './views/ForgottenPasswordPage'
import AllTeams from './views/AllTeams'
import MyTeams from './views/MyTeams'
import ViewJoinTeam from './views/ViewJoinTeam'
import SendMessage from './views/SendMessage'

class App extends Component {
    render() {
        return (
            <div>
                <HeaderForLoginUsers />
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
                            <TeamPreview otbor={this.props.params}/>
                        </Page>
                    )}/>
                    <Route path="/join-team" render={() => (
                        <Page title="Заявка за присъединяване на отбор" leftColumn=" http://placehold.it/800x60">
                            <SportJoinRequest/>
                        </Page>
                    )}/>
                    <Route path="/adding-sport" render={() => (
                        <Page title="Заявка за добавяне на отбор" leftColumn={require('./images/upload1.JPG')}>
                           <AddingSport/>
                        </Page>
                    )}/>
                    <Route path="/view-join-team" render={() => (
                        <Page title="Преглед и присъединяване към отбор ">
                           <ViewJoinTeam/>
                        </Page>
                    )}/>
                     <Route path="/send-message" render={() => (
                        <Page title="Изпращане на лично съобщение">
                           <SendMessage/>
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
