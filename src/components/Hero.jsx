import React from "react";
import imageHero from "../assets/images/image-hero.webp";
import heroPattern1 from "../assets/images/bg-pattern-1.svg";
import heroPattern2 from "../assets/images/bg-pattern-2.svg";
const Hero = () => {
  return (
    <div className="h-screen hero relative    mb-12 hero-clip">
      <div className=" py-12 h-full overflow-hidden relative">
        <div className="app-container h-full flex items-center pt-[25vh] gap-y-4 flex-col">
          <h1 className="font-[600] text-[40px] leading-[50px]  text-white text-center whitespace-nowrap">
            Data{" "}
            <span className="underline decoration-primary max-w-[343px] md:max-w-[573px] lg:max-w-[635px]">
              tailored
            </span>{" "}
            to <br /> your needs.
          </h1>
          <button className="btn btn-primary">Learn more</button>
        </div>

        <img
          src={heroPattern1}
          alt=" hero pattern 1"
          className="hidden md:block absolute  left-0 -translate-x-[50%] top-[50%] -translate-y-[50%] "
        />
        <img
          src={heroPattern2}
          alt="hero pattern 2 "
          className="hidden md:block absolute right-0 translate-x-[50%] top-[50%] -translate-y-[50%]"
        />
      </div>
      <div className="hero-img-container absolute z-[999] w-[514px] h-[296px] pt-8 md:w-[767px] md:h-[441px] md:pt-[6rem]">
        <img src={imageHero} alt="hero image" />
      </div>
    </div>
  );
};

export default Hero;
