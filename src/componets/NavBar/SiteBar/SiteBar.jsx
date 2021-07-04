import React from "react";
import SiteBarAlert from "./SiteBarAlert/SiteBarAlert";
import siteBarList from "./SiteBarList/siteBarList";

const SiteBar = () => {
    let newArrFriends = siteBarList.map((el) => {
        return (
            <div>
            <SiteBarAlert siteBarFoto={el.foto} siteBarName={el.name}/>
            </div>
        )
    })

    return (
        <div>
            {newArrFriends}
        </div>
    )
}

export default SiteBar;