import React, { Component } from 'react';

class Outro extends Component {
  render() {
    if (this.props.enabled) {
      return (
        <div>
          <iframe 
            title="Outro Video" 
            className="w-100 pb-2"
            style={{backgroundColor: '#5180AD'}} 
            height="219" 
            src="https://www.youtube.com/embed/dYevheZQPy4?controls=0" 
            frameborder="0" 
            allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" 
            allowfullscreen
          >Video not supported on this browser.</iframe>
          <div className="col-md-12 mt-4 text-center text-white">
            <h3><strong>Thank you for visiting!</strong></h3>
          </div>
        </div>
      )
    } else {
      return null
    }
  }
}


export default Outro;