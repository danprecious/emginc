import React from "react";

const BlockLayout = ({ children, data, title }) => {
  return (
    <section className="my-12">
      <h1 className="text-center font-bold text-[3rem] py-4 mb-12">{title}</h1>
      <div className="lg:mx-10 mx-5 md:row-center flex-col">
        {data.slice(0, 3).map((block, index) => {
          return (
            <div
              key={block.id}
              className="col-aroun md:w-[25%] dark:bg-stone-950 mx-6 text-center my-8 py-10 rounded-lg md:my-0  shadow-md"
            >
              <p className="flex justify-center text-[2rem] hover:text-secondary">{block.icon}</p>
              <p className="text-[1.2rem] font-semibold my-5">{block.title}</p>
              <p className="px-5">{block.text}</p>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default BlockLayout;
