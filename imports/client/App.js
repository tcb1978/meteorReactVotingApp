import React, { Component, Fragment } from 'react';
import { createContainer } from 'meteor/react-meteor-data';
import Item from './Item';
import Items from '../api/items';

class App extends Component {
  render() {
    return (
      <Fragment>
        <header>
          <h1>Voting</h1>
        </header>
        <main>
          {this.props.items.map((item, i) => <Item item={item} key={i} /> )}
        </main>
      </Fragment>
    );
  }
}

export default createContainer(() => {
  return {
    items: Items.find({}).fetch()
  }
}, App);