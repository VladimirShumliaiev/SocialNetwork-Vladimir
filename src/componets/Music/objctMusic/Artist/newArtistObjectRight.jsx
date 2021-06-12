import React from "react";
import artistsObject from "./artistObjct";
import ArtistAlert from "../../MusicComponents/ArtistAlert";


let newArtistObjectRight = artistsObject.map((element) => {
    return (
        <ArtistAlert name={element.artist} />
    )
})

export default newArtistObjectRight;
