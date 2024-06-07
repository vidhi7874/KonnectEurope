import { motion } from "framer-motion";
import Image from "next/image";

import React, { useMemo } from "react";
import getScrollAnimation from "../../../utils/getScrollAnimation";
import ScrollAnimationWrapper from "../../Layout/ScrollAnimationWrapper";

const ServiceCard = () => {
  const scrollAnimation = useMemo(() => getScrollAnimation(), []);
  return (
    <div>
      <div className="  w-full py-14">
        <div className="max-w-screen-xl  px-6 sm:px-8 lg:px-16 mx-auto flex flex-col w-full text-center justify-center">
          <div className="flex flex-col bg-primary  border w-full">
            <ScrollAnimationWrapper>
              <motion.h1
                variants={scrollAnimation}
                className=" text-primary font-bold text-5xl"
              >
                <span className="text-secondary text-3xl">Services</span> We
                Serve
              </motion.h1>
            </ScrollAnimationWrapper>
            <div className="grid grid-flow-row sm:grid-flow-col grid-cols-1 sm:grid-cols-3 gap-4 lg:gap-12 py-8 lg:py-12 px-6 sm:px-0 lg:px-6">
              <ScrollAnimationWrapper className="flex justify-center">
                <motion.div
                  variants={scrollAnimation}
                  className="flex flex-col max-w-lg  justify-center items-center border-2 border-gray rounded-xl py-4 px-6 lg:px-12 xl:px-20"
                  whileHover={{
                    scale: 1.1,
                    transition: {
                      duration: 0.2,
                    },
                  }}
                >
                  <div className="p-6 shadow-lg bg-white rounded-full">
                    <Image
                      src="/assets/Icon/busIcon.svg"
                      width={70}
                      height={70}
                      alt="icon"
                    />
                  </div>
                  <h1 className="text-lg text-black font-medium capitalize my-2 sm:my-7">
                    European Holiday
                  </h1>
                  <p className="text-gray">
                    With over 60+ ready to book packages, being a Travel Agent
                    or Tour Operator, win over your clients with instant
                    itineraries choices. We have curated these packages with
                    past traveller experiences and top selling itineraries in
                    your regions.
                  </p>
                </motion.div>
              </ScrollAnimationWrapper>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServiceCard;
