import React from 'react'
import { assets } from '../assets/assets'
import Image from 'next/image'

const Heading = () => {
  return (
    <div className="flex items-center justify-between px-1 md:px-6 bg-white">
      {/* Left Logo */}
      <div className="flex items-center space-x-3">
        <Image
          src={assets.BL_Logo}
          alt="Balaji LifeCare Logo"
          className=" h-12 w-12 sm:h-24 sm:w-24 md:h-28 md:w-28"
          width={120}
          height={120}
          priority
        />
      </div>
      {/* Center Heading */}
      <div className="text-center flex-1">
        <h1 className="mt-1 text-3xl sm:text-5xl md:text-6xl font-semibold text-gray-900">
          JSA Hospital
        </h1>
        <p className="text-[10px] sm:text-xs md:text-base text-gray-500 italic">
          Excellence in Healthcare...
        </p>
      </div>

      {/* Right Language selector */}
      <div className="flex items-center">
        <select className="border border-gray-300 text-xs md:text-base px-0.5 py-0.5 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400">
          <option>English</option>
          <option>हिन्दी</option>
        </select>
      </div>
    </div>
  );
}

export default Heading
