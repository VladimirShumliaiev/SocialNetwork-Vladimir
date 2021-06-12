import React from "react";
import style from './Post.module.css'

const Post = (props) => {
    return (
        <div className={style.item}>
            <img src={props.foto} alt=""/>
            {props.sms}
            <div>
                like {props.like} counts.
            </div>
        </div>
    )
}

export default Post;