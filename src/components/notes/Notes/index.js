import React, { Component } from 'react';
import Note from 'components/notes/Note';
import AddNote from 'components/notes/AddNote';
import styles from '../../app/App.module.css';

function generateRandomId() {
  const randomString = Math.random()
    .toString(36)
    .substr(2, 9);
  return '_' + randomString;
}

export default class Notes extends Component {
  state = {
    notes: [],
  };

  handleOnSubmit = x => {
    if (x.text === '' && x.title === '') {
      return;
    }

    const newNote = {
      ...x,
      id: generateRandomId(),
    };

    this.setState(prevState => ({
      notes: [...prevState.notes, newNote],
    }));
  };

  handleOnDelete = selectedID => {
    // this.setState(prevState => {
    //   const filteredNotes = prevState.notes.filter(
    //     item => item.id !== selectedID,
    //   );
    //
    //   return {
    //     notes: filteredNotes,
    //   };
    // });

    this.setState(prevState => ({
      notes: prevState.notes.filter(item => item.id !== selectedID),
    }));
  };

  render() {
    const notes = this.state.notes;
    console.log(notes);

    return (
      <div className={styles.textareaCenter}>
        {notes.map(obj => (
          <Note
            id={obj.id}
            title={obj.title}
            note={obj.text}
            date={obj.date}
            onDelete={this.handleOnDelete}
          />
        ))}

        {!notes.length && <p>No Message Yet!</p>}

        <AddNote onSubmit={this.handleOnSubmit} />
      </div>
    );
  }
}
