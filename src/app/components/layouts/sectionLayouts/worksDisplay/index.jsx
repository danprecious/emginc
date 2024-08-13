import { works } from "@/app/utils/dataStructures";
import React from "react";
import WorkCards from "./cards";
import Image from "next/image";

const WorksDisplay = () => {
  return (
    <section className="lg:flex justify-between px-16 items-center">
      <div className="lg:w-[25%] lg:h-[50vh] rounded-[2em] bg-purple-800">
      <Image
              src="/pexels.webp"
              width={1000}
              height={1000}
              className="w-full h-full object-cover rounded-[2em]"
              alt="business agency team"
            />
      </div>
      <WorkCards />
    </section>
  );
};

export default WorksDisplay;
