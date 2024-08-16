"use client";

import localFont from "next/font/local";
import CustomButton from "@/app/components/globals/customButton";
import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";

const heroFont = localFont({
  // OpenSans-Bold.ttf,
  // helveticanowtext-black-demo.ttf
  src: "../../../../../../public/fonts/OpenSans-Bold.ttf",
  variable: "--font-heroFont",
});

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
    // {
    //   id: 4,
    //   figure: "10K",
    //   description: "Digital products",
    // },
  ];

  return (
    <div className="col-center-center  lg:mt-6 px-6">
      <div
        className={`${heroFont.variable} w-full lg:px-12 lg:py-10  mb-10 lg:flex justify-between`}
      >
        <div className="lg:w-[52%] flex justify-center flex-col items-center text-center lg:items-start lg:text-left">
          <h1 className="font-heroFon lg:text-[3.5rem] font-bold py-6 text-[3rem]">
            We help <span className="text-secondary">create</span> exponential growth in your <span className="text-secondary">business</span>
          </h1>
          <p className="text- lg:w-[80%] lg:my-3 opacity-90 ">
            Unlock your brand’s potential with innovative strategies and
            tailored solutions that drive results and elevate your market
            presence
          </p>

          <div className="my-6 flex lg:w-[50%]">
            <CustomButton text="Get started" href="/contactUs" />
          </div>
        </div>

        <div className="bg-secondary h-[70vh] lg:w-[45%] rounded-lg relative pt-2">
          <div className="absolute top-[-10px] right-[-20px] border-4 rounded-b-[2em] w-[10em] border-primaryContrast h-[7em] bg-primaryContrast"></div>
          <div className="absolute bottom-[-10px] left-[-20px] border-4 rounded-t-[2em] w-[10em] border-primaryContrast h-[7em] bg-primaryContrast"></div>
          <Image src='/pexels.webp' width={1000} height={1000} className= "w-full h-full object-cover" alt="Sales deal" />
        </div>
      </div>

      <div className="md:row-center-center w-full col-center-center bg-contrastShade py-10 rounded-xl px-5">
        {stats.map((stat, index) => {
          return (
            <div key={stat.id} className="text-center mx-4 transition-all hover:text-secondary my-4 bg-primary text-primaryContrast px-12 lg:w-[20%] w-full hover:grow py-12 rounded-3xl ">
              <p className={`font-black text-[2.5rem] font-heroFont`}>
                {stat.figure}
              </p>
              <p className="text-center w-full">{stat.description}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Hero;
