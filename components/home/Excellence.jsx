"use client";

import React, { useMemo, useState, useEffect } from "react";
import Link from "next/link";
import { ChevronLeft, ChevronRight } from "lucide-react";

function getVisibleCount() {
  if (typeof window === "undefined") return 4; // default for SSR
  const w = window.innerWidth;
  if (w < 640) return 1; // mobile
  if (w < 1024) return 2; // tablet / small laptop
  return 4; // desktop
}

export default function Excellence({ lang = "en", departments = [] }) {
  const items = useMemo(() => departments.slice(0, 6), [departments]);

  const [visibleCount, setVisibleCount] = useState(4);
  const [index, setIndex] = useState(0);

  // Update visible count on resize
  useEffect(() => {
    const update = () => setVisibleCount(getVisibleCount());
    update();
    window.addEventListener("resize", update);
    return () => window.removeEventListener("resize", update);
  }, []);

  const maxIndex = Math.max(0, items.length - visibleCount);
  const canPrev = index > 0;
  const canNext = index < maxIndex;

  // Keep index valid when visibleCount changes (e.g., rotate phone)
  useEffect(() => {
    setIndex((i) => Math.min(i, maxIndex));
  }, [maxIndex]);

  const visibleItems = items.slice(index, index + visibleCount);

  return (
    <section className="w-full bg-gradient-to-b from-[#eaf6ff] via-[#f6fbff] to-white py-10 sm:py-14">
      <div className="mx-auto max-w-6xl px-4 sm:px-8 text-center">
        <h2 className="text-2xl sm:text-4xl md:text-5xl font-bold text-[#265957] leading-tight">
          Explore Our Centres of Clinical Excellence
        </h2>
        <p className="mt-2 text-xs sm:text-sm md:text-base text-gray-600">
          Specialized departments with expert doctors and advanced technology
        </p>

        {/* Carousel */}
        <div className="mt-8 sm:mt-10 flex items-center justify-center gap-2 sm:gap-6">
          {/* Left */}
          <button
            onClick={() => canPrev && setIndex((i) => i - 1)}
            disabled={!canPrev}
            className={`h-9 w-9 sm:h-12 sm:w-12 rounded-full flex items-center justify-center shadow-md transition
              ${canPrev ? "bg-white hover:bg-gray-50" : "bg-white/60 opacity-50 cursor-not-allowed"}`}
            aria-label="Previous departments"
          >
            <ChevronLeft className="h-5 w-5 sm:h-6 sm:w-6 text-gray-700" />
          </button>

          {/* Cards container */}
          <div className="flex-1 overflow-hidden">
            <div
              className={`mx-auto flex justify-center ${
                visibleCount === 1 ? "gap-3" : "gap-3 sm:gap-6"
              }`}
            >
              {visibleItems.map((dept) => (
                <Link
                  key={dept.slug}
                  href={`/${lang}/departments/${dept.slug}`}
                  className={`${
                    visibleCount === 1
                      ? "w-[240px]"
                      : visibleCount === 2
                        ? "w-[200px]"
                        : "w-[220px]"
                  }`}
                >
                  <div className="bg-white rounded-xl shadow-lg hover:shadow-xl transition p-4 sm:p-5">
                    <div className="mx-auto h-12 w-12 sm:h-14 sm:w-14 rounded-full bg-gray-100 flex items-center justify-center text-xl sm:text-2xl">
                      {dept.icon || "🏥"}
                    </div>

                    <h3 className="mt-3 font-bold text-sm sm:text-base text-gray-900">
                      {dept.name}
                    </h3>

                    <p className="mt-1 text-[11px] sm:text-xs text-gray-500 line-clamp-2">
                      {dept.short_desc ||
                        "Specialized care & advanced treatment."}
                    </p>
                  </div>
                </Link>
              ))}
            </div>
          </div>

          {/* Right */}
          <button
            onClick={() => canNext && setIndex((i) => i + 1)}
            disabled={!canNext}
            className={`h-9 w-9 sm:h-12 sm:w-12 rounded-full flex items-center justify-center shadow-md transition
              ${canNext ? "bg-white hover:bg-gray-50" : "bg-white/60 opacity-50 cursor-not-allowed"}`}
            aria-label="Next departments"
          >
            <ChevronRight className="h-5 w-5 sm:h-6 sm:w-6 text-gray-700" />
          </button>
        </div>

        {/* View More */}
        <div className="mt-8 sm:mt-10">
          <Link href={`/${lang}/departments`}>
            <button className="border border-gray-700 px-5 py-2 rounded-xl text-sm sm:text-lg hover:bg-blue-500 hover:text-white transition">
              View More Departments
            </button>
          </Link>
        </div>
      </div>
    </section>
  );
}
