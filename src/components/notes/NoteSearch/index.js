import React, { Component } from 'react';

export default class NoteSearch extends Component {
  render(){
    return(
      <div>
        <input className="noteSearch" type="search" placeholder="Search..." onChange={this.props.onSearch}/>
      </div>
    );
  }
}
