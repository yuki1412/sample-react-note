import React, { Component } from 'react';
import { observer } from 'mobx-react';

import Note from 'components/notes/Note';
import AddNote from 'components/notes/AddNote';
import notesStore from 'services/notes/NotesStore';

import styles from './index.module.css';

@observer
export default class Notes extends Component {
  state = {
    notes: [],
  };

  // handleOnSubmit = note => {
  // if (note.text === '' && note.title === '') {
  //   return;
  // }
  //
  // const newNote = {
  //   ...note,
  //   id: generateRandomId(),
  //   createdAt: generateTimeStamp(),
  // };

  // this.setState(prevState => ({
  //   notes: [...prevState.notes, newNote],
  // }));
  // notesStore.addNote(newNote)
  // };

  // handleOnDelete = selectedID => {
  //   // this.setState(prevState => ({
  //   //   notes: prevState.notes.filter(item => item.id !== selectedID),
  //   // }));
  //
  //   notesStore.deleteNote(selectedID)
  // };

  render() {
    // const { notes } = this.state;
    const notes = notesStore.notes;
    const count = notesStore.notesCount;

    return (
      <div className={styles.container}>
        {notes.map(obj => (
          <Note
            key={obj.id}
            id={obj.id}
            title={obj.title}
            text={obj.text}
            createdAt={obj.createdAt}
            onDelete={this.handleOnDelete}
          />
        ))}

        {/* {!notes.length && <p>No Message Yet!</p>} */}
        {!count && <p>No Message Yet!</p>}

        <AddNote />
      </div>
    );
  }
}
