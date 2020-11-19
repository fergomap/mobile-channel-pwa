import React from 'react';
import ReactDOM from 'react-dom';
import app from 'firebase/app';
import App from './App';
import * as serviceWorker from './serviceWorker';
import FIREBASE_CONFIG from './config/firebase.config';
import './index.scss';

app.initializeApp(FIREBASE_CONFIG);

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

serviceWorker.register();
