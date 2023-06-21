import React, { Component } from 'react';
import axios from 'axios';

class ServiceList extends Component {
  state = {
    services: []
  };

  componentDidMount() {
    axios.get('http://127.0.0.1:8000/servicios')
      .then(response => {
        this.setState({ services: response.data });
      })
      .catch(error => {
        console.error('Error al obtener los servicios:', error);
      });
  }

  render() {
    const { services } = this.state;

    return (
      <div className='container py-4'>
        <div className="service-list row">
        <h3 className='mb-5'>Nuestros Servicios</h3>
            {services.map(service => (
              <div key={service.id} className="col-md-3">
                <div className="service">
                <img src={`http://127.0.0.1:8000${service.imagen}`} alt={service.nombre} className="img-fluid" />
                  <h3>{service.nombre}</h3>
                  <p>{service.descripcion}</p>
                  <span>${service.precio}</span>
                </div>
              </div>
            ))}
        </div>
      </div>
    );
  }
}

export default ServiceList;
