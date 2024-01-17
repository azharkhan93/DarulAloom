/* eslint-disable @next/next/no-img-element */
/* eslint-disable react/no-unescaped-entities */


// Footer.tsx

import { FaFacebook, FaTwitter, FaInstagram, FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa';
import Image from 'next/image';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-800 text-white p-8">
      <div className="flex flex-wrap">
        
        {/* About Company Section (Left) */}
        <div className="w-full md:w-1/3">
          <h2 className="text-2xl font-bold mb-4">About Us</h2>
          <p>Your company description goes here. Lorem ipsum dolor sit amet, consectetur adipiscing elit.Your company description goes here. Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>
          {/* Social Media Icons */}
          <div className="mt-4 flex">
          <hr className="my-4 border-green-600" />
            <a href="#" className="text-white mr-4"><FaFacebook /></a>
            <a href="#" className="text-white mr-4"><FaTwitter /></a>
            <a href="#" className="text-white mr-4"><FaInstagram /></a>
            {/* <hr className="my-4 border-green-600" /> */}
          </div>
        </div>
  
        {/* Navigation Section (Center) */}
        <div className="w-full md:w-1/3">
          <h2 className="text-2xl font-bold mb-4 ml-20">Navigation</h2>
          <ul className='ml-24'>
            <li><a href="#">Home</a></li>
            <li><a href="#">About</a></li>
            <li><a href="#">Services</a></li>
            <li><a href="#">Contact</a></li>
          </ul>
          
        </div>
  
        {/* Contact Us Section (Right) */}
        <div className="w-full md:w-1/3 ">
          <h2 className="text-2xl font-bold mb-4 ">Contact Us</h2>
          <ul className='space-y-4' >
            <li className='flex mt-2'>
              <FaPhoneAlt />
              <span className="ml-2">123-456-7890</span>
            </li>
            <li className='flex '>
              <FaEnvelope />
              <span className="ml-2">info@example.com</span>
            </li >
            <li className='flex '>
              <FaMapMarkerAlt />
              <span className="ml-2">123 Street, City, Country</span>
            </li>
          </ul>
        </div>
      </div>
  
      {/* Divider */}
      <hr className="my-8 border-gray-600" />
  
      {/* Logo and Copyright Section */}
      <div className="flex items-center justify-center mix-blend-multiply">
        {/* Your Logo */}
        <Image src="/logo3.jpg" alt="logo" width={80} height={10} className=" hidden dark:block  " />
        {/* <p>&copy; 2024 Your Company. All rights reserved.</p> */}
      </div>
      <p className='text-center mt-8'>&copy; 2024 Your Company. All rights reserved.</p>
    </footer>
  );
};

export default Footer;


