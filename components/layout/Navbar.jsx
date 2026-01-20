"use client";

import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Search } from "lucide-react";

const Navbar = ({ lang }) => {
  const pathname = usePathname();

  // Navbar items (ONLY these can be active)
  const navItems = [
    { label: "About Us", path: "/about-us" },
    { label: "Find a Doctor", path: "/doctors" },
    { label: "Departments", path: "/departments" },
    { label: "Book Tests", path: "/book-tests" },
  ];

  const linkBase =
    "px-2 py-1 rounded-full transition-all duration-300 ease-in-out";
  const activeClass = "bg-blue-600 text-white";
  const inactiveClass = "hover:bg-blue-100 hover:text-blue-800 text-gray-700";

  return (
    <nav className="overflow-x-auto whitespace-nowrap font-bold mt-5 sm:mt-8 bg-white">
      <div className="flex flex-wrap items-center justify-center gap-1 sm:gap-3 md:gap-6 text-[8px] sm:text-xs md:text-xl px-2 sm:px-6 md:px-16 lg:px-32">
        {navItems.map((item) => {
          const href = `/${lang}${item.path}`;
          const isActive = pathname === href; // EXACT match only

          return (
            <Link
              key={item.path}
              href={href}
              className={`${linkBase} ${
                isActive ? activeClass : inactiveClass
              }`}
            >
              {item.label}
            </Link>
          );
        })}

        {/* Search */}
        
      </div>
    </nav>
  );
};

export default Navbar;
