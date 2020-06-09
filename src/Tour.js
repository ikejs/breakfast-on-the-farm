import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlay, faPause } from '@fortawesome/free-solid-svg-icons';
import ReactAudioPlayer from 'react-audio-player';
import sound2 from'./audio/2.mp3';
import sound3 from'./audio/3.mp3';
import sound4 from'./audio/4.mp3';
import sound5 from'./audio/5.mp3';
import sound6 from'./audio/6.mp3';
import sound7 from'./audio/7.mp3';

const stopAllAudio = () => {
  document.addEventListener('play', function(e) {
    const audios = document.getElementsByTagName('audio');
    for(let i = 0, len = audios.length; i < len;i++){
        if(audios[i] !== e.target){
            audios[i].pause();
            audios[i].currentTime = 0;
        }
    }
  }, true);
}

class Tour extends Component {

  constructor(props) {
    super(props);

    this.state = {
      two: {
        doneLoading: false,
        playing: false
      },
      three: {
        doneLoading: false,
        playing: false
      },
      four: {
        doneLoading: false,
        playing: false
      },
      five: {
        doneLoading: false,
        playing: false
      },
      six: {
        doneLoading: false,
        playing: false
      },
      seven: {
        doneLoading: false,
        playing: false
      }
    }
  }

  render() {
    if (this.props.enabled) {
      return (
        <div className="col-md-12 mt-4">
          <button 
            className="btn btn-block p-3 btn-success"
            onClick={() => {
              if(this.state.two.playing) {
                document.getElementById(2).pause();
              } else {
                stopAllAudio();
                document.getElementById(2).load();
                document.getElementById(3).load();
                document.getElementById(4).load();
                document.getElementById(5).load();
                document.getElementById(6).load();
                document.getElementById(7).load();
                document.getElementById(2).play();
              }
            }}
          ><h3><strong><FontAwesomeIcon icon={this.state.two.playing ? faPause : faPlay} /> STATION 2</strong></h3></button>
          <button className="btn btn-block p-3 btn-success"
            onClick={() => {
              if(this.state.three.playing) {
                document.getElementById(3).pause();
              } else {
                stopAllAudio();
                document.getElementById(3).play();
              }
            }}
          ><h3><strong><FontAwesomeIcon icon={this.state.three.playing ? faPause : faPlay} /> STATION 3</strong></h3></button>
          <button className="btn btn-block p-3 btn-success"
            onClick={() => {
              if(this.state.four.playing) {
                document.getElementById(4).pause();
              } else {
                stopAllAudio();
                document.getElementById(4).play();
              }
            }}
          ><h3><strong><FontAwesomeIcon icon={this.state.four.playing ? faPause : faPlay} /> STATION 4</strong></h3></button>
          <button className="btn btn-block p-3 btn-success"
            onClick={() => {
              if(this.state.five.playing) {
                document.getElementById(5).pause();
              } else {
                stopAllAudio();
                document.getElementById(5).play();
              }
            }}
          ><h3><strong><FontAwesomeIcon icon={this.state.five.playing ? faPause : faPlay} /> STATION 5</strong></h3></button>
          <button className="btn btn-block p-3 btn-success"
            onClick={() => {
              if(this.state.six.playing) {
                document.getElementById(6).pause();
              } else {
                stopAllAudio();
                document.getElementById(6).play();
              }
            }}
          ><h3><strong><FontAwesomeIcon icon={this.state.six.playing ? faPause : faPlay} /> STATION 6</strong></h3></button>
          <button className="btn btn-block p-3 btn-success"
            onClick={() => {
              if(this.state.seven.playing) {
                document.getElementById(7).pause();
              } else {
                stopAllAudio();
                document.getElementById(7).play();
              }
            }}
          ><h3><strong><FontAwesomeIcon icon={this.state.seven.playing ? faPause : faPlay} /> STATION 7</strong></h3></button>




<ReactAudioPlayer
            id="2"
            src={sound2}
            onPlay={() => {
              this.setState({ two: { playing: true } })
            }}
            onPause={() => {
              this.setState({ two: { playing: false } })
            }}
            onCanPlayThrough={() => {
              this.setState({ two: { doneLoading: true } })
            }}
          />
          <ReactAudioPlayer
            id="3"
            src={sound3}
            onPlay={() => {
              this.setState({ three: { playing: true } })
            }}
            onPause={() => {
              this.setState({ three: { playing: false } })
            }}
            onCanPlayThrough={() => {
              this.setState({ three: { doneLoading: true } })
            }}
          />
          <ReactAudioPlayer
            id="4"
            src={sound4}
            onPlay={() => {
              this.setState({ four: { playing: true } })
            }}
            onPause={() => {
              this.setState({ four: { playing: false } })
            }}
            onCanPlayThrough={() => {
              this.setState({ four: { doneLoading: true } })
            }}
          />
          <ReactAudioPlayer
            id="5"
            src={sound5}
            onPlay={() => {
              this.setState({ five: { playing: true } })
            }}
            onPause={() => {
              this.setState({ five: { playing: false } })
            }}
            onCanPlayThrough={() => {
              this.setState({ five: { doneLoading: true } })
            }}
          />
          <ReactAudioPlayer
            id="6"
            src={sound6}
            onPlay={() => {
              this.setState({ six: { playing: true } })
            }}
            onPause={() => {
              this.setState({ six: { playing: false } })
            }}
            onCanPlayThrough={() => {
              this.setState({ six: { doneLoading: true } })
            }}
          />
          <ReactAudioPlayer
            id="7"
            src={sound7}
            onPlay={() => {
              this.setState({ seven: { playing: true } })
            }}
            onPause={() => {
              this.setState({ seven: { playing: false } })
            }}
            onCanPlayThrough={() => {
              this.setState({ seven: { doneLoading: true } })
            }}
          />
        </div>
      )
    } else {
      return null;
    }
  }
}


export default Tour;