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
import TeamJoinRequest from './views/TeamJoinRequest';
import SportSearch from './views/SportSearch';
import TeamPreview from './views/TeamPreview';
import AcceptTeamRequest from './views/AcceptTeamRequest';
import CreateTeam from './views/CreateTeam';
import SendMessage from './views/SendMessage'
import AddingSport from './views/AddingSport';
import ForgottenPasswordPage from './views/ForgottenPasswordPage';
import ViewAllSports from './views/ViewAllSports';
import AllTeams from './views/AllTeams';
import MyTeams from './views/MyTeams';
import ViewJoinTeam from './views/ViewJoinTeam';
class App extends Component {
    render() {
        document.title = 'Sportyaga';
        return (
            <div>
                {/*<HeaderForLoginUsers />*/}
                <Switch>
                    <Route path="/login" render={() => (
                        <div>
                            <HeaderForLoginUsers/>
                            <Page>
                                <LoginPage/>
                            </Page>
                        </div>

                    )}/>
                    <Route path="/register" render={() => (
                        <div>
                            <HeaderForLoginUsers/>
                            <Page>
                                <RegisterPage/>
                            </Page>
                        </div>
                    )}/>

                    <Route path="/forgotten-password" render={() => (
                        <div>
                            <Page><ForgottenPasswordPage/></Page>
                        </div>
                    )}/>

                    <Route path="/sport-preview" render={() => (
                        <div>
                            <Header/>
                            <Page title="Преглед на спорт" leftColumn={require('./images/aikido.jpeg')}>
                                <SportPreview/>
                            </Page>
                        </div>
                    )}/>

                    <Route path="/team-all" render={() => (
                        <div>
                            <Header/>
                            <Page title="Преглед на всички отбори" leftColumn={require('./images/1.jpg')}>
                                <AllTeams/>
                            </Page>
                        </div>
                    )}/>
                    <Route path="/team-create" render={() => (
                        <div>
                            <Header/>
                            <Page title="Създаване на отбор" leftColumn={require('./images/basketball.jpg')}>
                                <CreateTeam/>
                            </Page>
                        </div>
                    )}/>
                    <Route path="/join-team" render={() => (
                        <div>
                            <Header/>
                            <Page title="Заявка за присъединяване на отбор"
                                  leftColumn={require('./images/basketball.jpg')}>
                                <TeamJoinRequest/>
                            </Page>
                        </div>
                    )}/>
                    <Route path="/accept-team" render={() => (
                        <div>
                            <Header/>
                            <Page title="Одобряване на нов участник в отбора">
                                <AcceptTeamRequest/>
                            </Page>
                        </div>
                    )}/>

                    <Route path="/adding-sport" render={() => (
                        <div>
                            <Header/>
                            <Page title="Заявка за добавяне на отбор" leftColumn={require('./images/upload1.JPG')}>
                                <AddingSport/>
                            </Page>
                        </div>
                    )}/>
                    <Route path="/view-join-team" render={() => (
                        <div>
                            <Header/>
                            <Page title="Преглед и присъединяване към отбор ">

                                <ViewJoinTeam/>
                            </Page>
                        </div>
                    )}/>
                    <Route path="/sport-search" render={() => (
                        <div>
                            <Header/>
                            <Page title="Търсене на спорт">

                                <SportSearch/>
                            </Page>
                        </div>
                    )}/>
                    <Route path="/my-teams" render={() => (
                        <div>
                            <Header/>
                            <Page title="Преглед на моите отбори">

                                <MyTeams/>
                                {/*<ViewJoinTeam/>*/}
                            </Page>
                        </div>
                    )}/>
                    <Route path="/send-message" render={() => (
                        <div>
                            <Header/>
                            <Page title="Изпращане на лично съобщение">

                                <SendMessage/>
                            </Page>
                        </div>
                    )}/>
                    <Route path="/sport-all/:currentSport" component={ViewAllSports}/>
                    <Route path="/team-preview/:teamName" component={TeamPreview}/>
                    <Route path="/logged" render={() => (
                        <div>
                            <Header/>
                            <Page>
                                <LandingPage/>
                            </Page>
                        </div>
                    )}/>
                    <Route path="/" render={() => (
                        <Page>
                            <HeaderForLoginUsers/>
                            <LandingPage/>
                        </Page>
                    )}/>
                </Switch>
                <Footer />
            </div>
        )
            ;
    }

}

export default App;
