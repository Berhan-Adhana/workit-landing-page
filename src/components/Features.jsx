import React from "react";
import Feature from "./Feature";

const Features = ({ features }) => {
  return (
    <div className="app-container bg-ghostWhite hero-clip pt-4 pb-[100px] mt-[12rem] flex flex-col lg:flex-row gap-x-[26px] items-center justify-center">
      {features.map((feature, index) => (
        <Feature key={index} id={index} feature={feature} />
      ))}
    </div>
  );
};

export default Features;
