import React, { Component } from 'react';

export default class ChildButton extends Component {
  render() {
    return (
      <div>
        <button onClick={this.props.onClick}>{this.props.text}</button>
      </div>

    );
  }
}
