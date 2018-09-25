import React, { Component } from 'react';
import logo from '../../images/logo.svg';
import styles from './App.module.css';

// import Parent from 'components/stateDemo/Parent';
// import ParentWithState from 'components/parentState/ParentWithState';
import Notes from 'components/notes/Notes';

class App extends Component {
  render() {
    return (
      <div className={styles.container}>
        <header className={styles.header}>
          <img src={logo} className={styles.logo} alt="logo" />
          <h1 className={styles.title}>Welcome to React</h1>
        </header>
        <p className={styles.intro}>
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        {/* <Parent /> */}
        {/* <ParentWithState /> */}
        <Notes />
      </div>
    );
  }
}

export default App;
