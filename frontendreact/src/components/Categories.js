import React, { Component } from 'react';
import axios from 'axios';

class Categories extends Component {
  state = {
    categories: [],
  };

  componentDidMount() {
    axios.get('http://127.0.0.1:8000/categorias')
      .then(response => {
        this.setState({ categories: response.data });
      })
      .catch(error => {
        console.error('Error al obtener las categorías:', error);
      });
  }

  render() {
    const { categories } = this.state;

    return (
      <div className="categories container py-4">
        <div className="row justify-content-center">
          {categories.slice(0, 2).map(category => (
            <div key={category.id} className="col-md-6">
              <div className="category text-center">
                <h3>{category.nombre}</h3>
                <img src={category.imagen} alt={category.nombre} />
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  }
}

export default Categories;
