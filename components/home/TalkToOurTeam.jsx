"use client";

import React from "react";
import Image from "next/image";

export default function TalkToOurTeam() {
  return (
    <section className="w-full py-12 sm:py-16 bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-8">
        <div className="bg-[#295D8B] text-white rounded-2xl overflow-hidden shadow-xl">
          <div className="grid grid-cols-1 md:grid-cols-2 items-stretch">
            {/* Left: Form */}
            <div className="p-6 sm:p-10">
              <p className="text-sm sm:text-base opacity-90">
                Need more help finding information?
              </p>

              <h2 className="mt-1 text-2xl sm:text-4xl font-bold">
                Talk to Our Team
              </h2>

              {/* Inputs row */}
              <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {/* Name */}
                <input
                  type="text"
                  placeholder="Name"
                  className="h-11 rounded-md border border-white/40 bg-white/10 px-3 text-white placeholder:text-white/70 outline-none focus:ring-2 focus:ring-white/40"
                />

                {/* Mobile + Send OTP */}
                <div className="flex">
                  <input
                    type="tel"
                    placeholder="Mobile Number"
                    className="h-11 w-full rounded-l-md border border-white/40 bg-white/10 px-3 text-white placeholder:text-white/70 outline-none focus:ring-2 focus:ring-white/40"
                  />
                  <button
                    type="button"
                    className="h-11 whitespace-nowrap rounded-r-md bg-white px-4 text-sm font-semibold text-[#295D8B] hover:bg-gray-100 transition"
                  >
                    Send OTP
                  </button>
                </div>

                {/* OTP + Resend */}
                <div>
                  <input
                    type="text"
                    placeholder="Enter OTP"
                    className="h-11 w-full rounded-md border border-white/40 bg-white/10 px-3 text-white placeholder:text-white/70 outline-none focus:ring-2 focus:ring-white/40"
                  />
                  <button
                    type="button"
                    className="mt-2 text-xs underline opacity-90 hover:opacity-100"
                  >
                    Resend OTP
                  </button>
                </div>
              </div>

              {/* Checkbox */}
              <label className="mt-5 flex items-center gap-3 text-sm sm:text-base">
                <input
                  type="checkbox"
                  className="h-4 w-4 rounded border-white/40"
                />
                <span className="opacity-95">
                  Do you wish to receive updates through emails.
                </span>
              </label>

              {/* Submit */}
              <button
                type="button"
                className="mt-5 h-11 w-40 rounded-md bg-white text-sm font-semibold text-black hover:bg-gray-200 transition"
              >
                Submit
              </button>
            </div>

            {/* Right: Image */}
            <div className="relative min-h-[220px] md:min-h-full bg-[#295D8B]">
              {/* Put image in /public/assets/team-doctor.png or update src */}
              <Image
                src="/assets/team-doctor.png"
                alt="Doctor"
                fill
                className="object-contain object-right-bottom"
                priority
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
