import React from "react";
import {NavLink} from "react-router-dom";

const UserDilogs = (props) => {
    return (
        <div>
            <NavLink to={`/dilogs/${props.id}`}>{props.name}</NavLink>
        </div>
    )
}

export default UserDilogs;