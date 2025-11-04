'use client'
import React from 'react'
import Link from 'next/link';
import { Search } from 'lucide-react';
import { useState } from 'react';

const Navbar = () => {

  const [showSearch, setShowSearch] = useState(false);

  return (
    <nav className="overflow-x-auto whitespace-nowrap font-bold mt-5 sm:mt-4">
      <div className="flex flex-wrap items-center justify-center gap-1 sm:gap-3 md:gap-7 text-[8px] sm:text-xs md:text-sm px-2 sm:px-6 md:px-16 lg:px-32 text-gray-700">
        <Link
          href="/about-us"
          className="px-2 py-1 rounded-full hover:bg-blue-100 hover:text-blue-800 transition-all duration-300 ease-in-out"
        >
          About Us
        </Link>
        <Link
          href="/find-a-doctor"
          className="px-2 py-1 rounded-full hover:bg-blue-100 hover:text-blue-800 transition-all duration-300 ease-in-out"
        >
          Find a Doctor
        </Link>
        <Link
          href="/departments"
          className="px-2 py-1 rounded-full hover:bg-blue-100 hover:text-blue-800 transition-all duration-300 ease-in-out"
        >
          Departments
        </Link>
        <Link
          href="/book-tests"
          className="px-2 py-1 rounded-full hover:bg-blue-100 hover:text-blue-800 transition-all duration-300 ease-in-out"
        >
          Book Tests
        </Link>
        {/* Search Icon */}

        <div className="relative flex items-center ">
          <input
            className=" border-1 text-gray-500 rounded-3xl pl-1 border-black"
            type="text"
            placeholder="Search for doctors..."
          />
          <Search className="w-4 h-4 sm:w-5 sm:h-5 text-gray-600 hover:text-blue-700" />
          <button
            onClick={() => setShowSearch(!showSearch)}
            className=" rounded-full hover:bg-blue-100 transition-all duration-300 ease-in-out"
          ></button>
        </div>
      </div>
    </nav>
  );
}

export default Navbar
