import React from "react";
import {NavLink} from "react-router-dom";

const NavBarNews = (props) => {
    return (
        <div>
            {props.name}
            <NavLink to={props.id}>{props.foto}</NavLink>
        </div>
    )
}

export default NavBarNews;