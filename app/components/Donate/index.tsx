/* eslint-disable @next/next/no-img-element */

import React from 'react'


const PromoSection1 = () => {
  return (
    <div className="relative mx-auto w-full mt-1  ">
  <div className="relative py-16 sm:py-28 px-4 flex justify-center items-center bg-gradient-to-br from-gray-700 to-gray-900 h-[550px]">

    {/* :IMAGE BACKGROUND */}
    <img src="/un.png" alt="" className="absolute inset-0 w-full h-full object-cover" />

    {/* :OVERLAY */}
    <div className="absolute inset-0 bg-black opacity-50 h-[550px]"></div>

    {/* :PROMO */}
    <div className="relative max-w-2xl flex flex-col justify-center items-center text-center z-10">
      {/* ::Title */}
      <h2 className="text-2xl sm:text-l md:text-5xl text-white  tracking-wide">Support <span className='italic text-brwn font-normal'>Our Cause</span></h2>
      {/* ::Text */}
      <p className="mt-3 lg:text-xl sm:text-base text-white font-medium">Help us continue our noble mission to provide education and support to those in need. Your generous donations make a significant impact on the lives of many.</p>
      {/* ::Button */}
      <a href="#link" className="mt-6 py-2.5 px-6 shadow rounded bg-gray-50 text-sm sm:text-base text-gray-700 font-semibold hover:shadow-lg hover:bg-white hover:text-gray-900">Donate Now..</a>
    </div>

  </div>
</div>

  )
}

export default PromoSection1;
