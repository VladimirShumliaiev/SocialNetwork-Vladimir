import React from "react";
import {NavLink} from "react-router-dom";
import Content from "../ComponentsNews/ContentNews/Content";

const Army = (props) => {
    return (
        <div>
        <Content id={'/legioners'} name={'Legioners'}/>
        <Content id={'/connica'} name={'Cavalery'}/>
        <Content id={'/newsRome'} name={'NewsRome'}/>
        <Content id={'/ships'} name={'Ships'}/>
        </div>
    )
}

export default Army;