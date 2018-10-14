import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import { Router } from 'react-router-dom';
import logger from 'redux-logger';

import history from './history';
import reducer from './store/reducer';

import './index.css';
import App from './App';

import thunk from 'redux-thunk';


export const store = createStore(reducer, applyMiddleware(thunk, logger));


ReactDOM.render(
    <Provider store={store}>
        <Router history={history}>
            <App />
        </Router>
    </Provider>
    , document.getElementById('root'));
