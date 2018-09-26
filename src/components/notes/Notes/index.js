import React, { Component } from 'react';
import Note from 'components/notes/Note';
import AddNote from 'components/notes/AddNote';
import EmptyMessage from 'components/notes/EmptyMessage';


export default class Notes extends Component {
  state = {
    notes: [
      {
        text: 'Note1',
        time: '2019',
      },{
        text: 'Note2',
        time: '2018',
      },{
        text: 'Note3',
        time: '2017',
      },
    ],
  }

  handleOnSubmit = (x) => {
    this.setState((prevState) => ({
      notes: [...prevState.notes, x],
    }));
    console.log(this.state);
  }

  handleOnDelete = (index) => {
    this.setState((prevState) => {
      this.state.notes.splice(index, 1);
      return {notes: this.state.notes};
    });
  }


  render() {
    return (
      <div>
        {/* <button onClick={this.props.onClick}>{this.props.text}</button> */}
        {this.state.display}
        {this.state.notes.map((obj, index) => {
          return (
            <Note id={index} note={obj.text} time={obj.time} onDelete={this.handleOnDelete}/>
          );
        })}
        <EmptyMessage notesLength={this.state.notes.length}></EmptyMessage>
        <AddNote onSubmit={this.handleOnSubmit}/>
      </div>
    );
  }
}
