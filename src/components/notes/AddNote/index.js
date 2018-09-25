import React, { Component } from 'react';

export default class AddNote extends Component {
  state = {
    text: '',
  }
  render() {
    return (
      <div>
        {/* <button onClick={this.props.onClick}>{this.props.text}</button> */}
        <input value={this.state.text} onChange={(e) => {
          this.setState({ text: e.target.value });
        }}/>
        <button onClick={() => {this.props.onSubmit(this.state.text)}}>Submit</button>
      </div>

    );
  }
}
