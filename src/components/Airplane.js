import React, {Component} from 'react';
import axios from 'axios'

import PlaneForm from './PlaneForm';

const SERVER_URL = 'https://burningairlinesserver.herokuapp.com/airplanes.json'

class Airplane extends Component {
  constructor () {
    super();
    this.state = {
      airplanes: []
    }
  }

  savePlane(n, r, c) {
    axios.post(SERVER_URL, {name: n, rows: r, columns: c})
  }

  render() {
    return (
      <div>
        <h1>Build a Plane!</h1>
        <PlaneForm onSubmit={this.savePlane}/>
      </div>
    )
  }
}

export default Airplane;
