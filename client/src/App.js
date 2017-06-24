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
import SportJoinRequest from './views/SportJoinRequest';
import TeamPreview from './views/TeamPreview';
import CreateTeam from './views/CreateTeam';

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


                {/*<Page title="Преглед на спорт" leftColumn="http://placehold.it/800x60">*/}
                    {/*<SportPreview/>*/}
                {/*</Page>*/}

                {/*<Page title="Заявка за присъединяване на отбор" leftColumn="http://placehold.it/800x60">*/}
                    {/*<SportJoinRequest/>*/}
                {/*</Page>*/}

                {/*<Page title="Създаване на отбор" leftColumn="http://placehold.it/800x60">*/}
                    {/*<CreateTeam/>*/}
                {/*</Page>*/}

                <Page title="Преглед на отбор">
                    <TeamPreview team="A-отбора"/>
                </Page>
                */}
                <Footer />
            </div>
        );
    }

}

export default App;
