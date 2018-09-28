import React, { Component } from 'react';
import moment from 'moment';
import styles from '../../app/App.module.css';


export default class AddNote extends Component {
  state = {
    title:'',
    text: '',
    date: '',
    id:'',
  }
  render() {
    return (
      <div className={styles.textareaContainer}>
          <div>Title: &nbsp;
            <textarea value={this.state.title} onChange={(e) => {
              this.setState({title: e.target.value});
            }}/>
          </div>
          <div>Text: &nbsp;
            <textarea  onChange={(e) => {
              this.setState({ text: e.target.value, date:moment().format('D-MM-Y')});
            }}/>
          </div>
          <button onClick={() => {this.setState({title: '', text:'', date:'', id:''})}}>Reset</button>
          <button onClick={() => {this.props.onSubmit(this.state)}}>Submit</button>
      </div>
    );
  }
}
