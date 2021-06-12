import React from "react";
import tracksObject from "./tracksObject";
import Tracks from "../../MusicComponents/Tracks/Tracks";

let newTracsObject = tracksObject.map((elements) => {
    return (
        <Tracks tracks={elements.tracks}/>
    )
})

export default newTracsObject;