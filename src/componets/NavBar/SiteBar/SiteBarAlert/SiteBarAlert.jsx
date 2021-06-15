import React from "react";
import style from './SiteBarAlert.module.css'

const SiteBarAlert = (props) => {
    return (
        <div className={style.item}>
            <div className={style.foto}>
                <img src={props.siteBarFoto} alt=""/>
            </div>
            <div className={style.name}>
                {props.siteBarName}
            </div>
        </div>
    )
}

export default SiteBarAlert;