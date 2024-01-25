const NumberOfPlays = ({ song, count }) => {
    if (!count[song]) {
      count[song] = 0
    }
      return <p>Number of plays: {count[song]}</p>
  }

  export default NumberOfPlays;