import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

let state = {};
this.setState = (changes) => {
    state = Object.assign({}, state, changes);

    
    ReactDOM.render(<App {...state} />, document.getElementById('root'));
};

/* eslint no-restricted-globals: 0*/

let initialState = {
    name: "Guest",
    location: this.pathname.replace(/^\//, "")
};

this.setState(initialState);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.register();


//hasn't been working since the beginning, looks like a possible older version of react?
// 
//  https://www.youtube.com/watch?v=JIHDS1x_EYU&t=901s
// 