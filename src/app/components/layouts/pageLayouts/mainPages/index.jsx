import React from "react";

const PageLayout = ({ children, title }) => {
  return (
    <section className="lg:mt-10 mt-5">
      <div className="flex justify-center"></div>
      {/* <div className='lg:h-[10vh] h-[20vh] px-10 rounded-[2em] bg-section-gradient flex items-center justify-center'>
            <h1 className='text-[2rem] lg:text-[2rem]  font-bold text-center'>{title}</h1>
        </div> */}

      {children}
    </section>
  );
};

export default PageLayout;
