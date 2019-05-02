import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import * as firebase from 'firebase';
require('dotenv').config();

// Initialize Firebase
var config = {
  apiKey: process.env.API_SECRET_KEY,
  authDomain: process.env.AUTH_DOMAIN,
  databaseURL: "https://menu-management-3b231.firebaseio.com",
  projectId: "menu-management-3b231",
  storageBucket: "menu-management-3b231.appspot.com",
  messagingSenderId: "655566171234"
};
firebase.initializeApp(config);



ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
