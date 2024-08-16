import React from "react";
import { services, whyChooseUs2 } from "../utils/dataStructures";
import CustomButton from "../components/globals/customButton";
import Link from "next/link";
import CtaSection from "../components/layouts/sectionLayouts/ctaSection";
import Footer from "../components/layouts/sectionLayouts/footer";
import ServicesGrid from "../components/layouts/sectionLayouts/servicesGrid";
import Image from "next/image";

const ServicesPage = () => {
  return (
    <div>
      <section className="lg:flex my-8 lg:mb-32 items-center lg:px-20 lg:justify-between px-5">
        <div className="lg:w-[30%] bg-primary lg:h-[75vh] h-[60vh] rounded-[2em] mb-8 lg:mb-0">
          <Image
            src="/totalMarketing.webp"
            width={1000}
            height={1000}
            className="w-full h-full object-cover rounded-[2em]"
            alt="business agency team"
          />
        </div>
        <div className="lg:w-[65%]">
          <ServicesGrid data={services} btnText="Learn more"/>
        </div>
      </section>

      <section className="lg:flex my-8 lg:mb-32 items-center lg:px-20 lg:justify-between py-8 px-4">
        <div className="lg:w-[48%]">
          <div className="">
            <h1 className="text-[3rem] font-bold my-2">
              We are a Professional Agency, Committed to Excellence
            </h1>
          </div>
          <div className="lg:h-[35vh] my-2 rounded-[2em] bg-primary">
            <Image
              src="/working.webp"
              width={1000}
              height={1000}
              className="w-full h-full object-cover rounded-[2em]"
              alt="business agency team"
            />
          </div>
        </div>
        <div className="lg:w-[48%] flex py-6">
          <div className="lg:h-[70vh] h-[60vh] lg:w-[50%] w-[50%]  mx-5 bg-primary rounded-[2em]">
            <Image
              src="/marketing.webp"
              width={1000}
              height={1000}
              className="w-full h-full object-cover rounded-[2em]"
              alt="business agency team"
            />
          </div>
          <div className="mx-5 lg:w-[50%] w-[50%] relative flex flex-col place-content-between">
            <div className="w-full h-[48%] pb-5 rounded-[2em] bg-purple-200">
              <Image
                src="/pexels5.webp"
                width={1000}
                height={1000}
                className="w-full h-full object-cover rounded-[2em]"
                alt="business agency team"
              />
            </div>
            <div className="w-full h-[48%] pt-5 rounded-[2em] bg-purple-200">
              <Image
                src="/pexels6.webp"
                width={1000}
                height={1000}
                className="w-full h-full object-cover rounded-[2em]"
                alt="business agency team"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="px-4">
        <h3 className="text-center text-[3rem] font-bold">Why Choose Us</h3>

        <div className="lg:flex my-8 lg:mb- lg:items-center lg:px-20 lg:justify-between py-8 ">
          <div className="lg:w-[30%] lg:h-[80vh] rounded-[2em] lg:bg-primary mb-8">
            <Image
              src="/whyChooseUs.webp"
              width={1000}
              height={1000}
              className="w-full h-full object-cover rounded-[2em]"
              alt="business agency team"
            />
          </div>

          <div className="lg:w-[65%] px-4">
            {/* <div className="mb-8">
              <h1 className="text-[2.5rem] font-bold mb-5">We Offer Unique Services</h1>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum
                necessitatibus pariatur eligendi eum quia reprehenderit
                corrupti, sit dolorem. Et, doloribus.
              </p>
            </div> */}

            <div className="lg:[70%] mt-8">
              <ServicesGrid data={whyChooseUs2} btnText="" />
            </div>
          </div>
        </div>
      </section>

      <CtaSection />

      <Footer />
    </div>
  );
};

export default ServicesPage;
