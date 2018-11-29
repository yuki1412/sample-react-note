import React, { Component } from 'react';
import moment from 'moment';

import notesStore from 'services/notes/NotesStore';
import Collapsible from 'react-collapsible';

import styles from './index.module.css';

export default class Note extends Component {
  handleOnClickDelete = () => {
    const { id } = this.props;
    // onDelete(id);
    notesStore.deleteNote(id);
  };

  render() {
    const { text, title, createdAt } = this.props;
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
            <button>Edit</button>
          </div>
        </Collapsible>
      </div>
    );
  }
}
