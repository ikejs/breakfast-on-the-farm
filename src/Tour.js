import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlay } from '@fortawesome/free-solid-svg-icons';


class Tour extends Component {
  render() {
    if (this.props.enabled) {
      return (
        <div className="col-md-12 mt-4">
          <button className="btn btn-block p-3 btn-success"><h3><strong><FontAwesomeIcon icon={faPlay} /> STATION 2</strong></h3></button>
          <button className="btn btn-block p-3 btn-success"><h3><strong><FontAwesomeIcon icon={faPlay} /> STATION 3</strong></h3></button>
          <button className="btn btn-block p-3 btn-success"><h3><strong><FontAwesomeIcon icon={faPlay} /> STATION 4</strong></h3></button>
          <button className="btn btn-block p-3 btn-success"><h3><strong><FontAwesomeIcon icon={faPlay} /> STATION 5</strong></h3></button>
          <button className="btn btn-block p-3 btn-success"><h3><strong><FontAwesomeIcon icon={faPlay} /> STATION 6</strong></h3></button>
          <button className="btn btn-block p-3 btn-success"><h3><strong><FontAwesomeIcon icon={faPlay} /> STATION 7</strong></h3></button>
        </div>
      )
    } else {
      return null;
    }
  }
}


export default Tour;