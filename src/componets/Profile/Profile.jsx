import React from "react";
import style from "./Profile.module.css";
import Ava from "./Ava/Ava";
import MyPostContainer from "./MyPsotContainer/MyPostContainer";


const Profile = () => {
    return (
        <div className={style.item}>
            <Ava/>
            <div className={style.posts}>
                <div>
                    <MyPostContainer />
                </div>
            </div>
        </div>
    )
}

export default Profile;