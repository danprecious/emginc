import React from "react";
import CtaSection from "../../sectionLayouts/ctaSection";
import Footer from "../../sectionLayouts/footer";
import Image from "next/image";

const ServicePage = ({ title, description, image, description2 }) => {
  return (
    <section className="">
      <div className=" lg:flex lg:justify-between lg:px-20 px-5 items-center">
        <div className="lg:w-[25%] bg-purple-800 lg:h-[70vh] hidden lg:flex rounded-[2em]">
        <Image
              src={image}
              width={1000}
              height={1000}
              className="w-full h-full object-cover rounded-[2em]"
              alt="business agency team"
            />
        </div>
        <div className="lg:w-[70%]">
          <h6 className="text-[2rem] font-bold py-4">{title}</h6>
          <div className="lg:hidden h-[50vh] bg-purple-800 rounded-[2em]"></div>
          <p className="my-8">{description}</p>
          <p className="my-5">{description2}</p>
        </div>
      </div>
      <CtaSection />
      <Footer />
    </section>
  );
};

export default ServicePage;
