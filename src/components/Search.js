import React, {Component} from 'react';
import axios from 'axios'

import SearchForm from './SearchForm';
import ShowFlights from './ShowFlights';

const SERVER_URL = 'http://localhost:3000/flights.json'

class Search extends Component {

  constructor() {
    super();
    this.state = {flights: []};
    this.fetchFlights = this.fetchFlights.bind(this);
  }

  fetchFlights = function(o, d) {
    axios(SERVER_URL).then((result) => {
      this.setState({flights: result.data});
    });
    this.setState({origin: o, destination: d});
  }

  render() {
    return (
      <div>
        <h2>Search coming soon</h2>
        <SearchForm onSubmit={this.fetchFlights}/>
        <ShowFlights flights={this.state.flights} destination={this.state.destination} origin={this.state.origin}/>
      </div>
    );
  }
}

export default Search;
