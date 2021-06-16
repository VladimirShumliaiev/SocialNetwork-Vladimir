import React from "react";
import tracksArray from "./tracksArray";
import Tracks from "../../MusicComponents/Tracks/Tracks";

let newTracsArray = tracksArray.map((elements) => {
    return (
        <Tracks tracks={elements.tracks}/>
    )
})

export default newTracsArray;