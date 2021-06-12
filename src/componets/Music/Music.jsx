import React from "react";
import style from './Music.module.css'
import newArtistObject from "./objctMusic/Artist/newArtistObject";
import newTracsObject from "./objctMusic/Tracks/newTracsObject";
import newArtistObjectRight from "./objctMusic/Artist/newArtistObjectRight";
import newTracksObjectRight from "./objctMusic/Tracks/newTracksObjectRight";

const Music = () => {
    return (
        <div className={style.item}>
            <div className={style.oneBlock}>
                {newArtistObject}
            </div>

            <div className={style.twoBlock}>
                {newTracsObject}
            </div>

            <div className={style.threeBlock}>
                {newArtistObjectRight}
            </div>

            <div className={style.forBlock}>
                {newTracksObjectRight}
            </div>

        </div>
    )
}

export default Music;