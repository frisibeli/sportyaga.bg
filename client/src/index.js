import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import './styles/base.css';
import './styles/bulma.css';

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
