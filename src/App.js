import React from 'react';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';
import logo from './logo.svg';
import './App.css';

import rootReducer from './reducers';
import mainSaga from './sagas';
import MainApp from './components/AppWrapper';

const sagaMiddleware = createSagaMiddleware();

/* eslint-disable no-underscore-dangle */
const mainStore = createStore(
    rootReducer,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
    applyMiddleware(sagaMiddleware),
);
/* eslint-enable */

sagaMiddleware.run(mainSaga);

export default function App() {
    return (
        <Provider store={mainStore}>
            <MainApp />
        </Provider>
    );
}
