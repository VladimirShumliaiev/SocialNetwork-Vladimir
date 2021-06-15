import React from "react";
import NavBarShablon from "./NavBarShablon/NavBarShablon";
import style from './NavBar.module.css'
import {NavLink} from "react-router-dom";
import SiteBar from "./SiteBar/SiteBar";


const NavBar = (props) => {
    let newNavBarList = props.navBarList.map((el) => {
        return(
            <NavBarShablon name={<NavLink to={el.id} activeClassName={style.activeNav}>{el.name}</NavLink>}/>
        )
    })
    return (
        <div className={style.item}>
            <div className={style.color}>
                {newNavBarList}
                <br/>
            </div>
            <div className={style.siteBar}>
                <SiteBar siteBarState={props.navBarState} />
            </div>
        </div>
    )
}

export default NavBar;