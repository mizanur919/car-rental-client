import React, { useEffect, useState } from 'react';
import SingleService from '../SingleService/SingleService';
import './Services.css';

const Services = () => {
  const [services, setServices] = useState([]);
  useEffect(() => {
    fetch('./services.json')
      .then(res => res.json())
      .then(data => setServices(data))
  }, [])
  return (
    <div className="my-5">
      <h2 className="text-primary text-center">Our Exclusive Services</h2>
      <div className="container service-container my-5">
        {
          services.map(service => <SingleService
            key={service.id}
            service={service}
          ></SingleService>)
        }
      </div>

    </div>
  );
};

export default Services;
