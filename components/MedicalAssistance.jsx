'use client'
import React from 'react'
import { assets } from '../assets/assets';

const MedicalAssistance = () => {
  return (
    <div className="mt-7 sm:mt-10 flex-1  text-center  mb-12">
      <div className="text-[#265957] text-4xl font-bold">
        <h2 className="text-[17px] sm:text-2xl md:text-4xl font-bold text-[#265957] text-center leading-tight">
          Need Medical Assistance? Take the First Step.
        </h2>
        <p className="mt-1 text-gray-500 text-[10px] sm:text-[14px] font-medium">
          Advanced healthcare with modern technology
        </p>
      </div>

      <div className="flex justify-center gap-6 sm:gap-9 flex-wrap mt-4 sm:mt-12">
        {/* Button 1 */}
        <button className="flex flex-col items-center justify-center gap-1 bg-[#255C8D] text-white py-2 px-3 w-20 h-15 sm:w-36 sm:gap-4 sm:h-28 rounded-lg hover:scale-105 hover:shadow-lg transition-all duration-300 shadow-md">
          <img
            src={assets.consultation}
            className="w-6 h-6 sm:w-8 sm:h-8 object-contain"
          />
          <span className="text-[10px] sm:text-xs font-medium leading-tight text-center">
            Book Consultation
          </span>
        </button>

        {/* Button 2 */}
        <button className="flex flex-col items-center justify-center gap-3 bg-[#255C8D] text-white py-2 px-3 w-20 h-15 sm:gap-4 sm:w-36 sm:h-28 rounded-lg hover:scale-105 hover:shadow-lg transition-all duration-300 shadow-md">
          <img
            src={assets.tests}
            className="w-6 h-6 sm:w-8 sm:h-8 object-contain"
          />
          <span className="text-[10px] sm:text-xs font-medium leading-tight text-center">
            Book Test
          </span>
        </button>

        {/* Button 3 */}
        <button className="flex flex-col items-center justify-center gap-3 bg-[#255C8D] text-white py-2 px-3 w-20 h-15 sm:w-36 sm:gap-4 sm:h-28 rounded-lg hover:scale-105 hover:shadow-lg transition-all duration-300 shadow-md">
          <img
            src={assets.doctor}
            className="w-6 h-6 sm:w-8 sm:h-8 object-contain"
          />
          <span className="text-[10px] sm:text-xs font-medium leading-tight text-center">
            Find Doctor
          </span>
        </button>
      </div>
    </div>
  );
}

export default MedicalAssistance
