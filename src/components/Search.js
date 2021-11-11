import React, {Component} from 'react';
import axios from 'axios'

import SearchForm from './SearchForm';

const SERVER_URL = 'https://burningairlinesserver.herokuapp.com/flights.json'

class Search extends Component {

  constructor() {
    super();
    this.state = {flights: [], cat_gif: ''}
    this.fetchFlights = this.fetchFlights.bind(this);
  }

  fetchFlights(o, d) {

    let validFlights = [];
    let cat_gif= '';
    axios(SERVER_URL).then((result) => {
    console.log(result.data)
    if (o === 'Meow' && d === 'Meow-Meow') {
      cat_gif = 'https://media3.giphy.com/media/lVBqPM2S0x3y0/giphy.gif?cid=ecf05e47zvz0js96fz81qz5b96gj5ld5jibnh77xfht7apbq&rid=giphy.gif&ct=g';
    };
    for (let i = 0; i < result.data.length; i++) {
      if (result.data[i].origin === o && result.data[i].destination === d) {
        validFlights.push(result.data[i]);
      }
    }
    this.setState({origin: o, destination: d, flights: validFlights, cat_gif: cat_gif});
    });
  }

  render() {
    return (
      <div>
        <h1>Search Flights</h1>
        <SearchForm onSubmit={this.fetchFlights}/>
        <ShowFlights flights={this.state.flights} cat_gif={this.state.cat_gif}/>
      </div>
    );
  }
}

const ShowFlights = (props) => {
  return (
    <div>
      {props.flights.map((f) =>
        <ul>
          <li key={f.id}>Flight will leave from {f.origin} to {f.destination} on the {f.date}.<img src={props.cat_gif} alt='Meow'></img></li>
        </ul>
      )}
    </div>
  );
};

export default Search;
