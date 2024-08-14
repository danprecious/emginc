"use client";

import React, { useContext } from "react";
import { RiCloseFill, RiMenu2Fill, RiMenuUnfold2Fill } from "react-icons/ri";
import { MobileNavContext } from "./context";
import { links } from "@/app/utils/dataStructures";
import Link from "next/link";
import CustomButton from "../../customButton";

export const MobileNavButton = () => {
  const { menuOpen, setMenuOpen } = useContext(MobileNavContext);

  return (
    <button
      onClick={() => setMenuOpen(!menuOpen)}
      className="absolute left-3 top-[34%] text-[1.3rem] lg:hidden"
    >
      {menuOpen === true ? (
        <RiCloseFill className="text-white" />
      ) : (
        <RiMenu2Fill />
      )}
    </button>
  );
};

export const MobileNavBody = () => {
  const { menuOpen, setMenuOpen } = useContext(MobileNavContext);

  return (
    menuOpen && (
      <div className="top-0 fixed h-full overflow-y-scroll w-full left-0 bg-black z-50 lg:hidden">
        <div className="flex justify-end relative my-5">
          <MobileNavButton />
        </div>

        <div className="w-full justify-center flex py-5 px-3">
          <CustomButton href="/contactUs" text="Get in touch" />
        </div>

        <div className="my-grid px-3 py-4">
          {links.map((link, index) => {
            return (
              <div key={link.id} className="text-white">
                <Link
                  href={link.href}
                  onClick={() => setMenuOpen(false)}
                  className="font-semibold text-[1.5rem] py-5"
                >
                  {link.name}
                </Link>
                <div className="flex flex-col">
                  {link.subLinks.map((item, index) => {
                    return (
                      <Link
                        key={item.id}
                        onClick={() => setMenuOpen(false)}
                        className="py-3 px-3"
                        href={item.href}
                      >
                        {item.name}
                      </Link>
                    );
                  })}
                </div>
              </div>
            );
          })}
        </div>

        <div className="font-bold text-gradient text-[2rem] py-4 px-4 ">
          Promotional marketing agency you can trust
        </div>
      </div>
    )
  );
};
