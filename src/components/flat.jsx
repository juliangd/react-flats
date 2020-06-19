import React, { Component } from 'react';

// name
// imageUrl
// price
// priceCurrency
// lat
// lng

class Flat extends Component {
  handleClick = () => {
    this.props.selectFlat(this.props.index);
  }

  render() {
    const { flat } = this.props;
    return (
      <div className="card" style={{ backgroundImage: `url(${flat.imageUrl})` }}>
        <div className="card-category">
          {flat.price} {flat.priceCurrency}
        </div>
        <div className="card-description">
          <h2>{flat.name}</h2>
        </div>
        <a className="card-link" href="#" onClick={this.handleClick} />
      </div>
    );
  }
}

export default Flat;
