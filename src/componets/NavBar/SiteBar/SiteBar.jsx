import React from "react";
import SiteBarAlert from "./SiteBarAlert/SiteBarAlert";
import style from './SiteBar.module.css'

const SiteBar = (props) => {
    let newMassFriends = props.siteBarState.map((el) => {
        return (
            <div className={style.s}>
            <SiteBarAlert siteBarFoto={el.foto} siteBarName={el.name}/>
            </div>
        )
    })

    return (
        <div className={style.item}>
            {newMassFriends}
        </div>
    )
}

export default SiteBar;