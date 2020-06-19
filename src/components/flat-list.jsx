import React, { Component } from 'react';

import Flat from './flat';

class FlatList extends Component {
  renderList = () => {
    const { flats } = this.props;
    return flats.map((flat) => <Flat flat={flat} />);
  }

  render() {
    return (
      <div className="flat-list">
        {this.renderList()}
      </div>
    );
  }
}

export default FlatList;
