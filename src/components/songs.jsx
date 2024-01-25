import CurrentSong from "./currentsong";
import NumberOfPlays from "./numberofplays";

const ChangeSong = ({current,change,songsArray}) => {
    return (
        <button onClick={()=>{
          if(current === songsArray.length-1){
            current = -1;
          }
          change(current + 1);
        }} >
          Next Track
        </button>
    )
  }

const Songs = ({songsArray, playing, playCounts, changeSong}) => {
    return (
        <>

    <button onClick={()=>{
          if(playing === songsArray.length-1){
            playing = -1;
          }
          changeSong(playing + 1);
        }} >
          Next Track
    </button>
      <ul className="song-list">
          {songsArray.map((song) => {
            return <li className="song-item" key={song.title}>
              <h2>{song.title}</h2>
              <p>{song.artist}</p>
              <img className="song-img" src={song.albumCover} alt={"album cover for song " + song.title + " by " + song.artist} />
              <CurrentSong currentSong={song.title} songs={songsArray} current={playing} />
              <NumberOfPlays song={song.title} count={playCounts}/>
            </li>
          })}
      </ul>
        </>
    )
  }

export default Songs;
