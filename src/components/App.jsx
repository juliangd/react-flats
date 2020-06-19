import React, { Component } from 'react';
import flats from '../../data/data';
import Flat from './flat';
import FlatList from './flat-list';
import Map from './map';


class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      flats: flats,
      selectedFlat: ""
    };
  }

  selectFlat = (imageUrl) => {
    this.setState({
      selectedFlat: imageUrl
    });
  }

  render () {
    return (
      <div>
        <FlatList flats={this.state.flats} />
        <Map selectFlat={this.selectFlat} />
      </div>
    );
  }
}

export default App;
