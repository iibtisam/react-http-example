import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import axios from 'axios';


axios.defaults.baseURL = 'https://jsonplaceholder.typicode.com/';
// axios.defaults.headers.common['Authorization'] ='AUTH_TOKEN';
// axios.defaults.headers.post['Content-Type'] = 'application/json';

axios.interceptors.request.use(request => {
    console.log('request', request);
    // add headers here;
    return request
}, error=>{
    console.log(error);
    return Promise.reject(error);
});


axios.interceptors.response.use(response => {
    console.log('response', response);
    // add headers here;
    return response
}, error=>{
    console.log(error);
    return Promise.reject(error);
});


ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
