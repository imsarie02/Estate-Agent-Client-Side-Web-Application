import React, { useState } from 'react';
import homeImage1 from "../../public/homeImage1.jpg";
import properties from '../properties.jsx';
import FeaturedProperties from './FeaturedProperties'; // Import the FeaturedProperties component

const Home = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [propertyType, setPropertyType] = useState('');
  const [filteredProperties, setFilteredProperties] = useState(properties);

  // Handle search input change
  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value);
  };

  // Handle property type change
  const handleTypeChange = (e) => {
    setPropertyType(e.target.value);
  };

  // Handle search button click
  const handleSearch = () => {
    const filtered = properties.filter(property => {
      const matchesQuery = property.postcode.includes(searchQuery);
      const matchesType = propertyType ? property.type === propertyType : true;
      return matchesQuery && matchesType;
    });
    setFilteredProperties(filtered);
  };

  return (
    <div className='relative h-[100vh]'>
      {/* Background image */}
      <img src={homeImage1} className='w-full h-full object-cover' alt="" />

      {/* Gradient overlay */}
      <div className='absolute inset-0 bg-gradient-to-t from-black/50 via-black/30 to-black/50'></div>

      {/* Text content */}
      <div className='absolute inset-0 flex flex-col items-center justify-center text-center text-white px-4 z-10'>
        <h1 className='text-5xl sm:text-6xl md:text-7xl font-bold mb-4 bg-gradient-to-r from-sky-300 via-sky-300 to-indigo-300 bg-clip-text text-transparent tracking-tight p-3'>
          Search smarter, live better
        </h1>

        <p className='text-lg md:text-2xl mb-8 text-gray-200'>
          Find your dream home effortlessly with the best property choices
        </p>

        {/* Search box */}
        <div className='bg-white/30 p-6 rounded-3xl shadow-2xl backdrop-blur-md max-w-2xl w-full mx-auto'>
          <div className='flex flex-col md:flex-row gap-3'>
            <input 
              type="text" 
              placeholder='Search by postcode area'
              value={searchQuery}
              onChange={handleSearchChange}
              className='flex-1 px-6 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 hover:border-blue-500 hover:bg-blue-50 focus:bg-white text-black transition-colors duration-200' 
            />

            <select 
              value={propertyType}
              onChange={handleTypeChange}
              className='px-4 py-3 rounded-lg text-gray-700 border border-gray-300 focus:outline-none focus:ring-blue-500 hover:border-blue-500'
            >
              <option value="">All Types</option>
              <option value="House">House</option>
              <option value="Apartment">Apartment</option>
              <option value="Villa">Villa</option>
              <option value="Bungalow">Bungalow</option>
              <option value="Retreat">Retreat</option>
              <option value="Commercial property">Commercial property</option>
            </select>

            <button 
              onClick={handleSearch}
              className='bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors'
            >
              Search
            </button>
          </div>
        </div>
      </div>

      {/* Featured Properties */}
      <FeaturedProperties properties={filteredProperties} />
    </div>
  );
}

export default Home;

