import React from 'react'
import { FaFacebook, FaInstagram, FaLinkedinIn, FaXTwitter } from 'react-icons/fa6'

const Footer = () => {
  return (
    <footer className='bg-gray-900 text-white py-12'>
      <div className='max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-4 gap-8'>

        <div>
          <h3 className='text-xl font-bold mb-4'>Property Finding Co.</h3>
          <p className='text-gray-400'>Your trusted partner in finding the perfect home.</p>
        </div>

        <div>
          <h4 className='font-bold mb-4'>Quick Links</h4>
          <ul className='space-y-2 text-gray-400 '>
            <li>Home</li>
            <li>Properties</li>
            <li>About us</li>
            <li>Contact</li>
          </ul>
        </div>

        <div>
          <h4 className='font-bold mb-4'>Contact Info</h4>
          <ul className='space-y-2 text-gray-400'>
            <li>221B Baker Street</li>
            <li>London, NW1 6XE</li>
            <li>propertyfind@gmail.com</li>
            <li>020 7946 1234.</li>
          </ul>
        </div>

        <div>
          <h4 className='font-bold mb-4'>Follow us</h4>

          <div className='flex space-x-4'>
            <a href="">
              <FaLinkedinIn className='text-gray-400 hover:text-white transition-colors duration-200 text-2xl cursor-pointer'/>
            </a>

            <a href="">
              <FaXTwitter className='text-gray-400 hover:text-white transition-colors duration-200 text-2xl cursor-pointer'/>
            </a>

            <a href="">
              <FaInstagram className='text-gray-400 hover:text-white transition-colors duration-200 text-2xl cursor-pointer'/>
            </a>

            <a href="">
              <FaFacebook className='text-gray-400 hover:text-white transition-colors duration-200 text-2xl cursor-pointer'/>
            </a>
          </div>
        </div>

      </div>
    </footer>
  )
}

export default Footer