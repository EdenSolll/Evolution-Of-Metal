import { useRef, useState } from 'react';
import { tracks } from '../data/tracks';
import DisplayTrack from './DisplayTrack';
import Controls from './Controls';
import ProgressBar from './ProgressBar';

const AudioPlayer = () => {
  // states
  const [trackIndex, setTrackIndex] = useState(0);
  const [currentTrack, setCurrentTrack] = useState(
    tracks[trackIndex]
  );
  const [timeProgress, setTimeProgress] = useState(0);
  const [duration, setDuration] = useState(0);

  const audioRef = useRef<HTMLAudioElement>(null) as React.MutableRefObject<HTMLAudioElement>;
  const progressBarRef = useRef<HTMLInputElement>(null) as React.MutableRefObject<HTMLInputElement>;

  const handleNext = () => {
    if (trackIndex >= tracks.length - 1) {
      setTrackIndex(0);
      setCurrentTrack(tracks[0]);
    } else {
      setTrackIndex((prev) => prev + 1);
      setCurrentTrack(tracks[trackIndex + 1]);
    }
  };

  return (
    <>
      <div
        className="audio-player-wrapper"
        style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'left',
        }}
      >
        <div className="audio player" style={{ display: 'flex', gap: '10px' }}>
          <div className="inner" style={{ display: 'flex', flexDirection: 'row', alignItems: 'left', gap: '10px' }}>
                <Controls
                  audioRef={audioRef as React.MutableRefObject<HTMLAudioElement>}
                  progressBarRef={progressBarRef}
                  duration={duration}
                  setTimeProgress={setTimeProgress}
                  handleNext={handleNext}
                />
            <ProgressBar
              {...{ progressBarRef, audioRef, timeProgress, duration }}
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
    </>
  );
};

export default AudioPlayer;
