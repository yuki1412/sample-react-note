import React, { Component } from 'react';
import moment from 'moment';
import styles from '../../app/App.module.css';

export default class AddNote extends Component {
  state = {
    title: '',
    text: '',
    date: '',
    id: '',
  };

  handleOnChangeTitle = e => {
    this.setState({ title: e.target.value });
  };

  handleOnChangeText = e => {
    this.setState({
      text: e.target.value,
      date: moment().format('D-MM-Y'),
    });
  };

  handleOnClickReset = () => {
    this.setState({ title: '', text: '', date: '', id: '' });
  };

  handleOnClickSubmit = () => {
    this.props.onSubmit(this.state);
    this.setState({ title: '', text: '', date: '', id: '' });
  };

  render() {
    return (
      <div className={styles.textareaContainer}>
        <div>
          Title: &nbsp;
          <textarea
            value={this.state.title}
            onChange={this.handleOnChangeTitle}
          />
        </div>
        <div>
          Text: &nbsp;
          <textarea
            value={this.state.text}
            onChange={this.handleOnChangeText}
          />
        </div>
        <button onClick={this.handleOnClickReset}>Reset</button>
        <button onClick={this.handleOnClickSubmit}>Submit</button>
      </div>
    );
  }
}
