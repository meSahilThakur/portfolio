"use client";
import Link from "next/link";
import React, { useState } from "react";
import NavLink from "./NavLink";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/solid";
import MenuOverlay from "./MenuOverlay";

import {FaFacebook, FaGithub, FaInstagram, FaLinkedin} from 'react-icons/fa';


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
    <nav className="fixed mx-auto border border-[#33353F] top-0 right-0 left-0 z-20 bg-[#121212] bg-opacity-90">
      <div className="flex container lg:py-4 flex-wrap justify-between items-center mx-auto px-4 py-2">
        <Link
          href={"/"}
          className="text-3xl md:text-5xl font-semibold text-secondary-500"
        >
          ST
        </Link>

        <div className="socials flex flex-row gap-2">
          <Link href={"https://github.com/meSahilThakur/"} target="_blank">
            <FaGithub className="h-8 w-8 hover:scale-110" />
          </Link>
          <Link href={"https://linkedin.com/in/meSahilThakur/"} target="_blank">
            <FaLinkedin className="h-8 w-8 bg-blue-700 rounded hover:scale-110" />
          </Link>
          <Link href={"https://instagram.com/me.sahilthakur?igshid=MzNINGNkZWQ4Mg=="} target="_blank">
            <FaInstagram className="h-8 w-8 bg-gradient-to-br from-purple-700 via-pink-500 to-yellow-500 rounded hover:scale-110" />
          </Link>
          <Link href={"https://facebook.com/sahil.thakur.5855594?mibextid=AQCFcj8imgCIWYJ5"} target="_blank">
            <FaFacebook className="h-8 w-8 bg-blue-700 rounded hover:scale-110" />
          </Link>
        </div>

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
      {navbarOpen ? <MenuOverlay links={navLinks}/> : null}
    </nav>
  );
};

export default Navbar;
