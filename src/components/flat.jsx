import React, { Component } from 'react';

// name
// imageUrl
// price
// priceCurrency
// lat
// lng

class Flat extends Component {

  render() {
    const { flat } = this.props;
    return (
      <div className="card"
           style={{ backgroundImage: `url("https://raw.githubusercontent.com/lewagon/flats-boilerplate/master/images/flat3.jpg")`}} >
        <div className="card-category">{flat.price}</div>
        <div className="card-description">
          <h2>{flat.name}</h2>
        </div>
        <a className="card-link" href={flat.imageUrl} />
      </div>
    );
  }
}

export default Flat;






{ /*<div class="card" style="background-image: linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.2)), url('https://raw.githubusercontent.com/lewagon/flats-boilerplate/master/images/flat3.jpg';);">
  <div class="card-category">150 EUR</div>
  <div class="card-description">
    <h2>Super 60m2 in trendy neighborhood!</h2>
  </div>
  <a class="card-link" href="#"></a>
</div>
*/ }
