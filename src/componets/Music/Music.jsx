import React from "react";
import style from './Music.module.css'
import newArtistSecondColumn from "./arrayMusic/Artist/newArtistSecondColumn";
import newArtistFirstColumn from "./arrayMusic/Artist/newArtistFirstColumn";
import newTracksOneColumn from "./arrayMusic/Tracks/newTracksOneColumn";
import newTracksSecondColumn from "./arrayMusic/Tracks/newTracksSecondColumn";

const Music = () => {
    return (
        <div className={style.item}>
            <div className={style.oneBlock}>
                {newArtistFirstColumn}
            </div>

            <div className={style.twoBlock}>
                {newTracksOneColumn}
            </div>

            <div className={style.threeBlock}>
                {newArtistSecondColumn}
            </div>

            <div className={style.forBlock}>
                {newTracksSecondColumn}
            </div>

        </div>
    )
}

export default Music;