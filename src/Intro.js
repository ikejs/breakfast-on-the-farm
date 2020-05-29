import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';


class Intro extends Component {
  render() {
    if (this.props.enabled) {
      return (
        <div>
          <iframe title="Intro Video" className="w-100" height="315" src="https://www.youtube.com/embed/o2b204_x-Us?controls=0" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
          <div className="col-md-12">
            <button className="btn btn-lg mt-4 p-3 btn-block btn-info" onClick={() => {
              this.props.hideIntro();
            }}>Continue to Tour <FontAwesomeIcon icon={faArrowRight} /></button>
          </div>
        </div>
      )
    } else {
      return null
    }
  }
}


export default Intro;