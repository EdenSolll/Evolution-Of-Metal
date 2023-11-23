import { useState, useEffect, useRef, useCallback } from 'react';

import {
  IoPlayForwardSharp,
  IoPlaySharp,
  IoPauseSharp,
} from 'react-icons/io5';

import {
  IoMdVolumeHigh,
  IoMdVolumeOff,
  IoMdVolumeLow,
} from 'react-icons/io';

const Controls = ({
  audioRef,
  progressBarRef,
  duration,
  setTimeProgress,
  tracks,
  trackIndex,
  setTrackIndex,
  setCurrentTrack,
  handleNext,
}: {
  audioRef: React.MutableRefObject<HTMLAudioElement>;
  progressBarRef: React.MutableRefObject<HTMLInputElement>;
  duration: number;
  setTimeProgress: React.Dispatch<React.SetStateAction<number>>;
  tracks: Array<any>; // Change to your actual type
  trackIndex: number;
  setTrackIndex: React.Dispatch<React.SetStateAction<number>>;
  setCurrentTrack: React.Dispatch<React.SetStateAction<any>>; // Change to your actual type
  handleNext: () => void;
}) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [volume, setVolume] = useState(60);
  const [muteVolume, setMuteVolume] = useState(false);
  const [showVolumeBar, setShowVolumeBar] = useState(false);

  const togglePlayPause = () => {
    setIsPlaying((prev) => !prev);
  };

  const playAnimationRef = useRef();

  const repeat = useCallback(() => {
    const currentTime = audioRef.current?.currentTime ?? 0;
    setTimeProgress(currentTime);
    progressBarRef.current.value = currentTime;
    progressBarRef.current.style.setProperty(
      '--range-progress',
      `${(progressBarRef.current.value / duration) * 100}%`
    );

    playAnimationRef.current = requestAnimationFrame(repeat);
  }, [audioRef, duration, progressBarRef, setTimeProgress]);  useEffect(() => {
    if (isPlaying) {
      audioRef.current?.play();
    } else {
      audioRef.current?.pause();
    }
    playAnimationRef.current = requestAnimationFrame(repeat);
  }, [isPlaying, audioRef, repeat]);

  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.volume = volume / 100;
      audioRef.current.muted = muteVolume;
    }
  }, [volume, audioRef, muteVolume]);

  return (
    <div className="controls-wrapper" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
      <div className="controls" style={{ display: 'flex', gap: '10px' }}>
        <button onClick={togglePlayPause}>
          {isPlaying ? <IoPauseSharp /> : <IoPlaySharp />}
        </button>
        <button onClick={handleNext}>
          <IoPlayForwardSharp />
        </button>
      </div>
      <div className="volume" style={{ position: 'relative' }} onMouseEnter={() => setShowVolumeBar(true)} onMouseLeave={() => setShowVolumeBar(false)}>
        <button onClick={() => setMuteVolume((prev) => !prev)}>
          {muteVolume || volume < 5 ? (
            <IoMdVolumeOff />
          ) : volume < 40 ? (
            <IoMdVolumeLow />
          ) : (
            <IoMdVolumeHigh />
          )}
        </button>
        {showVolumeBar && (
          <input
            type="range"
            min={0}
            max={100}
            value={volume}
            onChange={(e) => setVolume(parseInt(e.target.value, 10))}
            style={{
              position: 'absolute',
              top: 0,
              left: '50%',
              transform: 'translateX(-50%) rotate(270deg)',
              background: `linear-gradient(to bottom, #f50 ${volume}%, #ccc ${volume}%)`,
            }}
          />
        )}
      </div>
    </div>
  );
};

export default Controls;
