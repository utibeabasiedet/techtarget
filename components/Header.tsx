"use client";
import Image from "next/image";
import React, { useState } from "react";
import { navLinks } from "@/constants";
import Link from "next/link";
import { FaBarsStaggered } from "react-icons/fa6";
import { RxCross2 } from "react-icons/rx";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState<boolean>(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <div className="h-[13vh] relative w-full px-[7%] flex justify-between border-b-2 items-center">
      <div>
        <span className="font-bold">Target</span>
      </div>
      <div className="hidden lg:block">
        {navLinks.map((link) => (
          <Link className="ml-5 hover:text-[#02B68F] " key={link.label} href={link.href}>
            {link.label}
          </Link>
        ))}
      </div>
      <div className="lg:hidden">
        {/* Container to handle the transition between icons 09034567888 */}
        <div className="relative">
          <FaBarsStaggered
            onClick={toggleMenu}
            className={`transition-opacity duration-300 ${
              menuOpen ? "opacity-0" : "opacity-100"
            }`}
            style={{ position: "absolute" }}
          />
          <RxCross2
            onClick={toggleMenu}
            className={`transition-opacity duration-300 ${
              menuOpen ? "opacity-100" : "opacity-0"
            }`}
            style={{ position: "absolute" }}
          />
        </div>
      </div>
      {/* Navigation Menu */}
      <div
        className={`bg-black flex flex-col left-0 h-[77vh] w-[70vw] absolute top-[13vh] transform transition-transform duration-500 ease-in-out ${
          menuOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        {navLinks.map((link) => (
          <Link className="py-2 border-b-2 text-white  hover:text-[#02B68F]  text-center" key={link.label} href={link.href}>
            {link.label}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Header;
