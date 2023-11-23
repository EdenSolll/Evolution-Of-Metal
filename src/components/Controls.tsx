import { useState, useEffect, useCallback } from 'react';

import {
  IoPlayBackSharp,
  IoPlayForwardSharp,
  IoPlaySkipBackSharp,
  IoPlaySkipForwardSharp,
  IoPlaySharp,
  IoPauseSharp,
} from 'react-icons/io5';

const playAnimationRef = useRef();

const repeat = () => {
  console.log('run');

const repeat = useCallback(() => {
  console.log('run');

  playAnimationRef.current = requestAnimationFrame(repeat);
}, []);


const togglePlayPause = () => {
  setIsPlaying((prev) => !prev);
};

const Controls = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  useEffect(() => {
    if (isPlaying) {
      audioRef.current.play();
    } else{
      audioref.current.pause();
    }
  }, [isPlaying, audioRef]);
  return (
    <div className="controls-wrapper">
      <div className="controls">
        <button>
          <IoPlaySkipBackSharp />
        </button>
        <button>
          <IoPlayBackSharp />
        </button>
        <button onClick={togglePlayPause}>
          {isPlaying ? <IoPauseSharp /> : <IoPlaySharp />}
        </button>
        <button>
          <IoPlayForwardSharp />
        </button>
        <button>
          <IoPlaySkipForwardSharp />
        </button>
      </div>
    </div>
  );
};

export default Controls;
