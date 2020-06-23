import React, { Component } from 'react';


export default class ColorBox extends Component {

  state = {
    todos: [
      
    ]
  }



  render() {
    const nestedColorBox =  this.props.opacity >= 0.2 ? (
      <ColorBox opacity={this.props.opacity-0.1}/>
    ) : null
    return (
      <div className="color-box" style={{opacity: this.props.opacity}}>
        {nestedColorBox}
      </div>
    )
  }

}

