import React, { Component } from 'react';
import styles from '../../app/App.module.css';

export default class Note extends Component {
  state = this.props.state;
  render() {
    return (
      <div className={styles.noteList}>
        <div>Title: {this.props.title}</div>
        <div>Date: {this.props.date}</div>
        {this.props.note && (
          <div>
            <p>{this.props.note}</p>
            <button
              onClick={() => {
                this.props.onDelete(this.props.id);
              }}
            >
              Delete
            </button>
          </div>
        )}
      </div>
    );
  }
}
