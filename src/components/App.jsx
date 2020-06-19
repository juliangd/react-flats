import React, { Component } from 'react';
import flats from '../../data/data';
import Flat from './flat';
import FlatList from './flat-list';


class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      flats: flats,
      selectedFlatId: ""
    };
  }

  render () {
    return (
      <div>
          <FlatList flats={this.state.flats} />
        <div className="map-container">
        </div>
      </div>
    );
  }
}

export default App;
