import React from "react";
import style from './Music.module.css'
import newArtistArray from "./arrayMusic/Artist/newArtistArray";
import newTracsArray from "./arrayMusic/Tracks/newTracsArray";
import newArtistArrayRight from "./arrayMusic/Artist/newArtistArrayRight";
import newTracksArrayRight from "./arrayMusic/Tracks/newTracksArrayRight";

const Music = (props) => {
    return (
        <div className={style.item}>
            <div className={style.oneBlock}>
                {newArtistArray}
            </div>

            <div className={style.twoBlock}>
                {newTracsArray}
            </div>

            <div className={style.threeBlock}>
                {newArtistArrayRight}
            </div>

            <div className={style.forBlock}>
                {newTracksArrayRight}
            </div>

        </div>
    )
}

export default Music;