import React from "react";
import style from './MyPost.module.css'
// import TeXterea from "../TextArea/TeXterea";
// import Button from "../Button/Button";
import Post from "../Post/Post";
import MyAva from "../MyAva/MyAva";


const MyPost = (props) => {


    let newMassivProfile = props.myPostsState.map((el) => {
        return (
            <div>
                <Post foto={el.foto} sms={el.sms} like={el.like}/>
            </div>
        )
    })

    let newAddPost = React.createRef();

    let addPost = () => {
        let text = newAddPost.current.value;
        alert(text);
    }

    return (
        <div>
            <div className={style.myPost}>
                <MyAva/>
            </div>
            <div>
                <textarea ref={newAddPost} cols="30" rows="4"></textarea>
                <button onClick={addPost}>add Post</button>
            </div>
            <div>
                {newMassivProfile}
            </div>
        </div>
    )
}

export default MyPost;