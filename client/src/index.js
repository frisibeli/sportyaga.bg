import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';

import registerServiceWorker from './registerServiceWorker';
import './styles/base.css';
import './styles/bulma.css';

ReactDOM.render(<Router><App /></Router>, document.getElementById('root'));
registerServiceWorker();
