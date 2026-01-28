import React from 'react';
import procedure from '../data/prodecure';
import { Link } from 'react-router-dom';
// import useFrontPackage from '../hooks/frotendHook/useFrontPackage';
const Procedures = () => {
  // const {frontPackage} = useFrontPackage();
  return (
    <section className="bg-gray-800 text-white py-24 px-6 font-josefin">
        <div className=' mx-auto text-center mb-10'>
            <p className='font-extrabold text-[35px]'>Popular Procedures</p>
            <p className='text-center'>These procedures are the best and most loved by our customers.</p>
        </div>
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-y-20 gap-x-10">
        {procedure.map((service) => (
          <div key={service.id} className="group relative flex flex-col items-center">
            {/* 1. Circular Image Container */}
            <div className="relative z-20 w-64 h-64 md:w-72 md:h-72 lg:w-80 lg:h-80 overflow-hidden rounded-full border-8 border-white shadow-xl transition-transform duration-500 group-hover:scale-105">
              <img 
                src={service.image} 
                alt={service.title} 
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
            </div>

            {/* 2. Content Card */}
            <div className="bg-gray-100 -mt-32 pt-44 pb-12 px-8 rounded-sm text-center flex flex-col items-center w-full max-w-sm transition-shadow duration-300 group-hover:shadow-md">
              <h3 className="text-gray-800 text-2xl font-bold mb-4 uppercase ">
                {service.title}
              </h3>
              <p className="text-gray-700 text-sm leading-relaxed mb-8 h-24 md:h-20">
                {service.description}
              </p>
              
              {/* Read More Button */}
              <button className="cursor-pointer border border-gray-800 text-gray-900 px-10 py-2.5 rounded-full text-xs font-bold tracking-widest uppercase hover:bg-gray-800 hover:text-white transition-all duration-300 active:scale-95">
                <Link to = {service.path}>{service.label}</Link>
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Procedures;