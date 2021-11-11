import React, {Component} from 'react';

class PlaneForm extends Component {
  constructor() {
    super();
    this.state = {
      name: '',
      rows: 0,
      columns: 0
    }
    this._handleChange = this._handleChange.bind(this);
    this._handleSubmit = this._handleSubmit.bind(this);
  }

  _handleChange(event) {
    let key = event.target.name
    let value = event.target.value
    this.setState({
      [key]: value
    })
  }

  _handleSubmit(event) {
    event.preventDefault();
    this.props.onSubmit(this.state.name, this.state.rows, this.state.columns);
  }

  render () {
    return (
      <form onSubmit={this._handleSubmit}>
        <label>
          Plane Name:
        </label>
        <input type='text' name='name' required placeholder='Quinjet' onChange={this._handleChange} />
        <label>
          Rows:
        </label>
        <input type='number' name='rows' required onChange={this._handleChange} />
        <label>
          Columns:
        </label>
        <input type='number' name='columns' required onChange={this._handleChange} />
        <input type='submit' value={'Save Plane'}/>
      </form>
    )
  }
}

export default PlaneForm;
