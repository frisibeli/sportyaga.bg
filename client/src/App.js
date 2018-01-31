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
import AllTeams from './containers/AllTeamsContainer';
import MyTeams from './views/MyTeams';
import ViewJoinTeam from './views/ViewJoinTeam';
class App extends Component {
    constructor(props, context){
        super(props, context);
        this.state = {
            authorized: true
        }
        this.login = this.login.bind(this);
        this.logout = this.logout.bind(this);
    }

    login(){
        this.setState({authorized:true});
    }
    logout(){
        this.setState({authorized:false});
    }

    render() {
        return (
            <div>
                <Header authorized={this.state.authorized} logout={this.logout} />
                <Switch>
                    <Route path="/login" render={() => (
                        <Page><LoginPage login={this.login}/></Page>

                    )}/>
                    <Route path="/register" render={() => (
                            <Page>
                                <RegisterPage/>
                            </Page>
                    )}/>

                    <Route path="/forgotten-password" render={() => (
            
                            <Page><ForgottenPasswordPage/></Page>
                    )}/>

                    <Route path="/sport-preview" render={() => (
                            <Page title="Преглед на спорт" leftColumn={require('./images/aikido.jpeg')}>
                                <SportPreview/>
                            </Page>
                    )}/>

                    <Route path="/team-all" render={() => (
                            <Page title="Преглед на всички отбори" leftColumn={require('./images/1.jpg')}>
                                <AllTeams/>
                            </Page>
                    )}/>
                    <Route path="/team-create" render={() => (
                            <Page title="Създаване на отбор" leftColumn={require('./images/basketball.jpg')}>
                                <CreateTeam/>
                            </Page>
                    )}/>
                    <Route path="/join-team" render={() => (
                            <Page title="Заявка за присъединяване на отбор"
                                  leftColumn={require('./images/basketball.jpg')}>
                                <TeamJoinRequest/>
                            </Page>
                    )}/>
                    <Route path="/accept-team" render={() => (
                            <Page title="Одобряване на нов участник в отбора">
                                <AcceptTeamRequest/>
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
                    <Route path="/sport-search" render={() => (
                            <Page title="Търсене на спорт">

                                <SportSearch/>
                            </Page>
                    )}/>
                    <Route path="/my-teams" render={() => (
                        <Page title="Преглед на моите отбори">
                            <MyTeams/>
                        </Page>
                    )}/>
                    <Route path="/send-message" render={() => (
                            <Page title="Изпращане на лично съобщение">

                                <SendMessage/>
                            </Page>
                    )}/>
                    <Route path="/sport-all/:currentSport" component={ViewAllSports}/>
                    <Route path="/team-preview/:teamName" component={TeamPreview}/>
                    <Route path="/logged" render={() => (
                            <Page>
                                <LandingPage/>
                            </Page>
                    )}/>
                    <Route path="/" render={() => (
                        <Page>
                            <LandingPage/>
                        </Page>
                    )}/>
                </Switch>
                <Footer />
            </div>
        );
    }

}

export default App;
