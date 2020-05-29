import React, { Component } from 'react';
import Intro from './Intro';
import Tour from './Tour';

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
