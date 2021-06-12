import React from "react";
import tracksObject from "./tracksObject";
import Tracks from "../../MusicComponents/Tracks/Tracks";

let newTracksObjectRight = tracksObject.map((element) => {
    return (
        <Tracks tracks={element.tracksRight} />
    )
})

export default newTracksObjectRight;