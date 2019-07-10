import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import './index.css';
import App from './App/App';
import store from "./js/store/index";
import * as serviceWorker from './serviceWorker';

const app = document.getElementById('root');

ReactDOM.render(<Provider store={store}>
    <App />
    </Provider>, app);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
