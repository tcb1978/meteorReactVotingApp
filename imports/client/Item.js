import React, { Component, Fragment } from 'react';

export default class Item extends Component {
  render() {
    return (
      <div className="item">
        <div className="vote-one">
          <span>{this.props.item.itemOne.value}</span>
          <h2>{this.props.item.itemOne.text}</h2>
        </div>
        <span>vs</span>
        <div className="vote-two">
          <span>{this.props.item.itemTwo.value}</span>
          <h3>{this.props.item.itemTwo.text}</h3>
        </div>
      </div>
    )
  }
}