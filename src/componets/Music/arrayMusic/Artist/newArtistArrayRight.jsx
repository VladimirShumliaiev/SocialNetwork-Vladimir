import React from "react";
import ArtistAlert from "../../MusicComponents/ArtistAlert";
import artistsArray from "./artistArray";


let newArtistArrayRight = artistsArray.map((element) => {
    return (
        <ArtistAlert name={element.artist} />
    )
})

export default newArtistArrayRight;
