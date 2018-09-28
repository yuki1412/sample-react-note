import React, { Component } from 'react';
import Note from 'components/notes/Note';
import AddNote from 'components/notes/AddNote';
import styles from '../../app/App.module.css';



export default class Notes extends Component {
  state = {
    notes: [],
  }

  handleOnSubmit = (x) => {
    if(x.text === '' && x.title === ''){
      return(null);
    }else{
      x.id = '_' + Math.random().toString(36).substr(2, 9);
      this.setState((prevState) => ({
        notes: [...prevState.notes, x],
      }));
    }
  }

  handleOnDelete = (selectedID) => {
    let test = this.state.notes.filter((item) => {
      return (item.id !== selectedID);
    });
    this.setState(() => ({
      notes: test,
    }));
  }

  render() {
    return (
      <div className={styles.textareaCenter} >
        <div>
          {this.state.notes.map((obj) => {
            return (
                <Note id={obj.id} title={obj.title} note={obj.text}
                  time={obj.date} state={this.state}
                  onDelete={this.handleOnDelete}
                />
            );
          })}
          {this.state.notes.length? '':'No Message Yet!'}
        </div>

        <div>
          <AddNote onSubmit={this.handleOnSubmit}/>

          {console.log(this.state)}
        </div>
      </div>
    );
  }
}
