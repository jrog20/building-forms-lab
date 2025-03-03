import React, { Component } from 'react'

class BandInput extends Component {
  state = {
    name: ''
  }

  handleSubmit = event => {
    event.preventDefault();
    this.props.addBand(this.state)
    this.setState({
      name: '',
    });
  }

  handleChange(event) {
    this.setState({
      name: event.target.value
    });
  }

  render() {
    return(
      <div>
        <form onSubmit={this.handleSubmit}>
          <label>Enter New Band: </label>
          <input type="text" onChange={(event) => this.handleChange(event)} value={this.state.name} />
          <input type="submit" />
        </form>
      </div>
    )
  }
}

export default BandInput;
