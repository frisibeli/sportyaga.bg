import React, {Component} from 'react';
// import Elemental from 'elemental';
// import { Button, Alert, Spinner, Modal } from 'elemental';
import logo from './logo.svg';
import Header from './components/Header';
import Footer from './components/Footer';
import Page from './components/Page';

import LandingPage from './views/LandingPage';
import RegisterPage from './views/RegisterPage';
import SportPreview from './views/SportPreview';
import ForgottenPasswordPage from './views/ForgottenPasswordPage'
import AllTeams from './views/AllTeams'
import MyTeams from './views/MyTeams'
class App extends Component {

    render() {
        return (
            <div className="App">
                <Header />
                {/*<Page title="Начална страница">*/}
                    {/*<LandingPage/>*/}
                {/*</Page>*/}
                <Page title="Моите отбори">
                <MyTeams/>
                </Page>
             { /*  <Page title="Преглед на спорт" leftColumn="http://placehold.it/800x60">
                    <SportPreview/>
                </Page>
                */}
                <Footer />
            </div>
        );
    }

}

export default App;
