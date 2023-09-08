import React from 'react';
import { Component } from "react";
import audio from './sounds/future-sound.mp3'


class Music extends Component {

    constructor(props) {
        super(props);

        this.state = {
            play: true
        };

        this.audio = new Audio(audio);
        this.togglePlay = this.togglePlay.bind(this);
    }

    togglePlay() {
        this.setState({
            play: !this.state.play
        });

        this.state.play ? this.audio.play() : this.audio.pause();
        this.audio.loop = true;
        this.audio.volume = 0.5;
    }
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    /*state = {
        bgMusic: new Audio(audio),
        isPlaying: false,
    };

    playPause = () => {

        let isPlaying = this.state.isPlaying;

        if (isPlaying) {
            this.state.bgMusic.pause();
        } else {
            this.state.bgMusic.play();
            this.state.bgMusic.loop();
        }
        this.setState({ isPlaying: !isPlaying });
    }*/

    render() {
        return (
        <div>

            <label htmlFor="background-music">
                Background Music: <input type="checkbox" name="background-music" onChange={this.togglePlay}/>
            </label>
        </div>
        )
    } 
}

export default Music;