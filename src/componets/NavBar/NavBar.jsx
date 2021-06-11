import React from "react";
import NavBarShablon from "./NavBarShablon/NavBarShablon";
import style from './NavBar.module.css'
import {NavLink} from "react-router-dom";
import SiteBar from "./SiteBar/SiteBar";


const NavBar = (props) => {
    return (
        <div className={style.item}>
            <div className={style.color}>
                <NavBarShablon name={<NavLink to={"/profile"} activeClassName={style.activeNav}>Profile</NavLink>}/>
                <NavBarShablon name={<NavLink to={'/dilogs'} activeClassName={style.activeNav}>Messages</NavLink>}/>
                <NavBarShablon name={<NavLink to={'/music'} activeClassName={style.activeNav}>Music</NavLink>}/>
                <NavBarShablon name={<NavLink to={'/news'} activeClassName={style.activeNav}>News</NavLink>}/>
                <br/>
            </div>
            <div>
                <NavBarShablon name={<NavLink to={'/settings'} activeClassName={style.activeNav}><h3>Settings</h3></NavLink>}/>
            </div>
            <div className={style.siteBar}>
                <h3>Friends</h3>
                <div>
                <SiteBar siteBarState={props.navBarState} />
                </div>
            </div>
        </div>
    )
}

export default NavBar;