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
              key={link.id}
              className="mx-3 relative"
              onMouseEnter={() => handleHover(link.name)}
              onMouseLeave={() => setActiveLink("")}
            >
              <Link
                href={link.href}
                className={` ${
                  activeLink === link.name ? "text-secondary" : ""
                } transition-all flex items-center justify-center font-semibold text-sm hove`}
              >
                {link.name} <span className="px-2"></span>{" "}
              </Link>

              {activeLink === link.name && (
                <div className="absolute w-[20em] grid shadow-md rounded-2xl p-8  transition-all bg-primaryContrast z-50">
                  {link.subLinks.map((item, index) => {
                    return (
                      <Link key={item.id} href={item.href} className="py-4 hover:text-secondary opacity-70'">
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
