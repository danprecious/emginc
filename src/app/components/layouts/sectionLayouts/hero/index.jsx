"use client";

import CustomButton from "@/app/components/globals/customButton";
import React from "react";
import { motion } from "framer-motion";

const Hero = () => {
  const stats = [
    {
      id: 1,
      figure: "50K",
      description: "Happy customers",
    },
    {
      id: 2,
      figure: "80K",
      description: "Total transactions",
    },
    {
      id: 3,
      figure: "10+",
      description: "Years of experience",
    },
  ];

  return (
    <div className="col-center-center md:mt- lg:mt-12 mt-6">
      
      <motion.div
        initial={{ opacity: 0, x: 100 }}
        animate={{ opacity: 1, x: 0 }}
        exit={{ opacity: 0, x: -100 }}
        transition={{ duration: 0.5 }}
      >
        <div className="text-center py-5 col-center-center">
          <div className="lg:text-[1.5rem]  flex md:w-[70%] md:text-[2rem] col-center-center text-[0.9rem] font-semibold md:leading-tight leading-[3rem]">
            <h3 className="md:mb-[-1em]">We create exponential</h3>
            <h1 className="lg:text-[10rem] md:text-[4em] flex  text-[4.5rem] p-3 big-text font-black">
              gr
              <span className=" px-2 flex items-center">
                <div className="lg:w-[1.4em] w-[1.2em] rounded-[4em] lg:h-[.7em] h-[.6em] relative mb-[-.1em] bg-gradient flex justify-center items-center">
                  <div className="lg:w-[1em] w-[0.9em] rounded-[4em] lg:h-[.3.5em] h-[.3em]  dark:bg-black bg-white"></div>
                  <div className="h-[.5em] rounded-full w-[.5em] lg:w-[.6em] lg:h-[.6em] flex justify-center items-center left-[.5px] absolute dark:bg-black bg-white shadow-black shadow-2xl hover:translate-x-[100%] transition-all">
                    <div className="h-[.5em] rounded-full w-[.5em] lg:w-[90%] lg:h-[90%] left-[.5px] dark:bg-black bg-white shadow-black shadow-sm"></div>
                  </div>
                </div>
              </span>
              wth
            </h1>{" "}
            in your business
          </div>
        </div>
      </motion.div>

      <div className="col-center-center my-4 py-5 md:my-0">
        <p className="text-xs md:text-sm text-center md:w-[70%] px-5">
          <span className="text-gradient text-[1.5em]">...</span>Unlock your
          brand’s potential with innovative strategies and tailored solutions
          that drive results and elevate your market presence
        </p>
        <div className="my-4 py-3">
          <CustomButton href="/contactUs" text="Have a project?" />
        </div>
      </div>

      <div className="md:row-center-center col-center-center">
        {stats.map((stat, index) => {
          return (
            <div key={stat.id} className="col-center-center mx-8 my-4">
              <p className=" font-black text-[1.5rem] text-gradient">
                {stat.figure}
              </p>
              <p>{stat.description}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Hero;
