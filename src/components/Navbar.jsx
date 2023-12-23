"use client";
import Link from "next/link";
import React, { useState } from "react";
import NavLink from "./NavLink";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/solid";

const navLinks = [
  {
    title: "About",
    path: "#about",
  },
  {
    title: "Projects",
    path: "#projects",
  },
  {
    title: "Contact",
    path: "#contact",
  },
];

const Navbar = () => {
  const [navbarOpen, setNavbarOpen] = useState(false);

  return (
    <nav className="fixed top-0 right-0 left-0 z-10 bg-[#121212] bg-opacity-90">
      <div className="flex flex-wrap justify-between items-center mx-auto px-4 py-2">
        <Link
          href={"/"}
          className="text-3xl md:text-5xl font-semibold text-white"
        >
          LOGO
        </Link>

        <div className="mobile-menu block md:hidden">
          {!navbarOpen ? (
            <button onClick={()=>setNavbarOpen(true)} className="flex items-center px-3 py-2 border rounded border-slate-200 text-slate-200 hover:text-white hover:border-white">
              <Bars3Icon className="w-5 h-5" />
            </button>
          ) : (
            <button  onClick={()=>setNavbarOpen(false)} className="flex items-center px-3 py-2 border rounded border-slate-200 text-slate-200 hover:text-white hover:border-white">
              <XMarkIcon className="w-5 h-5" />
            </button>
          )}
        </div>

        <div id="navbar" className="menu hidden md:block md:w-auto">
          <ul className="flex p-4 md:p-0 md:flex-row md:space-x-8 mt-0">
            {navLinks.map((link, index) => (
              <li key={index}>
                <NavLink href={link.path} title={link.title} />
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
