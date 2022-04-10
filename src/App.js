import './App.css';
import React, { useState } from 'react'
import bravo from './assets/bravo.mp4'
import VideoPlayer from 'react-video-js-player'


function intiCount() {
    return 10;
}
function App() {
    const videoSrc = bravo;
    const poster = 'https://youtu.be/FjpGJaOlxZ0'
    let [count, countState] = useState(() => intiCount())

    // function incrementCount() {
    //     countState(privCount => privCount + 1)
    // }

    function decrementCount() {
        if(count > 0){
            countState(privCount => privCount - 1)
        }
    }
    function reset() {
        countState(count = 10)
    }
    let video;
    if (count === 0) {
        video = <div className="video">
                <VideoPlayer
                    src = {videoSrc}
                    poster = {poster}
                    width = "500"
                    height = "420"
                    playbackRates ={[0.5, 1, 1.50, 1.75, 2]}
                />
                <button className="video__reset-button button button--hyperion"onClick={reset}><span><span>Reset</span></span></button>
            </div>
    }
    return (
        <div className="container">
            <h2>Decrease Number to Zero</h2>
            <div className="center">
                {/* <button onClick={incrementCount} className="center__decrement-button">+</button> */}
                <span className="center__count">{count}</span>
                <button onClick={decrementCount} className="center__decrement-button">-</button>
            </div>
            {video}
        </div>
    );
}

export default App;