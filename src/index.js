import React from 'react';
import ReactDOM from 'react-dom';
import firebase from 'firebase';
import App from './App';
import './index.css';

firebase.initializeApp({
apiKey: "AIzaSyBR9pT31vWuEA8tpCklmA4PTpRhLNBA_9Y",
    authDomain: "pseudogram-17356.firebaseapp.com",
    databaseURL: "https://pseudogram-17356.firebaseio.com",
    storageBucket: "pseudogram-17356.appspot.com",
    messagingSenderId: "107636349639"

});

ReactDOM.render(
  <App />,
  document.getElementById('root')
);
