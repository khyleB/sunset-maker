import React from 'react';
import { Component } from "react";
import audio from './sounds/future-sound.mp3'


class Music extends Component {

    state = {
        bgMusic: new Audio(audio),
        isPlaying: false,
    };

    playPause = () => {

        let isPlaying = this.state.isPlaying;

        if (isPlaying) {
            this.state.bgMusic.pause();
        } else {
            this.state.bgMusic.play();
        }
        this.setState({ isPlaying: !isPlaying });
    }

    render() {
        return (
        <div>

            <label htmlFor="background-music">
                Background Music: <input type="checkbox" name="background-music" onChange={this.playPause}/>
            </label>
        </div>
        )
    } 
}

export default Music;