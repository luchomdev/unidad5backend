import React from 'react';
import logo from '../assets/images/logo-oficialv1.jpg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLocationDot } from '@fortawesome/free-solid-svg-icons'
import { faUser } from '@fortawesome/free-regular-svg-icons'
import { faBars } from '@fortawesome/free-solid-svg-icons'
import { faBell } from '@fortawesome/free-solid-svg-icons'
import { faCartShopping } from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom';


function Header() {
  return (

      <header>
        
        <section className="header-main py-2">
          <div className='container'>
            <div className='row'>
              <div className='col-lg-2  d-flex align-items-center'>
                <div className="logo"><img className='img-fluid' src={logo} alt="Prontapp" /></div>
              </div>
              <div className='col-lg-2  d-flex align-items-center'>
                <div className="location"> <FontAwesomeIcon icon={faLocationDot} /> Ingresa tu Ubicación</div>
              </div>
              <div className='col-lg-6'>
              <div className="search">
                  <form class="d-flex" role="search">
                    <input class="form-control me-2" type="search" placeholder="Que estas buscando para tu vehículo..." aria-label="Search" />
                    <button class="btn btn-outline-success" type="submit">Buscar</button>
                  </form>
                </div>
              </div>
              <div className='col-lg-2  d-flex align-items-center text-center'>
                <div className="login"><Link to="/login"> <FontAwesomeIcon icon={faUser} /> Iniciar Sesión</Link></div>
              </div>
            </div>
          </div>
        </section>

      
        <section className="header-menu py-2">
        <div className='container'>
            <div className='row'>
              <div className='col-lg-2 d-flex align-items-center'>
                <div className="menu-icon"><button type="button" class="btn btn-primary"><FontAwesomeIcon icon={faBars} /> Categorías </button></div>
              </div>
              <div className='col-lg-8'>
                <div className="nav">
                  <nav class="navbar navbar-expand-lg text-center">                   
                      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                      </button>
                      <div class="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                          <li class="nav-item">
                            <a class="nav-link active" aria-current="page" href="#">Ofertas</a>
                          </li>
                          <li class="nav-item">
                            <Link class="nav-link" to="/carros">Carros</Link>
                          </li>
                          <li class="nav-item">
                            <a class="nav-link" href="#">Motos</a>
                          </li>
                          <li class="nav-item">
                            <a class="nav-link" href="#">Aliados</a>
                          </li>
                          <li class="nav-item">
                            <a class="nav-link" href="#">Tus Vehículos</a>
                          </li>
                          <li class="nav-item">
                            <a class="nav-link" href="#">Vende con Prontapp</a>
                          </li>
                          <li class="nav-item">
                            <a class="nav-link" href="#">Mis Compras</a>
                          </li>
                          <li class="nav-item">
                            <a class="nav-link" href="#">Ayuda</a>
                          </li>
                        </ul>
                      </div>
                  </nav>
                
                </div>
              </div>
              <div className='col-lg-1 d-flex align-items-center text-center'>
                <div className="notifications"><FontAwesomeIcon icon={faBell} /> </div>
              </div>
              <div className='col-lg-1 d-flex align-items-center text-center'>
                <div className="cart"><FontAwesomeIcon icon={faCartShopping} /></div>
              </div>
            </div>
          </div>
        </section>
      </header>

  
  );
}

export default Header;
