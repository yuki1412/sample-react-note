import React, { Component } from 'react';
import { observer } from 'mobx-react';

import Note from 'components/notes/Note';
import AddNote from 'components/notes/AddNote';
import NoteSearch from 'components/notes/NoteSearch';
import notesStore from 'services/notes/NotesStore';


import styles from './index.module.css';

@observer
export default class Notes extends Component {
  // state = {};

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

  handleOnSearch = e => {
    notesStore.searchingValue = e.target.value;
    notesStore.searchNote();
  };


  render() {
    // const { notes } = this.state;
    const { notes, filteredNotes } = notesStore;
    const count = notesStore.notesCount;
    if (notesStore.isLoading)
      return (
        <div className={styles.loaderWrapper}>
          <div className={styles.loader}></div>
          <div>THE PAGE IS LOADING ...</div>
        </div>
      );
    return (
      <div className={styles.container}>
        {/* <ul >
            {notesStore.posts.results.map((o) => <li>{notesStore.ucFirst(o.name)}</li>)}
        </ul> */}
        <div className={styles.noteContainer}>
          {filteredNotes.map(obj => (
            <Note
              key={obj.id}
              id={obj.id}
              title={obj.title}
              text={obj.text}
              createdAt={obj.createdAt}
              index={obj.index}
              // onDelete={this.handleOnDelete}
            />
          ))}
        </div>
        <NoteSearch onSearch={this.handleOnSearch}/>

        {/* {!notes.length && <p>No Message Yet!</p>} */}
        {!count && <p>No Message Yet!</p>}
        <AddNote />
      </div>
    );
  }
}
