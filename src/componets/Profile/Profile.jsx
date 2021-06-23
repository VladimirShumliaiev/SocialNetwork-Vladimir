import React from "react";
import style from "./Profile.module.css";
import Ava from "./Ava/Ava";
import MyPost from "./MyPsot/MyPost";


const Profile = (props) => {
    return (
        <div className={style.item}>
            <Ava/>
            <div className={style.posts}>
                <div>
                    <MyPost state={props.state} profileOnChange={props.profileOnChange} addUserProfile={props.addUserProfile}/>
                </div>
            </div>
        </div>
    )
}

export default Profile;