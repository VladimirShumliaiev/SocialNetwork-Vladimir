import React from "react";
import style from './MyPost.module.css'
import Post from "../Post/Post";
import MyAva from "../MyAva/MyAva";
import {
    addUserProfileActionCreator,
    profileOnChangeActionCreator,
} from "../../../Redux/Reducers/profileReducer";


const MyPost = (props) => {


    let newArrProfile = props.state.arrProfile.map((el) => {
        return (
            <div>
                <Post foto={el.foto} sms={el.sms} like={el.like}/>
            </div>
        )
    })

    let profileSmsPost = props.state.profileSmsPost;

    let addPost = () => {
        props.dispatch(addUserProfileActionCreator());

    }

    let newProfileOnChange = (e) => {
        let smsText = e.target.value;
        props.dispatch(profileOnChangeActionCreator(smsText));
    }

    return (
        <div>
            <div className={style.myPost}>
                <MyAva/>
            </div>
            <div>
                <textarea onChange={newProfileOnChange} value={profileSmsPost} placeholder={'add post'} cols="30"
                          rows="4"/>
                <button onClick={addPost}>add Post</button>
            </div>
            <div>
                {newArrProfile}
            </div>
        </div>
    )
}

export default MyPost;