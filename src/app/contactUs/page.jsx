import React from "react";
import ContactForm from "../components/forms/contactForm";

const ContactUs = () => {
  return (
    <section className="flex flex-col lg:flex-row justify-center items-center px-4 lg:h-[80vh]">
        <h1 className="lg:text-[5em] text-[3em] mt-8 text-center mb-12  lg:mb-0 lg:w-[50%] font-bold dark:bg-gradient3">Let's Get to Work!</h1>
        <ContactForm/>
    </section>
  );
};

export default ContactUs;
