import React from "react";
import style from './NewsRome.module.css';
import {NavLink} from "react-router-dom";

const NewsRome = (props) => {
    return (
        <div className={style.item}>
           NewsRome
            <img src="data:image/jpeg;base64,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" alt=""/>
        </div>
    )
}

export default NewsRome;