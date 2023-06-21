import React, { Component } from 'react';
import Header from './Header';
import ProducListCarro from './ProductListCarro';

class Carros extends Component {
  render() {
    return (
      <div>
        <Header />
       <ProducListCarro />
      </div>
    );
  }
}



export default Carros;
