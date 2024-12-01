import React from 'react';

function VideoCallEmbed() {
    return (
        <iframe
            src="https://video-chamada-r6rl.onrender.com/" 
            width="100%" 
            height="100%" 
            title="Video Call"
            frameBorder="0" 
            allow="camera; microphone; fullscreen" 
            style={{
                position: 'fixed', 
                top: 0,
                left: 0,
                zIndex: 9999, 
                width: '100vw', 
                height: '100vh', 
            }}
        ></iframe>
    );
}

export default VideoCallEmbed;
