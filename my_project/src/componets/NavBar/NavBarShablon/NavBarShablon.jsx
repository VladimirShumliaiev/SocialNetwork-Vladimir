import React from "react";

const NavBarShablon = (props) => {
    return (
        <div>
            {props.name}
            <img src={props.foto} alt=""/>
        </div>
    )
}

export default NavBarShablon