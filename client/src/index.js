import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import * as firebase from 'firebase';

require('dotenv').config();

const config = {
  apiKey: "AIzaSyCStus9gV_mFG5xDbd3ymJ5nXQ0jQIUneA",
  authDomain: "menu-management-3b231.firebaseapp.com",
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
