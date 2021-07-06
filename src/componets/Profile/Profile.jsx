import React from "react";
import style from "./Profile.module.css";
import Ava from "./Ava/Ava";
import MyPostContainer from "./MyPsotContainer/MyPostContainer";


const Profile = (props) => {
    return (
        <div className={style.item}>
            <Ava/>
            <div className={style.posts}>
                <div>
                    <MyPostContainer state={props.state}  dispatch={props.dispatch}/>
                </div>
            </div>
        </div>
    )
}

export default Profile;