import React, { Component } from 'react';

export default class Child extends Component {
  static defaultProps = {
    name: 'Stranger',
    message: '....',
  };

  render() {
    return (
      <div>
        <p>Child: Hello {this.props.name}</p>
        <p>{this.props.message}</p>
      </div>
    );
  }
}
