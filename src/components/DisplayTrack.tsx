const DisplayTrack = ({ currentTrack, audioRef, setDuration, progressBarRef }) => {
  const onLoadedMetadata = () => {
    const seconds = audioRef.current.duration;
    setDuration(seconds);
    progressBarRef.current.max = seconds;
  };


  return (
    <div>
      <audio
        src={currentTrack.src}
        ref={audioRef}
        onLoadedMetadata={onLoadedMetadata}
      />
      <audio src={currentTrack.src} ref={audioRef} />
    </div>
  );
};
export default DisplayTrack;
