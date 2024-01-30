/* eslint-disable @next/next/no-img-element */
"use client"

// components/HeroSection.tsx

const HeroSection = () => {
    return (
      <div className="relative bg-gray-900 overflow-hidden h-[610px] ">
        {/* Background Image */}
        <img
          src="/hero.jpeg" // Replace with your actual image source
          alt="Hero Background"
          className="w-full h-full object-cover"
        />
  
        {/* Overlay */}
        <div className="absolute inset-0 bg-black opacity-50"></div>
  
        {/* Content */}
        <div className=" ml-2 absolute inset-0 flex flex-col items-start justify-center lg:ml-4 text-white top-10">
          {/* Divider */}
          <div className="w-24 h-px bg-white mb-4">
          
          </div>
  
          {/* Heading */}
          <h1 className="text-4xl md:text-5xl font-bold mb-4 text-brwn">Dar Ul Uloom Srinagar</h1>
  
          {/* Tagline */}
          <p className="  text-base md:text-lg mb-8 max-w-2xl mt-3">We are dedicated to providing a comprehensive and enriching educational experience in Islamic studies. Our esteemed faculty and well-rounded curriculum aim to instill not only a deep understanding of the Quran and Hadith but also foster critical thinking and character development.</p>
  
          {/* Additional Content (if needed) */}
          <div class="flex items-start justify-start gap-10 px-5 py-4 -mt-2">
          <ul class= "border-brwn bg-brwn  hover:border-brwn  hover:bg-black  group  -skew-x-[30deg] transform border">
    <li class="m-4 skew-x-[30deg] transform bg-transparent px-9 text-center first-letter:uppercase">
      <b class="block text-lg group-hover:text-white">Get Started</b>
    </li>
  </ul>
  </div>
          {/* <a
          href="#registration"
          className="bg-white text-blue-500 py-2 px-4 rounded-full font-semibold text-lg hover:bg-blue-700 hover:text-white transition duration-300"
        >
          Get Started
        </a> */}
          {/* ... */}
  
        </div>
      </div>
    );
  };
  
  export default HeroSection;
  


