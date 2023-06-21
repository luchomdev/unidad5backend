import React from 'react';

import Header from './Header';
import Banner from './Banner';
import Categories from './Categories';
import ProductList from './ProductList';
import ServiceList from './ServiceList';


const Home = () => {
  return (
    <div>
      <Header />
      <Banner />
      <Categories />
      <ProductList />
      <ServiceList />
    </div>
  );
};

export default Home;
