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
    this.setState({ text: e.target.value });
  };

  handleOnClickReset = () => {
    this.setState({ title: '', text: '' });
  };

  handleOnClickSubmit = () => {
    const { title, text } = this.state;

    this.props.onSubmit({ title: title, text: text });
    this.setState({ title: '', text: '' });
  };

  render() {
    const { title, text } = this.state;

    return (
      <div className={styles.textareaContainer}>
        <div>
          Title: &nbsp;
          <textarea value={title} onChange={this.handleOnChangeTitle} />
        </div>
        <div>
          Text: &nbsp;
          <textarea value={text} onChange={this.handleOnChangeText} />
        </div>
        <button onClick={this.handleOnClickReset}>Reset</button>
        <button onClick={this.handleOnClickSubmit}>Submit</button>
      </div>
    );
  }
}
