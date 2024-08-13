"use client";

import Link from "next/link";
import React, { useState } from "react";
import { links } from "@/app/utils/dataStructures";

const NavLinks = () => {
  const [activeLink, setActiveLink] = useState("");

  const handleHover = (name) => {
    setActiveLink(name);
    console.log(name);
  };

  return (
    <div>
      <div className="md:flex hidden">
        {links.map((link, index) => {
          return (
            <div
              key={link.name}
              className="mx-3 relative"
              onMouseEnter={() => handleHover(link.name)}
              onMouseLeave={() => setActiveLink("")}
            >
              <Link
                href={link.href}
                className={` ${
                  activeLink === link.name ? "text-gradient" : ""
                } transition-all flex items-center justify-center font-semibold text-sm hove`}
              >
                {link.name} <span className="px-2"></span>{" "}
              </Link>

              {activeLink === link.name && (
                <div className="absolute w-[20em] grid shadow-md rounded-2xl p-8  transition-all bg-white dark:bg-gradient-dark z-50">
                  {link.subLinks.map((item, index) => {
                    return (
                      <Link key={item.name} href={item.href} className="py-4 hover:text-gradient">
                        {item.name}
                      </Link>
                    );
                  })}
                </div>
              )}
            </div>
          );
        })}
      </div>
      <div></div>
    </div>
  );
};

export default NavLinks;
