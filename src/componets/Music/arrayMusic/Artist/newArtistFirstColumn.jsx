import React from "react";
import MusicArtist from "../../MusicComponents/ArtistAlert";
import artistNameList from "./artistNameList";

const newArtistFirstColumn = artistNameList.firstColumnArtist.map((el) => {
    return (
       <MusicArtist name={el.name}/>
    )
})

export default newArtistFirstColumn;