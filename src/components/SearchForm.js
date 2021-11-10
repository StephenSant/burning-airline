import React, {Component} from 'react'

class SearchForm extends Component {

  constructor() {
    super();
    this.state = {
      origin: '',
      destination: ''
    }
    this._handleSubmit = this._handleSubmit.bind(this);
    this._handleChangeOrigin = this._handleChangeOrigin.bind(this);
    this._handleChangeDestination = this._handleChangeDestination.bind(this);
  }

  _handleChangeOrigin(event) {
    this.setState({origin: event.target.value});
  }

  _handleChangeDestination(event) {
    this.setState({destination: event.target.value});
  }

  _handleSubmit(event) {
    event.preventDefault();
    this.props.onSubmit(this.state.origin, this.state.destination);
  }

  render() {
    return (
      <form onSubmit={this._handleSubmit}>
        <label>
          Origin
        </label>
        <input type='search' required placeholder='Brisbane' onChange={this._handleChangeOrigin} />
        <label>
          Destination
        </label>
        <input type='search' required placeholder='Hobart' onChange={this._handleChangeDestination} />
        <input type='submit' value={'Search for Flights'} />
      </form>
    )
  }

}

export default SearchForm;
