import React, { useState, useRef } from "react";
import VolumeUpIcon from '@mui/icons-material/VolumeUp';
import "./AudioPlayer.css"; // Import CSS file

const AudioPlayer = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef(null);

  const togglePlayPause = () => {
    if (isPlaying) {
      audioRef.current.pause();
    } else {
      audioRef.current.play();
    }
    setIsPlaying(!isPlaying);
  };

  return (
    <div className="audio-player-container">
      <audio ref={audioRef} src="https://res.cloudinary.com/dorxspa9g/video/upload/v1738115158/wzdyegouahoyqwfg391r.mp3" />
      <button onClick={togglePlayPause} className="play-pause-button">
        {isPlaying ? "Pause" : "Play"}  
      </button>
    </div>
  );
};

export default AudioPlayer;
