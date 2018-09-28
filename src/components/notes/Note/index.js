import React, { Component } from 'react';
import moment from 'moment';
import styles from '../../app/App.module.css';

export default class Note extends Component {
  handleOnClickDelete = () => {
    this.props.onDelete(this.props.id);
  };

  render() {
    const dateText = moment(this.props.created_at).format('D-MM-Y');

    return (
      <div className={styles.noteList}>
        <div>Title: {this.props.title}</div>
        <div>Date: {dateText}</div>

        <div>
          <p>{this.props.text}</p>
          <button onClick={this.handleOnClickDelete}>Delete</button>
        </div>
      </div>
    );
  }
}
