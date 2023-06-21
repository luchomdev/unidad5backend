import React, { Component } from 'react';
import axios from 'axios';

class CarProducts extends Component {
  state = {
    carProducts: []
  };

  componentDidMount() {
    axios.get('http://127.0.0.1:8000/productos?categoria=carro')
      .then(response => {
        this.setState({ carProducts: response.data });
      })
      .catch(error => {
        console.error('Error al obtener los productos de la categoría "carro":', error);
      });
  }

  render() {
    const { carProducts } = this.state;

    return (
    <div className='container'>
      <div className="car-products row">
        {carProducts.map(product => (
          <div key={product.id} className="car-product col-md-3">
            <img src={`http://127.0.0.1:8000${product.imagen}`} alt={product.nombre} className="img-fluid" />
            <h3>{product.nombre}</h3>
            <p>{product.descripcion.slice(0, 70)}</p>
            <span>${product.precio}</span>
          </div>
        ))}
      </div>
    </div>
    );
  }
}

export default CarProducts;
