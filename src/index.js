import React from 'react';
import ReactDOM from 'react-dom';
import firebase from 'firebase';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

firebase.initializeApp({
	apiKey: "AIzaSyA4-buvJ2bx6n7bLFuuTcapQvgxXHvRa4U",
    authDomain: "pseudogram-reactjs.firebaseapp.com",
    databaseURL: "https://pseudogram-reactjs.firebaseio.com",
    projectId: "pseudogram-reactjs",
    storageBucket: "pseudogram-reactjs.appspot.com",
    messagingSenderId: "281023271847"
})

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
