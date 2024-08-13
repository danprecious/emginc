import CustomButton from "@/app/components/globals/customButton";
import Image from "next/image";
import React from "react";

const TextImageLayout = ({ children, image, btntext, title, subText, position }) => {
  return (
    <section className={`lg:flex lg:my-36 my-12 lg:mx-10 relative flex-col ${position}`}>
      <div className="lg:w-[50%] col-center lg:mx-10 text-center lg:text-left">
        <div className="my-8 px-3">
          <p className="text-[2rem] py-3 font-semibold ">{title}</p>
          <p>{subText}</p>
        </div>
        <div className="hidden md:flex justify-center lg:justify-start ">
          <CustomButton href="#" text={btntext} />
        </div>
      </div>
      <div className="lg:w-[50%] p-6  relative">
        <div className="w-[100%] h-[30em] bg-purple-700 rounded-[2em]">
          <Image src={image} width={1000} height={1000} className= "w-full h-full object-cover rounded-[2em]" alt="Sales deal" />
        </div>
        <div className="md:hidden row-center my-5">
        <CustomButton href="#" text={btntext} />
        </div>
      </div>
      <div className="hidden lg:flex-row-reverse "></div>
      {/* <div className="hidden lg:flex-row-reverse "></div> */}
    </section>
  );
};

export default TextImageLayout;
