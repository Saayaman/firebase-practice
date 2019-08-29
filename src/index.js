import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App';
import * as serviceWorker from './serviceWorker';
import { BrowserRouter as Router } from 'react-router-dom';

// import Firebase, { firebaseApp } from './firebase';
import FirebaseContext from './firebaseContext';

import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import reduxThunk from 'redux-thunk';

import rootReducer from './reducers/index'

const store = createStore(rootReducer, applyMiddleware(reduxThunk));

// const firebase = new Firebase();


ReactDOM.render(
    <Provider store={store}>
        {/* <FirebaseContext.Provider value={new Firebase()}> */}
            <Router>
                <App />
            </Router>
        {/* </FirebaseContext.Provider> */}
    </Provider>,
    document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
