import store from "./redux/redux-store";
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import SocialNetwork from './App';
import {BrowserRouter} from 'react-router-dom';
import {Provider} from 'react-redux';


ReactDOM.render(
    <BrowserRouter>
        <Provider store={store}>
            <SocialNetwork />
        </Provider>
    </BrowserRouter>, document.getElementById('root'));

// API
// If you want your app to load offline and load faster, you can change
// unregister() to register below. Note this comes with some pitfalls.
//  Learn more about service workers: https://bit.ly/CRA-PWA

//serviceWorker.unregister();