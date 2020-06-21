import React, { Component } from 'react';
import ReactAudioPlayer from 'react-audio-player';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import './App.css';
import sound2 from'./audio/2.mp3';
import sound3 from'./audio/3.mp3';
import sound4 from'./audio/4.mp3';
import sound5 from'./audio/5.mp3';
import sound6 from'./audio/6.mp3';


class Tour extends Component {
  render() {
    if (this.props.enabled) {
      return (
        <div className="col-md-12 mt-4">
          <div className="rounded p-3 mb-4 transparent text-center text-white">
            <h3><strong>Station 2</strong> | Barn</h3>
            <hr />
            <ReactAudioPlayer controls src={sound2} title="Vir-Clar Farms Tour" />
          </div>
          <div className="rounded p-3 mb-4 transparent text-center text-white">
            <h3><strong>Station 3</strong> | Calves</h3>
            <hr />
            <ReactAudioPlayer controls src={sound3} title="Vir-Clar Farms Tour" />
          </div>
          <div className="rounded p-3 mb-4 transparent text-center text-white">
            <h3><strong>Station 4</strong> | Digesters</h3>
            <hr />
            <ReactAudioPlayer controls src={sound4} title="Vir-Clar Farms Tour" />
          </div>
          <div className="rounded p-3 mb-4 transparent text-center text-white">
            <h3><strong>Station 5</strong> | Equipment</h3>
            <hr />
            <ReactAudioPlayer controls src={sound5} title="Vir-Clar Farms Tour" />
          </div>
          <div className="rounded p-3 mb-4 transparent text-center text-white">
            <h3><strong>Station 6</strong> | Feed &amp; Grain</h3>
            <hr />
            <ReactAudioPlayer controls src={sound6} title="Vir-Clar Farms Tour" />
          </div>
          <div className="col-md-12 mb-4">
            <button className="btn btn-lg mt-4 p-3 mb-4 btn-block btn-secondary" onClick={() => {
              this.props.hideTour();
            }}>Continue to Parlor Tour <FontAwesomeIcon icon={faArrowRight} /></button>
          </div>
        </div>
      )
    } else {
      return null;
    }
  }
}


export default Tour;