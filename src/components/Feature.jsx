import React from "react";
import { motion } from "framer-motion";

const Feature = ({ feature, id }) => {
  return (
    <motion.article
      initial={{ y: "50%" }}
      whileInView={{ y: 0 }}
      transition={{ duration: 0.7 }}
      className="flex flex-1 flex-col md:flex-row gap-x-8 lg:flex-col  gap-y-4 items-center justify-center mb-10"
    >
      <p className="h-[46px] w-[46px] rounded-full text-darkPurple font-fraunces font-[600] text-[20px] leading-9 flex items-center justify-center border-solid border-darkPurple border-2">
        {id + 1}
      </p>
      <div className="flex flex-1 flex-col gap-y-4 md:text-left text-center lg:text-center">
        <h2 className="font-fraunces  leading-9 text-[28px] font-[600]">
          {feature.title}
        </h2>
        <p className="text-davesgrey text-[16px] leading-7 md:text-[18px] md:leading-8">
          {feature.content}
        </p>
      </div>
    </motion.article>
  );
};

export default Feature;
