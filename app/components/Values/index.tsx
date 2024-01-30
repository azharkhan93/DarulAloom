/* eslint-disable react/jsx-no-duplicate-props */
/* eslint-disable @next/next/no-img-element */
// components/KeyValues.js
import React from 'react';
import Image from 'next/image';

const KeyValues = () => {
    return (
        <>
            {/* <h2 className="text-base font-semibold leading-7 text-green-600">Our Values & Objectives </h2> */}
            <div className="overflow-hidden bg-white py-24 sm:py-32">

                <div className="mx-auto max-w-7xl px-6 lg:px-8">
                    <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2">
                        <div className="lg:pr-8 lg:pt-4">
                            <div className="lg:max-w-lg">

                                <p className="mt-2 text-3xl font-bold tracking-tight text-brwn sm:text-4xl">Our Values & Objectives </p>
                                <p className="mt-6 text-lg leading-8 text-brwn">We uphold the value of knowledge as a guiding light. We believe in the transformative power of education rooted in the teachings of the Quran and Sunnah. Our commitment to knowledge extends beyond academic excellence, fostering a deep understanding of Islamic principles and promoting lifelong learning</p>
                                <dl className="mt-10 max-w-xl space-y-8 text-base leading-7 text-gray-600 lg:max-w-none">
                                    <div className="relative pl-9">
                                        <dt className="inline text-2xl text-brwn">
                                            <svg className="absolute left-1 top-1 h-5 w-5 text-red-600" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                                                <path clipRule="evenodd" d="M5.5 17a4.5 4.5 0 01-1.44-8.765 4.5 4.5 0 018.302-3.046 3.5 3.5 0 014.504 4.272A4 4 0 0115 17H5.5zm3.75-2.75a.75.75 0 001.5 0V9.66l1.95 2.1a.75.75 0 101.1-1.02l-3.25-3.5a.75.75 0 00-1.1 0l-3.25 3.5a.75.75 0 101.1 1.02l1.95-2.1v4.59z" clipRule="evenodd" />
                                                <circle cx="10" cy="10" r="1.5" fill="currentColor" />
                                            </svg>
                                            Our Vision:
                                        </dt>
                                        <dd className="inline"> Our vision includes fostering an environment that nurtures spiritual growth and a deep connection to Islamic values</dd>
                                    </div>
                                    <div className="relative pl-9">
                                        <dt className="inline text-2xl text-brwn ">
                                            <svg className="absolute left-1 top-1 h-5 w-5 text-yellow-600" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                                                <path d="M10 1a4.5 4.5 0 00-4.5 4.5V9H5a2 2 0 00-2 2v6a2 2 0 002 2h10a2 2 0 002-2v-6a2 2 0 00-2-2h-.5V5.5A4.5 4.5 0 0010 1zm3 8V5.5a3 3 0 10-6 0V9h6z" />
                                            </svg>
                                            Our Mission:
                                        </dt>
                                        <dd className="inline"> Our mission is to be a beacon of hope and positive change in the lives of individuals and the community. Grounded in the teachings of the Quran and Sunnah.</dd>
                                    </div>

                                    <div className="relative pl-9">
                                        <dt className="inline text-2xl text-brwn">
                                            <svg className="absolute left-1 top-1 h-5 w-5 text-orange-600" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                                                <path d="M4.632 3.533A2 2 0 016.577 2h6.846a2 2 0 011.945 1.533l1.976 8.234A3.489 3.489 0 0016 11.5H4c-.476 0-.93.095-1.344.267l1.976-8.234z" />
                                                <path d="M4 13a2 2 0 100 4h12a2 2 0 100-4H4zm11.24 2a.75.75 0 01.75-.75H16a.75.75 0 01.75.75v.01a.75.75 0 01-.75.75h-.01a.75.75 0 01-.75-.75V15zm-2.25-.75a.75.75 0 00-.75.75v.01c0 .414.336.75.75.75H13a.75.75 0 00.75-.75V15a.75.75 0 00-.75-.75h-.01z" />
                                            </svg>
                                            Our Goals:
                                        </dt>
                                        <dd className="inline"> Foster a deep connection to Islamic values Provide a caring and supportive home Develop sustainable fundraising initiatives.</dd>
                                    </div>
                                </dl>
                            </div>
                        </div>
                        <div>
      <Image
        src="/un.png"
        alt="Product screenshot"
        className="lg:w-[900px]  lg:h-[500px]  lg:mt-24   h-[260px] rounded-xl shadow-xl ring-1 ring-gray-400/10  md:-ml-4 lg:ml-10"
        width={500}
        height={900}
      />
    </div>
                        {/* <img src="/un.png" alt="Product screenshot" className="rounded-xl shadow-xl ring-1 ring-gray-400/10 sm:w-[57rem] md:-ml-4 lg:-ml-0" /> */}
                    </div>
                </div>
            </div>
            </>
    );
};

export default KeyValues;
