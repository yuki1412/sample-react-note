import React, { Component } from 'react';
import styles from './index.module.css';

export default class NoteSearch extends Component {
  render(){
    return(
      <div>
        <input
          className={styles.noteSearch}
          type="search"
          placeholder="Search for title"
          onChange={this.props.onSearch}/>
      </div>
    );
  }
}
