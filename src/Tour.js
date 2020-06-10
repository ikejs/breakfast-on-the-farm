import React, { Component } from 'react';
import ReactAudioPlayer from 'react-audio-player';
import './App.css';
import sound2 from'./audio/2.mp3';
import sound3 from'./audio/3.mp3';
import sound4 from'./audio/4.mp3';
import sound5 from'./audio/5.mp3';
import sound6 from'./audio/6.mp3';
import sound7 from'./audio/7.mp3';


class Tour extends Component {
  render() {
    if (this.props.enabled) {
      return (
        <div className="col-md-12 mt-4">
          <div className="rounded p-3 mb-4 transparent text-center text-white">
            <h3><strong>Station 2</strong></h3>
            <hr />
            <ReactAudioPlayer controls src={sound2} />
          </div>
          <div className="rounded p-3 mb-4 transparent text-center text-white">
            <h3><strong>Station 3</strong></h3>
            <hr />
            <ReactAudioPlayer controls src={sound3} />
          </div>
          <div className="rounded p-3 mb-4 transparent text-center text-white">
            <h3><strong>Station 4</strong></h3>
            <hr />
            <ReactAudioPlayer controls src={sound4} />
          </div>
          <div className="rounded p-3 mb-4 transparent text-center text-white">
            <h3><strong>Station 5</strong></h3>
            <hr />
            <ReactAudioPlayer controls src={sound5} />
          </div>
          <div className="rounded p-3 mb-4 transparent text-center text-white">
            <h3><strong>Station 6</strong></h3>
            <hr />
            <ReactAudioPlayer controls src={sound6} />
          </div>
          <div className="rounded p-3 mb-4 transparent text-center text-white">
            <h3><strong>Station 7</strong></h3>
            <hr />
            <ReactAudioPlayer controls src={sound7} />
          </div>
        </div>
      )
    } else {
      return null;
    }
  }
}


export default Tour;