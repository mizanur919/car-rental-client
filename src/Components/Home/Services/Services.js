import React, { useEffect, useState } from 'react';
import SingleService from '../SingleService/SingleService';
import './Services.css';

const Services = () => {
  const [services, setServices] = useState([]);
  useEffect(() => {
    fetch('https://secure-ocean-93032.herokuapp.com/services')
      .then(res => res.json())
      .then(data => setServices(data))
  }, [])
  return (
    <div className="p-5" id="services">
      <div className="container">
        <h2 className="text-primary text-center">Our Exclusive Services</h2>
        <div className="row row-cols-1 row-cols-lg-3 row-cols-md-2 g-4">
          {
            services.map(service => <SingleService
              key={service.id}
              service={service}
            ></SingleService>)
          }
        </div>
      </div>
    </div>
  );
};

export default Services;
