/* eslint-disable @next/next/no-img-element */
// Header.tsx
"use client"

// import React from 'react';
import React, { useCallback } from 'react';
import Image from 'next/image';
import Link from 'next/link';


const Header: React.FC = () => {
  const closeNav = useCallback(() => {
    const checkbox = document.getElementById('toggle_nav') as HTMLInputElement;
    if (checkbox) {
      checkbox.checked = false;
    }
  }, [])
  return (

    // <header className="  top-0 z-40 sticky w-full flex justify-center ">
      <nav className=" top-0 z-40 sticky  w-full  ">

        <div className="relative z-30 bg-white ">
          <div className="container m-auto md:px-12 lg:py-0 ">
            <div className="flex flex-wrap items-center justify-between gap-6 md:gap-0">
              <input type="checkbox" name="toggle_nav" id="toggle_nav" className="peer hidden" />
              <div className="w-full  flex justify-between md:w-max md:px-0 z-30 mix-blend-multiply">
                <Link href='/'>

                  <Image src="/logo3.jpg" alt="logo" width={80} height={10} className=" hidden dark:block  " />

                </Link>

                <div className="flex items-center md:hidden max-h-10">
                  <label role="button" htmlFor="toggle_nav" aria-label="humburger" id="hamburger" className=" relative p-2 mt-11 cursor-pointer">
                    <div
                      id="line"
                      className="m-auto h-0.5 w-6 rounded bg-black transition duration-300"
                    ></div>
                    <div
                      id="line2"
                      className="m-auto mt-2 h-0.5 w-6 rounded bg-black  transition duration-300"
                    ></div>
                    <div
                      id="line3"
                      className="m-auto mt-2 h-0.5 w-6 rounded bg-black transition duration-300"
                    ></div>
                  </label>
                </div>
              </div>
              <label
                htmlFor="toggle_nav"
                className="hidden peer-checked:block fixed w-full h-full left-0 top-0 z-10 bg-white bg-opacity-30 backdrop-blur backdrop-filter"
                onClick={closeNav}
              ></label>
              <div className="hidden z-40 peer-checked:flex w-11/12 mx-auto md:mx-0 flex-col justify-between items-center gap-y-8 p-6 rounded-xl bg-white dark:bg-gray-800 md:flex md:w-8/12 md:gap-y-0 md:gap-x-4 md:divide-x md:p-0 md:flex-row md:bg-transparent lg:w-7/12">
                <div className="block w-full md:w-max">
                  <ul className="gap-y-6 tracking-wide text-white font-medium flex flex-col md:flex-row md:gap-y-0">
                    <li>
                      <Link href="/">
                        <span className="block md:px-4">
                          <div className="relative text-green-600 before:absolute before:-bottom-2 md:before:-bottom-7 before:w-full before:mx-auto before:mt-auto before:rounded-t-full before:bg-green-500">
                            <span onClick={closeNav}>Home</span>
                          </div>
                        </span>
                      </Link>
                    </li>
                    {/* <li>
                          <a href="#" className="block md:px-4 group">
                            <div className="relative group before:absolute before:-bottom-2 md:before:-bottom-7 before:w-full before:h-0.5 before:origin-left before:mt-auto before:rounded-full before:bg-green-800 before:transition before:scale-x-0 group-hover:before:scale-x-100">
                              <span className="group-hover:text-green-500">Services</span>
                            </div>
                          </a>
                        </li> */}
                    <li>
                      <Link href='/about-us'>
                        <span className="block md:px-4 group">
                          <div className="relative group before:absolute before:-bottom-2 md:before:-bottom-7 before:w-full before:h-0.5 before:origin-left before:mt-auto before:rounded-full before:bg-green-800 before:transition before:scale-x-0 group-hover:before:scale-x-100">
                            <span className="group-hover:text-green-500" onClick={closeNav}>About</span>
                          </div>
                        </span>
                      </Link>
                    </li>
                    <li>
                      <Link href='/contact-us'>
                        <span className="block md:px-4 group">
                          <div className="relative group before:absolute before:-bottom-2 md:before:-bottom-7 before:w-full before:h-0.5 before:origin-left before:mt-auto before:rounded-full before:bg-green-800 before:transition before:scale-x-0 group-hover:before:scale-x-100">
                            <span className="group-hover:text-green-500" onClick={closeNav}>Contact</span>
                          </div>
                        </span>
                      </Link>
                    </li>
                    <li>
                      <Link href='/contact-us'>
                        <span className="block md:px-4 group">
                          <div className="relative group before:absolute before:-bottom-2 md:before:-bottom-7 before:w-full before:h-0.5 before:origin-left before:mt-auto before:rounded-full before:bg-green-800 before:transition before:scale-x-0 group-hover:before:scale-x-100">
                            <span className="group-hover:text-green-500" onClick={closeNav}>Supportus</span>
                          </div>
                        </span>
                      </Link>
                    </li>

                  </ul>
                </div>

                <div className="w-full pl-6 sm:w-max gap-4 flex min-w-max flex-col sm:flex-row">

                  <button
                    type="button"
                    title="donation"
                    className="w-full py-3 px-6 rounded-xl text-center transition bg-gradient-to-r from-blue-500 to-purple-500 border-2 border-gradient-to-r border-blue-500 border-purple-500 hover:bg-gradient-to-r hover:from-blue-600 hover:to-purple-600 active:bg-gradient-to-r active:from-blue-700 active:to-purple-700 focus:bg-gradient-to-r focus:from-blue-500 focus:to-purple-500 sm:w-max"
                  >
                    <span className="block text-white font-semibold">Donate Now</span>
                  </button>

                  <button
                    type="button"
                    title="donation "
                    className="w-full py-3 px-6 rounded-xl text-center transition dark:active:bg-green-900 dark:focus:bg-gray-800 active:bg-green-200 focus:bg-green-100 sm:w-max"
                  >
                    <span className="block text-green-600 dark:text-green-500 font-semibold">English</span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* <div
              aria-hidden="true"
              className="container h-4 -mt-6 mx-auto bg-green-600/30 dark:bg-green-900/30 blur md:-mt-4"
            ></div> */}
      </nav>
    // </header>
    //   </div>
    // </body>
  );
};

export default Header;
