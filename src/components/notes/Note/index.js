import React, { Component } from 'react';

export default class Note extends Component {
  render() {
    return (
      <div>
        {/* <button onClick={this.props.onClick}>{this.props.text}</button> */}
        {this.props.note}
      </div>

    );
  }
}
