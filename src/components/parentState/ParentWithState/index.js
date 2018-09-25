import React, { Component } from 'react';
import ChildText from 'components/parentState/ChildText'
import ChildButton from 'components/parentState/ChildButton'


export default class ParentWithState extends Component {
  state = {
    counter:5,
  }

  increase = () => {
    const counter = this.state.counter;
    this.setState({
      counter:counter + 1,
    })
  }

  decrease = () => {
    const counter=this.state.counter;
    this.setState({
      counter:counter - 1,
    })
  }

  render() {
    return (
      <div>
        <ChildText
          value = {this.state.counter}
        />
        <ChildButton text='-' onClick={this.decrease}/>
        <ChildButton text='+' onClick={this.increase}/>
      </div>

    );
  }
}
