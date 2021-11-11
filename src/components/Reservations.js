import React, {Component} from 'react';
import axios from 'axios'

import ShowReservations from './ShowReservations';
class Reservations extends Component {
  
  constructor(props) {
    super(props);
    this.state = {
      selectColor: ""
    }
  }


  boxClick = (e) => {
    this.setState({
      selectColor: "green"
    })
  }

  render() {
   return (
    <div >
      <h2>Reservations coming soon</h2>
        <table>
          <tr>
            <td onClick={this.boxClick} style={{backgroundColor: this.state.selectColor}}>A1</td>
            <td>A2</td>
            <td>A3</td>
            <td>A4</td>
            <td>A5</td>
          </tr>
          <tr>
            <td>B1</td>
            <td>B2</td>
            <td>B3</td>
            <td>B4</td>
            <td>B5</td>
          </tr>
          <tr>
            <td>C1</td>
            <td>C2</td>
            <td>C3</td>
            <td>C4</td>
            <td>C5</td>
          </tr>
          <tr>
            <td>D1</td>
            <td>D2</td>
            <td>D3</td>
            <td>D4</td>
            <td>D5</td>
          </tr>
        </table>
    </div>
    );
  }
}
export default Reservations;