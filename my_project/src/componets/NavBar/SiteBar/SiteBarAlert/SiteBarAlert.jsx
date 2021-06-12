import React from "react";
import style from './SiteBarAlert.module.css'

const SiteBarAlert = (props) => {
    return (
        <div>
            <div>
            <img src={props.siteBarFoto} alt=""/>
            </div>

            <div>
            {props.siteBarName}
            </div>
        </div>
    )
}

export default SiteBarAlert;