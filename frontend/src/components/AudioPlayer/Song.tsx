import React from "react";

const Song = ({ currentSong }) => {
    return (
        <div className="song-container">
            <h3>{currentSong.name}  {currentSong.artist}</h3>
        </div>
    );
};

export default Song;
