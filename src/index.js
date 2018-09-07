import React,{Component} from 'react';
import ReactDOM from 'react-dom';
import Router from './Router';
import {Provider} from 'react-redux';
import {createStore,applyMiddleware} from 'redux';
import Reducer from './Reducer';
import createSagaMiddleware from 'redux-saga';
import rootSaga from './Saga';

const sagaMiddleware=createSagaMiddleware(rootSaga);
const store=createStore(Reducer,applyMiddleware(sagaMiddleware));
ReactDOM.render(
    <Provider store={store}>
         <Router></Router>
    </Provider>,
    document.getElementById('root')
);