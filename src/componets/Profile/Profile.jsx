import React from "react";
import style from "./Profile.module.css"
import Ava from "./Ava/Ava";
import MyPost from "./MyPsot/MyPost";


const Profile = (props) => {
    return (
        <div className={style.item}>
            <Ava/>
            <div className={style.posts}>
                <div>
                    <MyPost myPostsState={props.profileState} addUser={props.addUser}/>
                </div>
            </div>
        </div>
    )
}

export default Profile;