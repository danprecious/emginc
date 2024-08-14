"use client";

import { useEffect, useState } from "react";
import { BiLeftArrowCircle } from "react-icons/bi";
import { FaArrowAltCircleLeft, FaArrowCircleRight } from "react-icons/fa";
import { reviewsData } from "@/app/utils/dataStructures";

const ReviewSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    setCurrentIndex(0);
  }, []);

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % reviewsData.length);
  };

  const handlePrev = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + reviewsData.length) % reviewsData.length
    );
  };

  return (
    <section className="flex justify-center flex-col items-center relative mt-52 lg:mx-20 py-3">
      <div>
        <h1 className="text-[3rem] font-bold mb-12 text-center p-3">
          Our Success Stories
        </h1>
      </div>
      <div className="w-[70%] lg:w-[60%] flex">
        {reviewsData.map(({ reviewMessage, name, image, location, id }, index) => {
          return (
            <div
              key={id}
              className={`${
                index == currentIndex ? "flex" : "hidden"
              } flex-col  transition-all]`}
            >
              <p className="text-center py-5 lg:text-[1.2rem]">
                "{reviewMessage}"
              </p>
              <div className="flex justify-center py-10 items-center">
                <div className="w-[50px] h-[50px] rounded-full bg-stone-700 mx-2"></div>
                <div>
                  <p>{name} - <span className="text-gradient">{location}</span></p>
                </div>
              </div>
            </div>
          );
        })}
      </div>
      <button
        onClick={handlePrev}
        className="absolute md:left-10 left-2 top-[50%]"
      >
        <BiLeftArrowCircle className="text-[2rem]" />
      </button>
      <button
        onClick={handlePrev}
        className="absolute md:right-10 right-2  top-[50%]"
      >
        <FaArrowCircleRight className="text-[2rem]" />
      </button>
    </section>
  );
};

export default ReviewSection;
