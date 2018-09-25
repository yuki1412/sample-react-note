import React, { Component } from 'react';
import Child from 'components/stateDemo/Child'
import ChildWithState from 'components/stateDemo/ChildWithState'

export default class Parent extends Component {
  render() {
    return (
      <div>
        <p>Parent: Hello World! </p>
        <Child name='KahWeng' message='Good Luck with React'/>
        <p>-------------------------</p>
        <ChildWithState name="ragib"/>
      </div>

    );
  }
}
