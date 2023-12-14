import React, { RefObject } from 'react';

interface ProgressBarProps {
 progressBarRef: RefObject<HTMLInputElement>;
 audioRef: RefObject<HTMLAudioElement>;
 timeProgress: number;
}

const ProgressBar: React.FC<ProgressBarProps> = ({
 progressBarRef,
 audioRef,
 timeProgress,
}: ProgressBarProps) => {

const handleProgressChange = () => {
 if (audioRef.current && progressBarRef.current) {
   audioRef.current.currentTime = Number(progressBarRef.current.value);
 }
};

 const formatTime = (time: number) => {
   if (time && !isNaN(time)) {
     const minutes = Math.floor(time / 60);
     const formatMinutes =
       minutes < 10 ? `0${minutes}` : `${minutes}`;
     const seconds = Math.floor(time % 60);
     const formatSeconds =
       seconds < 10 ? `0${seconds}` : `${seconds}`;
     return `${formatMinutes}:${formatSeconds}`;
   }
   return '00:00';
 };

 return (
   <div className="progress-bar-wrapper" style={{ display: 'flex', alignItems: 'center' }}>
     <input
       type="range"
       ref={progressBarRef}
       defaultValue="0"
       onChange={handleProgressChange}
       className="progress-bar"
     />
     <span className="time current" style={{ marginLeft: '10px', color: '#dbdcdd' }}>{formatTime(timeProgress)}</span>
   </div>
 );
};

export default ProgressBar;
