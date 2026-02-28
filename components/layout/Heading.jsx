import React from "react";
import Image from "next/image";
import Link from "next/link";

const Heading = ({ lang = "en" }) => {
  return (
    <div className=" mt-7 flex items-center justify-between px-1 md:px-6 bg-white">
      {/* Left Logo (click → home) */}
      <Link href={`/${lang}`} className="flex items-center space-x-3">
        <Image
          src="/logo.png" // put logo inside /public
          alt="Balaji LifeCare Logo"
          className="h-12 w-12 sm:h-24 sm:w-24 md:h-28 md:w-28 cursor-pointer"
          width={120}
          height={120}
          priority
        />
      </Link>

      {/* Center Heading */}
      <div className="text-center flex-1">
        <h1 className="mt-3 text-3xl sm:text-5xl md:text-7xl font-semibold text-gray-900">
          JSA Hospital
        </h1>
        <p className="text-[10px] font-bold sm:text-xs md:text-[35px] mt-1 text-black italic">
          (Unit of Balaji LifeCare India Limited)
        </p>
      </div>

      {/* Right Language selector (we'll wire this later) */}
      <div className="flex items-center">
        <select className="border border-black text-xs md:text-base px-1 py-0.5 rounded-md focus:outline-none focus:ring-2 text-black focus:ring-blue-400">
          <option value="en">English</option>
          <option value="hi">हिन्दी</option>
          <option value="mr">Marathi</option>
        </select>
      </div>
    </div>
  );
};

export default Heading;
