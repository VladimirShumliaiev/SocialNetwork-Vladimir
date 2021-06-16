import React from "react";
import tracksArray from "./tracksArray";
import Tracks from "../../MusicComponents/Tracks/Tracks";

let newTracksArrayRight = tracksArray.map((element) => {
    return (
        <Tracks tracks={element.tracksRight} />
    )
})

export default newTracksArrayRight;