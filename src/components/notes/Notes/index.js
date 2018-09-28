import React, { Component } from 'react';
import Note from 'components/notes/Note';
import AddNote from 'components/notes/AddNote';
import moment from 'moment';

import styles from './index.module.css';

function generateRandomId() {
  const randomString = Math.random()
    .toString(36)
    .substr(2, 9);
  return '_' + randomString;
}

function generateTimeStamp() {
  return moment().toISOString();
}

export default class Notes extends Component {
  state = {
    notes: [],
  };

  handleOnSubmit = note => {
    if (note.text === '' && note.title === '') {
      return;
    }

    const newNote = {
      ...note,
      id: generateRandomId(),
      createdAt: generateTimeStamp(),
    };

    this.setState(prevState => ({
      notes: [...prevState.notes, newNote],
    }));
  };

  handleOnDelete = selectedID => {
    this.setState(prevState => ({
      notes: prevState.notes.filter(item => item.id !== selectedID),
    }));
  };

  render() {
    const { notes } = this.state;

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

        {!notes.length && <p>No Message Yet!</p>}

        <AddNote onSubmit={this.handleOnSubmit} />
      </div>
    );
  }
}
