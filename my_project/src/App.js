import React from "react";
import './App.css';
import Header from "./componets/Header/Header";
import NavBar from "./componets/NavBar/NavBar";
import Profile from "./componets/Profile/Profile";
import {BrowserRouter, Route} from "react-router-dom";
import Dilogs from "./componets/Dilogs/Dilogs";
import Music from "./componets/Music/Music";
import Settings from "./componets/Settings/Settings";
import News from "./componets/News/News";



const App = (props) => {
    return (
        <BrowserRouter>
            <header className={'App'}>
                <Header/>
                <NavBar navBarState={props.appState.massFriends}/>
                <div>
                    <Route path={'/profile'} render={() => <Profile profileState={props.appState.massProfile}/>}/>
                    <Route path={'/dilogs'} render={() => <Dilogs dilogsState={props.appState.massDilogs}/>}/>
                    <Route path={'/music'} render={Music}/>
                    <Route path={'/news'} render={News}/>
                    <Route path={'/settings'} render={Settings}/>
                </div>
            </header>
        </BrowserRouter>
    )
}
export default App;
