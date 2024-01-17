/* eslint-disable @next/next/no-img-element */
"use client"

// components/HeroSection.tsx

const HeroSection = () => {
    return (
      <div className="relative bg-gray-900 overflow-hidden h-[650px] mt-24">
        {/* Background Image */}
        <img
          src="/mad.webp" // Replace with your actual image source
          alt="Hero Background"
          className="w-full h-full object-cover"
        />
  
        {/* Overlay */}
        <div className="absolute inset-0 bg-black opacity-50"></div>
  
        {/* Content */}
        <div className="absolute inset-0 flex flex-col items-start justify-center px-8 text-white">
          {/* Divider */}
          <div className="w-8 h-px bg-white mb-4"></div>
  
          {/* Heading */}
          <h1 className="text-4xl md:text-6xl font-bold mb-4">Your Heading</h1>
  
          {/* Tagline */}
          <p className="text-lg md:text-xl mb-8">Your Tagline</p>
  
          {/* Additional Content (if needed) */}
          {/* ... */}
  
        </div>
      </div>
    );
  };
  
  export default HeroSection;
  


