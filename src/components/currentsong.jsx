const CurrentSong = ({ currentSong, songs, current}) => {
    return currentSong === songs[current].title ? <p className="song-current" >Currently Playing</p> : <p></p>
  }

  export default CurrentSong;