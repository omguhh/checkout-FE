import React from "react";
import ReactDOM from 'react-dom';
import CustomerFeedback from './modules/CustomerFeedback/components';
import './styles/main.css';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import RootReducer from './modules/CustomerFeedback/reducer';

const store = createStore(
    RootReducer,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);


ReactDOM.render(
    <Provider store={store}>
        <CustomerFeedback />
    </Provider>,

    document.getElementById('root')
);