import React from 'react';

import ReactPlayer from 'react-player';

import styles from './VideoPlayer.css';


const VideoPlayer = ({ src }) => {
    return (
        <div className={styles['player-wrapper']}>
            <ReactPlayer
                controls={true}
                url={src}
                className={styles['react-player']}
                config={{ playerVars: { showinfo: 1 } }}
                width="100%"
                height="100%"
            />
        </div>
    );
};

export default VideoPlayer;