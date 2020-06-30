import React, { Component } from 'react';

export default class ColorBox extends Component {

  render() {
    const op = this.props.opacity
    return op < 0.2 ? null : ( <div className="color-box" style={{opacity: op}}>
      <ColorBox opacity={op - 0.1} />
    </div>)
  }

}

