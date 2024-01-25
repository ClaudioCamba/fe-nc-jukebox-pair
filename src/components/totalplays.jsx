const TotalPlays = ({ count }) => {
    const valueArray = (Object.values(count).reduce((accumulator, currentValue) => accumulator + currentValue,
      0, ));
    return <p>Total Plays: {valueArray}</p>
  }

  export default TotalPlays;