import CustomButton from "@/app/components/globals/customButton";
import React from "react";

const CtaSection = () => {
  return (
    <section className="lg:p-8 py-8 my-20 ">
      <div className="lg:h-[14em] flex lg:flex-row flex-col items-center p-5  bg-black text-white rounded-3xl">
        <div className="lg:w-[50%]  lg:p-5 py-5">
          <p className="text-[2.5rem] font-bold">Let&apos;s take your business to the next level, and fast</p>
        </div>
        <div className="lg:w-[50%] flex flex-col my-5 p-3">
          <p className="text-[1.3rem] mb-8">
            Exceptional work is more than just the banner we raise  -  it&apos;s
            a promise
          </p>
          <div className="w-full flex">
            <CustomButton href="/contactUs" text="Get in touch"/>
            </div>
        </div>
      </div>
    </section>
  );
};

export default CtaSection;
