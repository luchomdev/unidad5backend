import React, { Component } from 'react';
import axios from 'axios';

class ProductList extends Component {
  state = {
    products: [],
  };

  componentDidMount() {
    axios
      .get('http://127.0.0.1:8000/productos')
      .then(response => {
        this.setState({ products: response.data });
      })
      .catch(error => {
        console.error('Error al obtener los productos:', error);
      });
  }

  render() {
    const { products } = this.state;

    return (
      <div className='container py-4'>
        <div className="product-list row">
          <h3 className='mb-5'>Productos más vendidos</h3>
          {products.map(product => (
            <div key={product.id} className="col-md-3">
              <div className="product">
                <img src={`http://127.0.0.1:8000${product.imagen}`} alt={product.nombre} className="img-fluid" />
                <h3>{product.nombre}</h3>
                <p>{product.descripcion.slice(0, 70)}</p>
                <span>${product.precio}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  }
}

export default ProductList;
