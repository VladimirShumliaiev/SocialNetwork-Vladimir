import React from "react";
import './App.css';
import Header from "./componets/Header/Header";
import NavBar from "./componets/NavBar/NavBar";
import Profile from "./componets/Profile/Profile";
import {Route} from "react-router-dom";
import Dilogs from "./componets/Dilogs/Dilogs";
import Music from "./componets/Music/Music";
import Settings from "./componets/Settings/Settings";
import News from "./componets/News/News";


const App = (props) => {
    return (
        <header className={'App'}>
            <Header/>
            <NavBar navBarState={props.appState.arrFriends}/>
            <div>
                <Route path={'/profile'}
                       render={() => <Profile profileState={props.appState.massProfile} addUser={props.addUser}/>}/>
                <Route path={'/dilogs'} render={() => <Dilogs
                    dilogsState={props.appState.arrDilogs}
                    addSmsDilogs={props.addSmsDilogs}/>
                }/>
                <Route path={'/music'} render={Music}/>
                <Route path={'/news'} render={News}/>
                <Route path={'/settings'} render={Settings}/>
            </div>
        </header>
    )
}
export default App;
