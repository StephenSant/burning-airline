import React, {Component} from 'react';

class Reservations extends Component {
  
  constructor(props) {
    super(props);
    this.state = {
      selectedSeat: "D5"
    }
  }
  
  boxClick = (e) => {
    this.setState({
      selectedSeat: e.target.innerHTML
    });
    if(e.target.id === "selected"){
      e.target.id = "";
    }
    else{
      e.target.id = "selected";
    }
  }


  render() {
   return (
    <div>
      <h2>Reservations coming soon</h2>
      <table>
        <tr>
          <td onClick={this.boxClick}>A1</td>
          <td onClick={this.boxClick}>A2</td>
          <td onClick={this.boxClick}>A3</td>
          <td onClick={this.boxClick}>A4</td>
          <td onClick={this.boxClick}>A5</td>
        </tr>
        <tr>
          <td onClick={this.boxClick}>B1</td>
          <td onClick={this.boxClick}>B2</td>
          <td onClick={this.boxClick}>B3</td>
          <td onClick={this.boxClick}>B4</td>
          <td onClick={this.boxClick}>B5</td>
        </tr>
        <tr>
          <td onClick={this.boxClick}>C1</td>
          <td onClick={this.boxClick}>C2</td>
          <td onClick={this.boxClick}>C3</td>
          <td onClick={this.boxClick}>C4</td>
          <td onClick={this.boxClick}>C5</td>
        </tr>
        <tr>
          <td onClick={this.boxClick}>D1</td>
          <td onClick={this.boxClick}>D2</td>
          <td onClick={this.boxClick}>D3</td>
          <td onClick={this.boxClick}>D4</td>
          <td onClick={this.boxClick}>D5</td>
        </tr>
      </table>
    </div>
    );
  }
}
export default Reservations;