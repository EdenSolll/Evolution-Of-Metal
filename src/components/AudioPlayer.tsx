import { useRef, useState } from 'react';
import { tracks } from '../data/tracks';
import Controls from './Controls';
import ProgressBar from './ProgressBar';

const audioRef = useRef();

const AudioPlayer = () => {
  const [currentTrack, setCurrentTrack] = useState(tracks[0]);
  const [timeProgress, setTimeProgress] = useState(0);
  const [duration, setDuration] = useState(0);

return (
  <div className="audio-player">
    <div className="inner">
      <DisplayTrack {...{ currentTrack, audioRef, setDuration, progressBarRef }}/>
          <Controls {...{ audioRef }} />
      <ProgressBar {...{ progressBarRef, audioRef, timeProgress, duration }}/>
      </div>
  </div>
);
};
export default AudioPlayer;
