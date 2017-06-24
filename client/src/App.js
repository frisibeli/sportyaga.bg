import React, {Component} from 'react';
// import Elemental from 'elemental';
// import { Button, Alert, Spinner, Modal } from 'elemental';
import logo from './logo.svg';
import Header from './components/Header';
import Footer from './components/Footer';
import Page from './components/Page';
import LandingPage from './views/LandingPage';
import Page from './components/Page';
import RegisterPage from './views/RegisterPage'
import ForgottenPasswordPage from './views/ForgottenPasswordPage'
import AllTeams from './views/AllTeams'
class App extends Component {

    render() {
        return (
            <div className="App">
                <Header />
                {/*<Page title="Начална страница">*/}
                    {/*<LandingPage/>*/}
                {/*</Page>*/}

                <Page title="Забравена парола">
                    <ForgottenPasswordPage/>
                </Page>
                <Footer />
            </div>
        );
    }

}

export default App;
