import './index.css';
import state, {
    addSmsDilogs, addSmsSettings, addUserProfile, onChengeMessanges,profileOnChange, subscribe
} from "./Redux/state";
import reportWebVitals from "./reportWebVitals";
import ReactDOM from "react-dom";
import {BrowserRouter} from "react-router-dom";
import React from "react";
import App from "./App";


export let rerenderEntireTree = (state) => {
    ReactDOM.render(
        <BrowserRouter>
            <React.StrictMode>
                <App state={state} addUserProfile={addUserProfile} addSmsDilogs={addSmsDilogs} addSmsSettings={addSmsSettings}
                     onChengeMessanges={onChengeMessanges} profileOnCange={profileOnChange}/>
            </React.StrictMode>,
        </BrowserRouter>,
        document.getElementById('root')
    );
}

rerenderEntireTree(state);
subscribe(rerenderEntireTree);


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
