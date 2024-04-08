import { useRef, useState, useEffect } from 'react'
import DisplayTrack from './DisplayTrack'
import Controls from './Controls'
import ProgressBar from './ProgressBar'
import { useTrackState } from './TrackContext'
import { getUrl } from '../data/s3.tsx'

const AudioPlayer = () => {
    const {
        currentTrack,
        setTrack,
        trackIndex,
        isPlaying,
        playSong,
        pauseSong,
        audioRef,
        songs,
    } = useTrackState()
    const [timeProgress, setTimeProgress] = useState(0)
    const [duration, setDuration] = useState(0)

    const progressBarRef = useRef<HTMLInputElement>(
        null
    ) as React.MutableRefObject<HTMLInputElement>

useEffect(() => {
    if (audioRef.current) {
        (async () => {
            const url = audioRef.current.src;
            const filename = url.split('/').pop();
            if (filename) {
                const songUrl = await getUrl(filename);
                if (songUrl) {
                    audioRef.current.src = songUrl;
                    audioRef.current.load();
                    audioRef.current.addEventListener('loadedmetadata', () => {
                        setDuration(audioRef.current.duration);
                    });
                    if (isPlaying) {
                        audioRef.current.play().catch(console.error);
                    }
                }
            }
        })();
    }
}, [currentTrack, isPlaying]);

    const handleNext = () => {
        const nextTrackIndex = (trackIndex + 1) % songs.length
        const nextTrack = songs[nextTrackIndex]
        setTrack(nextTrackIndex, nextTrack)
    }

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

export default AudioPlayer
