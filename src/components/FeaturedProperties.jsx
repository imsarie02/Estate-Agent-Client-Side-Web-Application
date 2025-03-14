import React from 'react'
import { useState } from "react";
import properties from '../properties.jsx';
import Footer from "./Footer.jsx";
import PropertyModel from "./PropertyModel.jsx";
import { FaLocationDot, FaBed,FaBath, FaRuler } from 'react-icons/fa6';


const FeaturedProperties = ({ properties }) => {
  const [selectedProperty, setSelectedProperty] = useState(null);

  return (
    <div>
      <section className='max-w-7xl mx-auto py-16 px-4'>
        <h2 className='text-3xl font-bold md-8'>Featured Properties</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 mt-8">
          {properties.map((property) => (
            <div key={property.id} className='bg-white rounded-2xl drop-shadow-lg overflow-hidden hover:drop-shadow-xl hover:scale-105 transition-all duration-300 relative group cursor-pointer' 
              onClick={() => setSelectedProperty(property)}>
              
              <div className="relative">
                <img src={property.image} className='w-full h-72 object-cover group-hover:scale-105 transition-transform duration-300' />
                <button className='absolute top-4 right-4 p-2 font-semibold rounded-2xl bg-white/70 hover:bg-white transition-colors duration-200'>
                  {/* <FaHeart className='text-gray-600 hover:text-red-500 transition-colors duration-200'/> */}
                  Add to favorite
                </button>
              </div>

              <div className="p-6">

                <div className="flex items-center gap-2 text-gray-500 text-sm mb-3">
                  <FaLocationDot className='text-blue-600' />
                  <span>{property.location}</span>
                </div>

                <div className="text-2xl font-bold text-blue-600 mb-2">
                  {property.price}
                </div>

                <h3 className='text-xl font-semibold mb-4 text-gray-800'>{property.title}</h3>
              </div>

            </div>
          ))}
        </div>
      </section>

      {selectedProperty && (
        <PropertyModel properties={[selectedProperty]} onClose={() => setSelectedProperty(null)} />
      )}

      <Footer />
    </div>
  );
}

export default FeaturedProperties;

