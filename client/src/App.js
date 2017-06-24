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
import SportPreview from './views/SportPreview';
import SportJoinRequest from './views/SportJoinRequest';
import CreateTeam from './views/CreateTeam';

import ForgottenPasswordPage from './views/ForgottenPasswordPage'
import AllTeams from './views/AllTeams'
class App extends Component {
    render() {
        return (
            <div>
                <Header />
                    <Switch>
                        <Route path="/register" render={()=>(
                            <Page><RegisterPage/></Page>
                        )} />
                        <Route path="/sport-preview" render={()=>(
                            <Page title="Преглед на спорт" leftColumn="http://placehold.it/800x60">
                                <SportPreview/>
                            </Page>
                        )} />
                        {/*<Route path="/team-preview" render={()=>(
                            <Page title="Преглед на отбор">
                                <TeamPreview team="A-отбора"/>
                            </Page>
                        )} />*/}
                        <Route path="/team-create" render={()=>(
                            <Page title="Създаване на отбор" leftColumn="http://placehold.it/800x60">
                                <CreateTeam/>
                            </Page>
                        )} />
                        <Route path="/join-team" render={()=>(
                                <Page title="Заявка за присъединяване на отбор" leftColumn="http://placehold.it/800x60">
                                    <SportJoinRequest/>
                                </Page>
                            )} />
                        <Route path="/" render={()=>(
                            <Page><LandingPage/></Page>
                        )} />
                    </Switch>
                <Footer />
            </div>
        );
    }

}

export default App;
