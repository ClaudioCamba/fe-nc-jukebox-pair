const TrackPreview = ({currentIndex, allSongs}) => {
    console.log(currentIndex)
    return <iframe 
              frameBorder = '0'
              src={allSongs[currentIndex].previewURL}
              title="Track preview" > 
          </iframe> 
  }; 

  export default TrackPreview;