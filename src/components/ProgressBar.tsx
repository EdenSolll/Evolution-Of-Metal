import React, { useEffect, RefObject } from 'react'

interface ProgressBarProps {
  progressBarRef: RefObject<HTMLInputElement>
  audioRef: RefObject<HTMLAudioElement>
  timeProgress: number
  setTimeProgress: React.Dispatch<React.SetStateAction<number>>
  duration: number
}

const ProgressBar: React.FC<ProgressBarProps> = ({
  progressBarRef,
  audioRef,
  timeProgress,
  setTimeProgress,
  duration,
}: ProgressBarProps) => {
  const handleProgressChange = () => {
      if (audioRef.current && progressBarRef.current) {
          audioRef.current.currentTime = Number(progressBarRef.current.value)
      }
  }

  const formatTime = (time: number) => {
      if (time && !isNaN(time)) {
          const minutes = Math.floor(time / 60)
          const formatMinutes = minutes < 10 ? `0${minutes}` : `${minutes}`
          const seconds = Math.floor(time % 60)
          const formatSeconds = seconds < 10 ? `0${seconds}` : `${seconds}`
          return `${formatMinutes}:${formatSeconds}`
      }
      return '00:00'
  }

useEffect(() => {
 if (audioRef.current) {
 let currentAudioRef = audioRef.current;
 if (currentAudioRef) {
 const timeUpdateHandler = () => {
  setTimeProgress(currentAudioRef.currentTime);
  if (progressBarRef.current) {
   progressBarRef.current.value = (currentAudioRef.currentTime / duration * 100).toString();
  }
 };
 currentAudioRef.addEventListener('timeupdate', timeUpdateHandler);
 return () => {
  currentAudioRef.removeEventListener('timeupdate', timeUpdateHandler);
 };
 }
 }
}, [audioRef, setTimeProgress, duration]);

  return (
      <div
          className="progress-bar-wrapper"
          style={{ display: 'flex', alignItems: 'center' }}
      >
          <input
              type="range"
              ref={progressBarRef}
              min="0"
              max={duration}
              onChange={handleProgressChange}
              className="progress-bar"
          />
          <span
              className="time current"
              style={{ marginLeft: '10px', color: '#dbdcdd' }}
          >
              {formatTime(timeProgress)}
          </span>
      </div>
  )
}

export default ProgressBar
