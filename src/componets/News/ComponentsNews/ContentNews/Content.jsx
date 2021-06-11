import React from "react";
import {NavLink} from "react-router-dom";

const Content = (props) => {
    return (
        <div>
            <NavLink to={props.id}>{props.name}</NavLink>
        </div>
    )
}

export default Content;