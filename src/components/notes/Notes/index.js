import React, { Component } from 'react';
import Note from 'components/notes/Note';
import AddNote from 'components/notes/AddNote';
import EmptyMessage from 'components/notes/EmptyMessage';
import styles from '../../app/App.module.css';



export default class Notes extends Component {
  state = {
    notes: [
      {
        title: 'Banana',
        text: 'Upon the couch sits a broad yellow grin of the deepest gold...',
        date: '28-04-2016',
      },{
        title: 'Apple',
        text: "The apple had a gold star radiating from the stem...",
        date: '25-12-2001',
      },
    ],
  }

  handleOnSubmit = (x) => {
    if(x.text === '' && x.date === ''){
      return(null);
    }else{
      this.setState((prevState) => ({
        notes: [...prevState.notes, x],
      }));
      console.log(this.state);
    }
  }

  handleOnDelete = (index) => {
    this.setState((prevState) => {
      this.state.notes.splice(index, 1);
      return {notes: this.state.notes};
    });
  }

  render() {
    return (
      <div className={styles.textareaCenter} >
        <div>
          {this.state.notes.map((obj, index) => {
            return (
                <Note id={index} title={obj.title} note={obj.text} time={obj.date} onDelete={this.handleOnDelete}/>
            );
          })}
            <EmptyMessage notesLength={this.state.notes.length}></EmptyMessage>
        </div>
        <div>
          <AddNote onSubmit={this.handleOnSubmit}/>
        </div>
      </div>
    );
  }
}
