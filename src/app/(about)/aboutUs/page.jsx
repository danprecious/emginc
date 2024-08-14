import PageLayout from "@/app/components/layouts/pageLayouts/mainPages";
import CenteredSection from "@/app/components/layouts/sectionLayouts/centeredSection";
import CtaSection from "@/app/components/layouts/sectionLayouts/ctaSection";
import Footer from "@/app/components/layouts/sectionLayouts/footer";
import { milestones, teamMembers } from "@/app/utils/dataStructures";
import Image from "next/image";
import React from "react";

const AboutPage = () => {
  return (
    <PageLayout title="Who We Are">
      <div className="lg:px-10 px-6">
        <div className="lg:flex lg:px-5 px-1 lg:my-10 items-center">
          <div className="lg:w-[50%] bg-purple-800 lg:h-[50vh] h-[50vh] rounded-[2em]">
            <Image
              src="/pexels4.webp"
              width={1000}
              height={1000}
              className="w-full h-full object-cover rounded-[2em]"
              alt="business agency team"
            />
          </div>
          <div className="lg:w-[50%] flex flex-col justify-center lg:p-8 lg:ml-20 my-6">
            <h3 className="text-[2rem] mb-3 font-bold lg:font-semibold">Our Story</h3>
            <p>
              At VistaVibe Marketing, our journey began with a vision to
              revolutionize the way businesses connect with their audience.
              Founded on the principles of creativity and innovation, we set out
              to deliver exceptional marketing solutions that drive real
              results. Our team of passionate professionals is dedicated to
              crafting strategies that not only meet but exceed your
              expectations. We believe in building strong partnerships and
              delivering tailored services that create meaningful impact.
              <br /> <br />
              From our early days to becoming a leader in the marketing
              industry, we&apos;ve continuously evolved to stay ahead of market
              trends. Our commitment to excellence and client satisfaction has
              been the cornerstone of our success. We take pride in our ability
              to adapt and innovate, ensuring that every campaign and project we
              undertake reflects our dedication to helping your business thrive.
            </p>
          </div>
        </div>
        <CenteredSection title="Milestones">
          <div className="flex flex-col-reverse lg:flex-row lg:items-center">
            <div className="lg:w-[80%] ">
              {milestones.map((item, index) => {
                return (
                  <div
                    key={item.year}
                    className="border-l-4 border-purple-800 py-2 px-6 my-12"
                  >
                    <h4 className="font-bold text-[1.2rem] mb-3">
                      {item.year}
                    </h4>
                    <p className="lg:w-[70%]">{item.text}</p>
                  </div>
                );
              })}
            </div>
            <div className="lg:w-[50%] mb-10 lg:mb-0 bg-purple-800 h-[70vh] lg:h-[100vh] rounded-[2em]">
              <Image
                src="/entrepreneur2.webp"
                width={1000}
                height={1000}
                className="w-full h-full object-cover rounded-[2em]"
                alt="business agency team"
              />
            </div>
          </div>
        </CenteredSection>

        <CenteredSection title="Meet The Team">
          <div className="hidden lg:flex-row-reverse"></div>
          <div className="mb-20">
            <p className="text-center">
              A Team of passionate and talented marketers who have dominated the industry.
            </p>
          </div>
          <div>
            {teamMembers.map((member, index) => {
              return (
                <div
                  key={member.id}
                  className={`${member.xposition} flex flex-col lg:flex-row my-16 text-black`}
                >
                  <div className="lg:w-[30%] bg-purple-800 h-[40vh] rounded-[2em] mx-3  lg:mb-0">
                    <Image
                      src="/entrepreneur.webp"
                      width={1000}
                      height={1000}
                      className="w-full h-full object-cover rounded-t-[2em] lg:rounded-[2em]"
                      alt="business agency team"
                    />
                  </div>
                  <div className="lg:w-[70%] bg-slate-100 dark:bg-gradient-dark dark:text-white  lg:rounded-[2em] flex flex-col py-6 justify-center px-8 mx-3">
                    <h5 className="text-[1.2rem] font-semibold my-3">
                      {member.name}
                    </h5>
                    <p className="font-thin my-3">{member.role}</p>
                    <p className="text-sm my-3">
                      {member.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </CenteredSection>

        <CtaSection />
      </div>

      <Footer />
    </PageLayout>
  );
};

export default AboutPage;
