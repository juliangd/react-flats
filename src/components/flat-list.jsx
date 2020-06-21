

import React, { Component } from 'react';
import Flat from './flat';

class FlatList extends Component {

  renderList = () => {
    return this.props.flats.map((flat, index) => {
      return (
        <Flat
          flat={flat}
          key={flat.lat}
          index={index}
          selectFlat={this.props.selectFlat}
          selectedFlat={flat.name === this.props.selectedFlat.name}
        />
      );
    });
  };

  render() {
    return (
      <div className="flat-list">
        {this.renderList()}
      </div>
    );
  }
}

export default FlatList;
