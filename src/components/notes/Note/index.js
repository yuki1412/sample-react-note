import React, { Component } from 'react';
import styles from '../../app/App.module.css';


export default class Note extends Component {
  state = {
      title: this.props.title,
      note: this.props.note,
      date: this.props.time,
    }
  render() {
    return (
      <div className={styles.noteList}>
        <div>
          Title: {this.state.title}
        </div>
        <div>
          Date: {this.state.date}
        </div>
        {this.state.note && (
          // <form>
          <div>
            <p>
              {this.state.note}
            </p>
            <button
              onClick={(e) => {
                // e.preventDefault();
                this.props.onDelete(this.props.id);
              }}
            >
            Delete
          </button>
          </div>
          // </form>
        )}
      </div>
    );
  }
}
