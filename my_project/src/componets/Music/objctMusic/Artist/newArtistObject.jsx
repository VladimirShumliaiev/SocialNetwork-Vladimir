import React from "react";
import artistsObject from "./artistObjct";
import MusicArtist from "../../MusicComponents/ArtistAlert";

const newArtistObject = artistsObject.map((artistsElement) => {
    return (
       <MusicArtist name={artistsElement.name}/>
    )
})

export default newArtistObject;