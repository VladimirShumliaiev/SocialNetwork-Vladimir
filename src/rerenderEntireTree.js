import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import {BrowserRouter} from "react-router-dom";
import {addSmsDilogs, addUser} from "./Redux/state";


export let rerenderEntireTree = (state) => {
    ReactDOM.render(
        <BrowserRouter>
            <React.StrictMode>
                <App state={state} addUser={addUser} addSmsDilogs={addSmsDilogs}/>
            </React.StrictMode>,
        </BrowserRouter>,
        document.getElementById('root')
    );
}

