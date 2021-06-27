import React from "react";
import Tracks from "../../MusicComponents/Tracks/Tracks";
import trackList from "./tracksArray";

let newTracksOneColumn = trackList.oneTrackColumn.map((el) => {
    return (
        <Tracks tracks={el.track}/>
    )
})

export default newTracksOneColumn;