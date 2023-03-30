import React from 'react'

const CTA = ({ bgPattern2, content, founderImage }) => {
  return (
    <div className="py-8 relative  mt-[200px] app-container flex justify-end">
      <img
        className="absolute top-0 -translate-y-[70%] left-[50%] -translate-x-[50%]  md:left-0 md:-translate-x-0 md:-translate-y-[37%] lg:left-0 lg:translate-x-[20%] lg:-translate-y-[40%]  -z-30 h-[281px] w-[281px] lg:h-[350px] lg:w-[350px] xl:h-[477px] xl:w-[477px]"
        src={founderImage}
        alt="founder"
      />
      <div className="bg-darkPurple relative  text-white flex flex-col items-center justify-center md:items-start gap-y-4  px-4 py-6 md:w-[514px] lg:w-[530px] xl:w-[730px]">
        <h3 className="text-[32px] leading-12 pt-8">Be the first to test</h3>
        <p className="text-[16px] leading-7 font-[400] lg:text-[18px] lg:leading-8 font-manrope">
          {content}
        </p>
        <button className="btn btn-primary">Apply for access</button>
        <img
          src={bgPattern2}
          alt="hero pattern 2 "
          className="hidden md:block absolute right-[9rem] translate-x-[50%] bottom-0 translate-y-[40%] "
        />
      </div>
    </div>
  );
};

export default CTA