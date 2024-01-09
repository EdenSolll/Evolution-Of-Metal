import React, {
    useRef,
    useState,
    createContext,
    Dispatch,
    SetStateAction,
} from 'react'
import Genres from '../data/genres'
import DisplayTrack from './DisplayTrack'
import Controls from './Controls'
import ProgressBar from './ProgressBar'

export interface AudioContextProps {
    trackIndex: number
    setTrackIndex: Dispatch<SetStateAction<number>>
    currentTrack: Song
    setCurrentTrack: Dispatch<SetStateAction<Song>>
    setSong: (songIndex: number) => void
}

interface Song {
    id: string
    year: number
    title: string
    src: string
    artist: string
}

const AudioContext = createContext<AudioContextProps | undefined>(undefined)

const AudioPlayer = () => {
    // states
    const [trackIndex, setTrackIndex] = useState(0)
    const [currentTrack, setCurrentTrack] = useState(Genres[0].songs[0])
    const [timeProgress, setTimeProgress] = useState(0)
    const [duration, setDuration] = useState(0)

    const audioRef = useRef<HTMLAudioElement>(
        null
    ) as React.MutableRefObject<HTMLAudioElement>
    const progressBarRef = useRef<HTMLInputElement>(
        null
    ) as React.MutableRefObject<HTMLInputElement>

    const setSong = (songIndex: number = 0) => {
        setTrackIndex(songIndex)
        setCurrentTrack(Genres[0].songs[songIndex])
    }

    return (
        <AudioContext.Provider
            value={{
                trackIndex,
                setTrackIndex,
                currentTrack,
                setCurrentTrack,
                setSong,
            }}
        >
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
                            audioRef={
                                audioRef as React.MutableRefObject<HTMLAudioElement>
                            }
                            progressBarRef={progressBarRef}
                            duration={duration}
                            setTimeProgress={setTimeProgress}
                        />
                        <ProgressBar
                            {...{
                                progressBarRef,
                                audioRef,
                                timeProgress,
                                duration,
                            }}
                        />
                        <DisplayTrack
                            currentTrack={currentTrack}
                            audioRef={audioRef}
                            setDuration={setDuration}
                            progressBarRef={progressBarRef}
                        />
                    </div>
                </div>
            </div>
        </AudioContext.Provider>
    )
}

export { AudioContext }
export default AudioPlayer
