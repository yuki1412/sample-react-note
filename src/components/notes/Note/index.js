import React, { Component } from 'react';
import styles from '../../app/App.module.css';

export default class Note extends Component {
  handleOnClickDelete = () => {
    this.props.onDelete(this.props.id);
  };

  render() {
    return (
      <div className={styles.noteList}>
        <div>Title: {this.props.title}</div>
        <div>Date: {this.props.date}</div>

        <div>
          <p>{this.props.note}</p>
          <button onClick={this.handleOnClickDelete}>Delete</button>
        </div>
      </div>
    );
  }
}
