import React from "react";
import {
    addUserProfileActionCreator,
    profileOnChangeActionCreator,
} from "../../../Redux/Reducers/profileReducer";
import MyPost from "../MyPsot/MyPost";


const MyPostContainer = (props) => {

    let addPost = () => {
        props.dispatch(addUserProfileActionCreator());
    }

    let newProfileOnChange = (smsText) => {
        props.dispatch(profileOnChangeActionCreator(smsText));
    }

    return (
        <MyPost post={props.state.arrProfile} addPost={addPost} newProfileOnChange={newProfileOnChange}
                profileSmsPost={props.state.profileSmsPost}/>
    )


}

export default MyPostContainer;