import React from 'react';
import ReactDOM from 'react-dom';
// import './index.css';
// import App from './App';
import Userprofile from './profile';
import LgScreePage from './LgScreenPage';
// import * as serviceWorker from './serviceWorker';
ReactDOM.render(<LgScreePage />,document.getElementById('header'));
ReactDOM.render(<Userprofile />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
// serviceWorker.unregister();
