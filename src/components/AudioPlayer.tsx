import { useRef, useState, useEffect } from 'react';
import Genres from '../data/genres';
import DisplayTrack from './DisplayTrack';
import Controls from './Controls';
import ProgressBar from './ProgressBar';
import { useTrackState } from './TrackContext';

const AudioPlayer = () => {
   const { currentTrack, setTrack, trackIndex, isPlaying, playSong, pauseSong, audioRef } = useTrackState();
   const [timeProgress, setTimeProgress] = useState(0);
   const [duration, setDuration] = useState(0);

   const progressBarRef = useRef<HTMLInputElement>(null) as React.MutableRefObject<HTMLInputElement>;

useEffect(() => {
 if (audioRef.current) {
 audioRef.current.src = '';
 audioRef.current.src = currentTrack.src;
 audioRef.current.load();

 audioRef.current.addEventListener('loadedmetadata', () => {
  setDuration(audioRef.current.duration);
 });

 if (isPlaying) {
  audioRef.current.play().catch(console.error);
 }
 }
}, [currentTrack, isPlaying]);

const handleNext = () => {
 const nextTrackIndex = (trackIndex + 1) % Genres[0].songs.length;
 const nextTrack = Genres[0].songs[nextTrackIndex];
 setTrack(nextTrackIndex, nextTrack);
};

   return (
       <div
           className="audio-player-wrapper"
           style={{
               display: 'flex',
               flexDirection: 'column',
               alignItems: 'left',
           }}
       >
           <div
               className="audio player"
               style={{ display: 'flex', gap: '10px' }}
           >
               <div
                  className="inner"
                  style={{
                      display: 'flex',
                      flexDirection: 'row',
                      alignItems: 'left',
                      gap: '10px',
                  }}
               >
                  <Controls
                      audioRef={audioRef}
                      progressBarRef={progressBarRef}
                      duration={duration}
                      setTimeProgress={setTimeProgress}
                      handleNext={handleNext}
                      playSong={playSong}
                      pauseSong={pauseSong}
                      isPlaying={isPlaying}
                  />
                  <ProgressBar
                      {...{
                          progressBarRef,
                          audioRef,
                          timeProgress,
                          setTimeProgress,
                          duration,
                      }}
                  />
                  <DisplayTrack
                      {...{
                          currentTrack,
                          audioRef,
                          setDuration,
                          progressBarRef,
                          handleNext,
                      }}
                  />
               </div>
           </div>
       </div>
   )
}

export default AudioPlayer;
