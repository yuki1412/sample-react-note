import React, { Component } from 'react';

import NotesStore from 'services/notes/NotesStore'

import styles from './index.module.css';

export default class AddNote extends Component {
  state = {
    title: '',
    text: '',
  };

  handleOnChangeTitle = e => {
    this.setState({ title: e.target.value });
  };

  handleOnChangeText = e => {
    this.setState({ text: e.target.value });
  };

  handleOnClickReset = () => {
    this.setState({ title: '', text: '' });
  };

  handleOnClickSubmit = () => {
    const { title, text } = this.state;

    // this.props.onSubmit({ title: title, text: text });
    NotesStore.addNote( title, text );
    this.setState({ title: '', text: '' });
  };

  render() {
    const { title, text } = this.state;

    return (
      <div className={styles.container}>
        <div className={styles.inputContainer}>
          <p className={styles.label}>Title</p>
          <input
            className={styles.textInput}
            value={title}
            onChange={this.handleOnChangeTitle}
          />
        </div>

        <div className={styles.inputContainer}>
          <p className={styles.label}>Text</p>
          <textarea
            className={styles.textAreaInput}
            value={text}
            onChange={this.handleOnChangeText}
          />
        </div>

        <div className={styles.buttonContainer}>
          <button onClick={this.handleOnClickReset}>Reset</button>
          <button onClick={this.handleOnClickSubmit}>Submit</button>
        </div>
      </div>
    );
  }
}
