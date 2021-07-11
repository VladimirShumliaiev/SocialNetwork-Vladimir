import React from "react";
import './App.css';
import Header from "./componets/Header/Header";
import NavBar from "./componets/NavBar/NavBar";
import Profile from "./componets/Profile/Profile";
import {Route} from "react-router-dom";
import DilogsContainer from "./componets/Dilogs/DilogsContainer";
import Music from "./componets/Music/Music";
import News from "./componets/News/News";
import SettingsContainer from "./componets/Settings/SettingsContainer";


const App = () => {
    return (
        <header className={'App'}>
            <Header/>
            <NavBar/>
            <div>
                <Route path={'/profile'} render={() => <Profile/>}/>
                <Route path={'/dilogs'} render={() => <DilogsContainer/>}/>
                <Route path={'/music'} render={Music}/>
                <Route path={'/news'} render={News}/>
                <Route path={'/settings'} render={() => <SettingsContainer/>}/>
            </div>
        </header>
    )
}
export default App;
