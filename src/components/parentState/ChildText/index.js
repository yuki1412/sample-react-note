import React, { Component } from 'react';

export default class ChildText extends Component {
  render() {
    return (
      <div>
        <p>Current Value: {this.props.value}</p>
      </div>

    );
  }
}
