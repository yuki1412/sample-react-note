import React, { Component } from 'react';

export default class Note extends Component {
  state = {
      note: this.props.note,
      time: this.props.time,
    }
  render() {
    return (
      <div>
        {this.state.note &&
        <form>
          {this.state.note} {this.state.time}
          <button
            // onClick={() => {
            //   this.setState({ note:'', time:''
            // })
            onClick={(e) => {
              e.preventDefault();
              this.props.onDelete(this.props.id);
            }}
          >
          Delete
        </button>
        </form>
        }
        {/* <button onClick={this.props.onClick}>{this.props.text}</button> */}
      </div>

    );
  }
}
