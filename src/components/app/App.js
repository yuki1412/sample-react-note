import React, { Component } from 'react';
import logo from '../../images/logo.svg';
import styles from './App.module.css';

// import Parent from 'components/stateDemo/Parent';
// import ParentWithState from 'components/parentState/ParentWithState';
import Notes from 'components/notes/Notes';
import Testing from 'components/Testing'

class Screen extends Component {
  render() {
    return (
      <div className={styles.container}>
        <header>
          <img src={logo} className={styles.logo} alt="logo" />
        </header>
        {/* <Parent /> */}
        {/* <ParentWithState /> */}
        <Notes />
        {/* <Testing/> */}
      </div>
    );
  }
}

export default Screen;
