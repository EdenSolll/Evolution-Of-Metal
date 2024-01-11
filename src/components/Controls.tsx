import { useState, useEffect, useRef, useCallback } from 'react'
import {
    IoPlayForwardSharp,
    IoPlaySharp,
    IoPauseSharp,
    IoVolumeHigh,
    IoVolumeOff,
    IoVolumeLow,
} from 'react-icons/io5'

interface ControlsProps {
   audioRef: React.MutableRefObject<HTMLAudioElement>;
   progressBarRef: React.MutableRefObject<HTMLInputElement>;
   duration: number;
   setTimeProgress: React.Dispatch<React.SetStateAction<number>>;
   handleNext: () => void;
   playSong: () => void;
   pauseSong: () => void;
   isPlaying: boolean,
}

const Controls: React.FC<ControlsProps> = ({
   audioRef,
   progressBarRef,
   duration,
   setTimeProgress,
   handleNext,
   playSong,
   pauseSong,
   isPlaying,
}) => {
    const [volume, setVolume] = useState(60)
    const [muteVolume, setMuteVolume] = useState(false)
    const [showVolumeBar, setShowVolumeBar] = useState(false)

    const playAnimationRef = useRef<number | undefined>()
    const repeat = useCallback(() => {
        const currentTime = audioRef.current?.currentTime ?? 0
        setTimeProgress(currentTime)
        if (progressBarRef.current) {
            progressBarRef.current.value = currentTime.toString()
            progressBarRef.current.style.setProperty(
                '--range-progress',
                `${(Number(progressBarRef.current.value) / duration) * 100}%`
            )
        }
        playAnimationRef.current = requestAnimationFrame(repeat)
    }, [audioRef, duration, progressBarRef, setTimeProgress])

    useEffect(() => {
        if (audioRef.current) {
            audioRef.current.volume = volume / 100
            audioRef.current.muted = muteVolume
        }
    }, [volume, audioRef, muteVolume])

const handleTogglePlay = () => {
 if (isPlaying) {
  pauseSong();

 } else {
  playSong();
 }
};

    return (
        <div
            className="controls-wrapper"
            style={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
            }}
        >
            <div className="controls" style={{ display: 'flex', gap: '10px' }}>
                <button onClick={handleTogglePlay} style={{ color: '#dbdcdd' }}>
                    {isPlaying ? <IoPauseSharp /> : <IoPlaySharp />}
                </button>
                <button onClick={handleNext} style={{ color: '#dbdcdd' }}>
                    <IoPlayForwardSharp />
                </button>
            </div>
            <div
                className="volume"
                style={{ position: 'relative' }}
                onMouseEnter={() => setShowVolumeBar(true)}
                onMouseLeave={() => setShowVolumeBar(false)}
            >
                <button
                    onClick={() => setMuteVolume((prev) => !prev)}
                    style={{ color: '#dbdcdd' }}
                >
                    {muteVolume || volume < 5 ? (
                        <IoVolumeOff />
                    ) : volume < 40 ? (
                        <IoVolumeLow />
                    ) : (
                        <IoVolumeHigh />
                    )}
                </button>
                {showVolumeBar && (
                    <input
                        type="range"
                        min={0}
                        max={100}
                        value={volume}
                        onChange={(e) =>
                            setVolume(parseInt(e.target.value, 10))
                        }
                        style={{
                            position: 'absolute',
                            height: 80,
                            top: -115,
                            left: '50%',
                            transform: 'translateX(-50%) rotate(270deg)',
                        }}
                    />
                )}
            </div>
        </div>
    )
}

export default Controls
