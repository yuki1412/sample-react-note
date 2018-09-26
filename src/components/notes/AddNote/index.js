import React, { Component } from 'react';
import moment from 'moment';


export default class AddNote extends Component {
  state = {
    text: '',
    time: '',
  }
  render() {
    return (
      <div>
        {/* <button onClick={this.props.onClick}>{this.props.text}</button> */}
        <input value={this.state.text} onChange={(e) => {
          this.setState({ text: e.target.value, time:moment().format('ddd HH:mm:ss.SSS')});
        }}/>
        <button onClick={() => {this.setState({text:'', time:''})}}>Reset</button>
        <button onClick={() => {this.props.onSubmit(this.state)}}>Submit</button>
      </div>

    );
  }
}
