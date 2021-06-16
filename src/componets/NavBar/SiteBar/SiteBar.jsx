import React from "react";
import SiteBarAlert from "./SiteBarAlert/SiteBarAlert";
import style from './SiteBar.module.css'

const SiteBar = (props) => {
    let newArrFriends = props.state.map((el) => {
        return (
            <div className={style.s}>
            <SiteBarAlert siteBarFoto={el.foto} siteBarName={el.name}/>
            </div>
        )
    })

    return (
        <div className={style.item}>
            {newArrFriends}
        </div>
    )
}

export default SiteBar;