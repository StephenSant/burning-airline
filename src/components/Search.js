import React, { Component } from "react";
import axios from "axios";

import SearchForm from "./SearchForm";
// import ShowFlights from './ShowFlights';

const SERVER_URL = "https://burningairlinesserver.herokuapp.com/flights.json";

class Search extends Component {
  constructor() {
    super();
    this.state = { flights: [] };
    this.fetchFlights = this.fetchFlights.bind(this);
  }

  fetchFlights(o, d) {
    let validFlights = [];
    axios(SERVER_URL).then((result) => {
      console.log(result.data);
      for (let i = 0; i < result.data.length; i++) {
        if (result.data[i].origin === o && result.data[i].destination === d) {
          validFlights.push(result.data[i]);
        }
      }
      this.setState({ origin: o, destination: d, flights: validFlights });
    });
  }

  render() {
    return (
      <div>
        <h1>Search coming soon</h1>
        <SearchForm onSubmit={this.fetchFlights} />
        <ShowFlights flights={this.state.flights} />
      </div>
    );
  }
}

const ShowFlights = (props) => {
  return (
    <div>
      {props.flights.map((f) => (
        <ul>
          <li key={f.id}>
            Flight will leave from {f.origin} to {f.destination} on the {f.date}
            .
          </li>
        </ul>
      ))}
    </div>
  );
};

export default Search;
