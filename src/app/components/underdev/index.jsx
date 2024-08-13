import Link from "next/link";
import React from "react";
import { FaSmileWink } from "react-icons/fa";

const UnderDev = ({href, subText}) => {
  return (
    <section className="flex justify-center items-center h-[40vh] p-4">
      <div className="text-center">
        <div className="flex justify-center">
          <FaSmileWink className="lg:text-[7rem]  text-[4rem]" />
        </div>
        <h1 className="md:text-[5em] font-bold text-[3em] text-gradient">
          OOPS! Page not yet Here...
        </h1>
        <p className="text-sm py-7 line-through   font-bold">
          <Link className="hover:text-gradient" href={href}>{subText}</Link>
        </p>
      </div>
    </section>
  );
};

export default UnderDev;
