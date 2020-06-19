import React, { Component } from 'react';
import flats from '../../data/data';
import Flat from './flat';
import FlatList from './flat-list';


class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      flats,
      selectedFlat: flats[0]
    };
  }

  selectFlat = (index) => {
    this.setState({
      selectedFlat: flats[index]
    });
  }

  render () {
    return (
      <div>
        <FlatList
          flats={this.state.flats}
          selectedFlat={this.state.selectedFlat}
          selectFlat={this.selectFlat}
        />
        <div className="map-container">
        </div>
      </div>
    );
  }
}

export default App;
