import React, { useContext } from 'react'
import { AudioContext } from './AudioPlayer'

interface DisplayTrackProps {
    currentTrack: {
        id: string
        year: number
        title: string
        src: string
        artist: string
    }
    audioRef: React.RefObject<HTMLAudioElement>
    setDuration: React.Dispatch<React.SetStateAction<number>>
    progressBarRef: React.RefObject<HTMLInputElement>
}

const DisplayTrack: React.FC<DisplayTrackProps> = ({
    currentTrack,
    audioRef,
    setDuration,
    progressBarRef,
}) => {
    const audioContext = useContext(AudioContext)

    if (!audioContext) {
        throw new Error('Controls must be used within an AudioContext Provider')
    }

    const { setSong } = audioContext

    const onLoadedMetadata = () => {
        const seconds = audioRef.current?.duration
        if (seconds !== undefined) {
            setDuration(seconds)
            if (progressBarRef.current) {
                progressBarRef.current.max = seconds.toString()
            }
        }
    }

    return (
        <div>
            <audio
                src={currentTrack.src}
                ref={audioRef}
                onLoadedMetadata={onLoadedMetadata}
                onEnded={() => setSong(0)}
            />
            <div className="audio-info">
                <div className="text">
                    <p className="title" style={{ color: '#feff9d' }}>
                        {currentTrack.title} - {currentTrack.artist}
                    </p>
                </div>
            </div>
        </div>
    )
}

export default DisplayTrack
