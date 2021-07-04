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
            <NavBar
                state={props.state.arrFriends}/>
            <div>
                <Route path={'/profile'} render={() => <Profile
                    state={props.state.profilePage}
                    dispatch={props.dispatch}/>
                }/>
                <Route path={'/dilogs'} render={() => <Dilogs
                    state={props.state.arrDilogs}
                    dispatch={props.dispatch}/>
                }/>
                <Route path={'/music'} render={Music}/>
                <Route path={'/news'} render={News}/>
                <Route path={'/settings'} render={() => <Settings
                    state={props.state.settingsPage}
                    dispatch={props.dispatch}/>}/>
            </div>
        </header>
    )
}
export default App;
