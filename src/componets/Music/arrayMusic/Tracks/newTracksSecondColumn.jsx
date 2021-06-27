import Tracks from "../../MusicComponents/Tracks/Tracks";
import trackList from "./tracksArray";


let newTracksSecondColumn = trackList.secondTrackColumn.map((el) => {
    return (
        <Tracks tracks={el.track}/>
    )
})

export default newTracksSecondColumn;