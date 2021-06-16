import React from "react";
import MusicArtist from "../../MusicComponents/ArtistAlert";
import artistsArray from "./artistArray";

const newArtistArray = artistsArray.map((artistsElement) => {
    return (
       <MusicArtist name={artistsElement.name}/>
    )
})

export default newArtistArray;