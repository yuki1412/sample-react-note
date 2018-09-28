import React, { Component } from 'react';
import styles from '../../app/App.module.css';

export default class AddNote extends Component {
  state = {
    title: '',
    text: '',
  };

  handleOnChangeTitle = e => {
    this.setState({ title: e.target.value });
  };

  handleOnChangeText = e => {
    this.setState({
      text: e.target.value,
    });
  };

  handleOnClickReset = () => {
    this.setState({ title: '', text: '' });
  };

  handleOnClickSubmit = () => {
    this.props.onSubmit(this.state);
    this.setState({ title: '', text: '' });
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
