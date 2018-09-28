import React, { Component } from 'react';
import moment from 'moment';
import styles from '../../app/App.module.css';

export default class Note extends Component {
  handleOnClickDelete = () => {
    const { onDelete, id } = this.props;
    onDelete(id);
  };

  render() {
    const { text, title, createdAt } = this.props;
    const dateText = moment(createdAt).format('D-MM-Y');

    return (
      <div className={styles.noteList}>
        <div>Title: {title}</div>
        <div>Date: {dateText}</div>

        <div>
          <p>{text}</p>
          <button onClick={this.handleOnClickDelete}>Delete</button>
        </div>
      </div>
    );
  }
}
