import React, { Component } from 'react';
import Intro from './Intro';
import Tour from './Tour';
import logo from './logo.jpg';
import './App.css';

class App extends Component {

  constructor(props) {
    super(props);
    
    this.state = {
      introActive: true,
      tourActive: false
    }

  }

  render() {
    return (
      <div>
        <img className="w-100" src={logo} />
        <Intro
          enabled={this.state.introActive}
          hideIntro={() => {
            this.setState({ introActive: false })
            this.setState({ tourActive: true });
          }} />
        <Tour enabled={this.state.tourActive} />
      </div>
    );
  }
}

export default App;
