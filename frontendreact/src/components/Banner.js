import React from 'react';
import slide1 from '../assets/images/banner.jpg';
const Banner = () => {
  return (
    <section className="banner">
     <img className='img-fluid' src={slide1} alt="Prontapp" />
    </section>
  );
};

export default Banner;
