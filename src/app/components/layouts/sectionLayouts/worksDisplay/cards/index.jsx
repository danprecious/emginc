"use client";

import { works } from "@/app/utils/dataStructures";
import Image from "next/image";
import { useState } from "react";

const WorkCards = () => {
  const [hover, setOnHover] = useState(false);
  const [workState, setWorkState] = useState("");

  return (
    <div className="lg:w-[70%] my-grid3">
      {works.map((work, index) => {
        return (
          <div
            key={work.id}
            className="h-[60vh] w-[15em]  lg:w-[15em] flex flex-col shadow-lg relative"
          >
            <div className="h-[80%] bg-primary">
              <Image
                src={work.image}
                width={1000}
                height={1000}
                className="w-full h-full object-cover"
                alt="business agency team"
              />
            </div>
            <div
              onMouseEnter={() => {
                setOnHover(true);
                setWorkState(work.title);
              }}
              onMouseLeave={() => {
                setOnHover(false);
                // setWorkState("")
              }}
              className={`text-center  bg-primary text-white z-30 ${
                hover && work.title === workState
                  ? "h-[100%] absolute"
                  : "h-[35%]"
              }  absolute w-full bottom-0 transition-all  p-4 flex flex-col justify-center items-center`}
            >
              <p className="text- font-bold pb-2">{work.title}</p>
              <p
                className={`${
                  hover && work.title === workState ? "hidden" : "flex"
                } text-xs`}
              >
                {work.shortDescription}
              </p>
              <p
                className={`${
                  hover && work.title === workState ? "flex" : "hidden"
                } text-sm`}
              >
                {work.description}
              </p>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default WorkCards;
