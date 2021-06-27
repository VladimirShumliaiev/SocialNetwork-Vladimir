import React from "react";
import style from './MyPost.module.css'
import Post from "../Post/Post";
import MyAva from "../MyAva/MyAva";
import {
    addUserProfileActionCreator,
    profileOnChangeActionCreator,
} from "../../../Redux/state";


const MyPost = (props) => {


    let newArrProfile = props.state.arrProfile.map((el) => {
        return (
            <div>
                <Post foto={el.foto} sms={el.sms} like={el.like}/>
            </div>
        )
    })

    let newAddPost = React.createRef();

    let addPost = () => {
        // let text = newAddPost.current.value;
        props.dispatch(addUserProfileActionCreator());

    }

    let newProfileOnChange = () => {
        let smsText = newAddPost.current.value;
        props.dispatch(profileOnChangeActionCreator(smsText));
    }

    return (
        <div>
            <div className={style.myPost}>
                <MyAva/>
            </div>
            <div>
                <textarea ref={newAddPost} onChange={newProfileOnChange} value={props.state.profileSmsPost} cols="30"
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