import React from "react";

const CenteredSection = ({ children, title }) => {
  return (
    <div className="lg:px-20 lg:my-32 my-20">
      <div>
        <h1 className="text-[3rem] font-bold my-10 text-center">{title}</h1>
      </div>
      {children}
    </div>
  );
};

export default CenteredSection;
