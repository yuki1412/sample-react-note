import React, { Component } from 'react';

export default class ChildWithState extends Component {
  static defaultProps = {
    name: 'Stranger',
  };

  state = {
    count: 10,
  };

  handleOnClick = () => {
    console.log(this.props);
    console.log(this.state);
    this.setState({
      count: this.state.count + 1,
    });
  };

  render() {
    return (
      <div>
        <p>Child: Hello {this.props.name}</p>
        <p>I have been clicked {this.state.count} times</p>
        <button onClick={this.handleOnClick}>Click</button>
      </div>
    );
  }
}
