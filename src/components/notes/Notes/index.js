import React, { Component } from 'react';
import Note from 'components/notes/Note';
import AddNote from 'components/notes/AddNote';

const INITIAL_STATE = {
  notes: ['Note1', 'Note2', 'Note3'],
}

export default class Notes extends Component {
  state = INITIAL_STATE

  handleOnSubmit = (x) => {
    console.log(x);
    this.setState((prevState) => ({
      notes: [...prevState.notes, x],
    }));
  }

  render() {
    return (
      <div>
        {/* <button onClick={this.props.onClick}>{this.props.text}</button> */}

        {this.state.notes.map((note) => {
          return (
            <Note note={note}/>
          );
        })}
        <AddNote onSubmit={this.handleOnSubmit}/>
      </div>

    );
  }
}
