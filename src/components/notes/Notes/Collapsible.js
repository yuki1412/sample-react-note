import React, { Component } from 'react';
import PropTypes from 'prop-types';


class Collapsible extends Component {
  constructor(props){
    super(props)
    this.state = {
      isExpanded: false,
    }
  }

  handleToggle(e){
    e.preventDefault();
    this.setState({
      isExpanded: !this.state.isExpanded,
    })
  }
  render(){
    // const {title, children} = this.props;

    return (
      const {isExpanded} = this.state;
        <div className={'panel ${isExpanded ? 'is-expanded' : ''}'} onClick={(e) =>
        this.handleToggle(e)}>
          <div className='panel-heading'>
            <h2>ABC</h2>
          </div>
          <div className='panel-collapse'>
            <div className='panel-body'>
              This is body text...bla...
            </div>
          </div>
        </div>
    )
  }
}

export default Collapsible;
