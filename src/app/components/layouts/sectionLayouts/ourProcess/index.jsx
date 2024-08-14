import { processes } from "@/app/utils/dataStructures";
import React from "react";

const OurProcess = () => {
  return (
    <div className="lg:mx-20 px-3">
      <div className="hidden lg:flex-row-reverse lg:right-[55%] lg:left-[55%] right-0 left-0"></div>
      <div className="text-center">
        <h1 className="text-[3rem] font-bold">Our Work Strategy</h1>
      </div>
      {processes.map((process, index) => {
        return (
          <div
          key={index}
            className={`rounded-[5em] bg-purple-100 dark:bg-stone-950 flex flex-col lg:flex-row lg:p-8 px-3 py-8 my-32 lg:h-[10em] shadow-lg relative ${process.position} lg:items-start items-center`}
          >
            <div className="lg:w-[50%] mt-8 lg:mt-0 flex flex-col justify-center mx-5 text-center lg:text-left">
                <p className="lg:hidden flex justify-center text-[2rem] font-bold">{process.icon}</p>
              <p className="text-[1.2rem] lg:text-sm font-bold my-4  ">{process.title}</p>
              <p className="lg:text-xs ">{process.text}</p>
            </div>
            <div className={`flex lg:w-[50%] h-full ${process.position}`}>
              <div className="w-[50%]  justify-cente">
                <div 
                  className={`rounded-full absolute  lg:top-0 top-[-3em]  row-center-center  ${process.stagePosition}  lg:h-full lg:scale-125 max-w-[em] bg-purple-800 text-white p-8 lg:text-[5rem] font-bold`}
                >
                  {process.stage}   
                </div>
              </div>
              <div className="w-[50%] hidden lg:flex m-auto justify-center   text-center text-[5rem]">{process.icon}</div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default OurProcess;
