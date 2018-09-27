import React, { Component } from 'react';

export default class EmptyMessage extends Component {
  render() {
    if(this.props.notesLength)
    return (null)
    else{
      return(
        <div>
          No Message Yet!
        </div>
      )
    }
  }
}
