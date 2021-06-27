import React from "react";
import ArtistAlert from "../../MusicComponents/ArtistAlert";

import artistNameList from "./artistNameList";


let newArtistSecondColumn = artistNameList.secondColumnArtist.map((element) => {
    return (
        <ArtistAlert name={element.name} />
    )
})

export default newArtistSecondColumn;
