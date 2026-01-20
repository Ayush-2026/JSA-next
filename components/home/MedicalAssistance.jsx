"use client";

import React from "react";
import Link from "next/link";
import { Stethoscope, TestTube2, PhoneCall } from "lucide-react";

const MedicalAssistance = ({ lang = "en" }) => {
  const cardBase =
    "rounded-xl bg-[#255C8D] text-white shadow-lg hover:shadow-xl hover:scale-105 transition flex flex-col items-center justify-center cursor-pointer";

  return (
    <section className="w-full bg-white">
      <div className="mx-auto max-w-6xl px-4 sm:px-8 py-10 sm:py-16 text-center">
        {/* Heading */}
        <h2 className="text-2xl sm:text-4xl md:text-5xl font-bold text-[#265957]">
          Need Medical Assistance? Take the First Step.
        </h2>
        <p className="mt-2 sm:mt-3 text-xs sm:text-lg font-medium text-gray-500">
          Advanced healthcare with modern technology
        </p>

        {/* Buttons */}
        <div className="mt-7 sm:mt-14 flex flex-wrap justify-center gap-4 sm:gap-12">
          <Link href={`/${lang}/consultation`}>
            <div
              className={`${cardBase} w-28 h-20 sm:w-48 sm:h-36 gap-2 sm:gap-3`}
            >
              <Stethoscope className="w-5 h-5 sm:w-9 sm:h-9" />
              <span className="text-[10px] sm:text-base font-semibold text-center px-2">
                Book Consultation
              </span>
            </div>
          </Link>

          <Link href={`/${lang}/book-tests`}>
            <div
              className={`${cardBase} w-28 h-20 sm:w-48 sm:h-36 gap-2 sm:gap-3`}
            >
              <TestTube2 className="w-5 h-5 sm:w-9 sm:h-9" />
              <span className="text-[10px] sm:text-base font-semibold text-center px-2">
                Book Test
              </span>
            </div>
          </Link>

          <a href="tel:+919999999999">
            <div
              className={`${cardBase} w-28 h-20 sm:w-48 sm:h-36 gap-2 sm:gap-3`}
            >
              <PhoneCall className="w-5 h-5 sm:w-9 sm:h-9" />
              <span className="text-[10px] sm:text-base font-semibold text-center px-2">
                Call Us
              </span>
            </div>
          </a>
        </div>
      </div>
    </section>
  );
};

export default MedicalAssistance;
