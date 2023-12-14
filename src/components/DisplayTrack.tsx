import React, { RefObject } from 'react';

interface DisplayTrackProps {
 currentTrack: {
   src: string;
   title: string;
   author: string;
 };
 audioRef: RefObject<HTMLAudioElement>;
 setDuration: (seconds: number) => void;
 progressBarRef: RefObject<HTMLInputElement>;
 handleNext: () => void;
}

const DisplayTrack: React.FC<DisplayTrackProps> = ({
 currentTrack,
 audioRef,
 setDuration,
 progressBarRef,
 handleNext,
}) => {
  const onLoadedMetadata = () => {
   const seconds = audioRef.current?.duration;
   if (seconds !== undefined) {
    setDuration(seconds);
    if (progressBarRef.current) {
      progressBarRef.current.max = seconds.toString();
    }
   }
  };

  return (
    <div>
      <audio
        src={currentTrack.src}
        ref={audioRef}
        onLoadedMetadata={onLoadedMetadata}
        onEnded={handleNext}
      />
      <div className="audio-info">
        <div className="text">
          <p className="title" style={{ color: '#feff9d' }}>{currentTrack.title} - {currentTrack.author}</p>
        </div>
      </div>
    </div>
  );
};
export default DisplayTrack;
