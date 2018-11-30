import React, { Component } from 'react';
import moment from 'moment';

import notesStore from 'services/notes/NotesStore';
import Collapsible from 'react-collapsible';

import styles from './index.module.css';

export default class Note extends Component {
  state = {
    text: this.props.text,
    editing: false,
  }
  handleOnClickDelete = () => {
    const { id } = this.props;
    // onDelete(id);
    notesStore.deleteNote(id);
  };

  handleOnClickConfirm = () => {
    const { text } = this.state;
    const { index } = this.props;
    notesStore.notes[index].text = text;
    this.setState(prevState => ({ editing: false }))
  };

  handleOnClickEdit = () => {
    this.setState((prevState) => ({ editing: !prevState.editing }));
  };

  handleOnChangeText = e => {
    this.setState({ text: e.target.value });
  };
  render() {
    const { text, title, createdAt } = this.props;
    const { editing } = this.state;
    const dateText = moment(createdAt).format('D-MM-Y');

    return (
      <div className={styles.container}>

        {/* <div className={styles.headerContainer}>
          <div>
            <div className={styles.title}>{title}</div>
            <div className={styles.date}>Created At: {dateText}</div>
          </div>
          <div style={{ flex: 1 }} />
          <button className={styles.button} onClick={this.handleOnClickDelete}>
            &times;
          </button>
        </div> */}

        {/* <hr /> */}
        <Collapsible trigger={
          <div className={styles.headerContainer}>
            <div>
              <div className={styles.title}>{title}</div>
              <div className={styles.date}>Created At: {dateText}</div>
            </div>
            <button
              className={styles.button}
              onClick={this.handleOnClickDelete}>
              &times;
            </button>
          </div>}>

          <hr />
          <div className={styles.textContainer}>
            <p className={styles.text}>{text}</p>
            {editing ?
            <div>
              <button onClick={this.handleOnClickEdit}>Cancel</button>
              <button onClick={this.handleOnClickConfirm}>Confirm</button>
            </div> :
            <button onClick={this.handleOnClickEdit}>Edit</button>
          }


          </div>
          {editing && <div className={styles.textAreaContainer}><textarea
            className={styles.textAreaInput}
            value={this.state.text}
            onChange={this.handleOnChangeText}
          /></div>}
        </Collapsible>
      </div>
    );
  }
}
