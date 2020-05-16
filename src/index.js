import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import store from "./Redux/state";
import {BrowserRouter} from "react-router-dom";

let rerender = (param) => {
    ReactDOM.render(
        <React.StrictMode>
            <BrowserRouter>
                <App state={param.getState()}
                     dispatch={param.dispatch.bind(store)}
                     action={param.actions}
                />
            </BrowserRouter>
        </React.StrictMode>,
        document.getElementById('root')
    );
}
rerender(store)
store.observer(rerender)


// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
