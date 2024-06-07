import Image from "next/image";
import React from "react";

const BestOffersServices = () => {
  const bestOffersList = [
    {
      id: 1,
      title: "Calculated Weather",
      descprition:
        "Built Wicket longer admire do barton vanity itself do in it.",
      icon: "/assets/Icon/calculatedWaetherIcon.svg",
    },
    {
      id: 2,
      title: "Best Flights                   ",
      descprition:
        "Engrossed listening. Park gate sell they west hard for the.",
      icon: "/assets/Icon/airoplaneIcon.svg",
    },
    {
      id: 3,
      title: "Local Events",
      descprition:
        "Barton vanity itself do in it. Preferd to men it engrossed listening. ",
      icon: "/assets/Icon/localEventsIcon.svg",
    },
    {
      id: 5,
      title: "Customization",
      descprition:
        "We deliver outsourced aviation services for military customers",
      icon: "/assets/Icon/settingIcon.svg",
    },
  ];
  return (
    <section
      className="  py-12 bg-[#E3F8FF] px-8 xl:px-16 mx-auto text-6xl-e"
      id="our-services"
    >
      <div className="relative">
        <div className="absolute offer right-0 transform -translate-y-[-70] md:translate-y-0 md:-translate-x-1/2">
          <Image
            src="/assets/Icon/bestservice.svg"
            width={150}
            height={100}
            className="sm:block overflow-visible"
          />
        </div>
        <div className="absolute inset-0 flex justify-center">
          <h1 className="text-secondary font-bold text-3xl md:text-5xl sm:text-6xl font-Alegreya tracking-wider">
            We Offer{" "}
            <span className="text-primary font-Alegreya tracking-wider">
              Best Services
            </span>
          </h1>
        </div>
      </div>

      {/*  */}

      {/* rounded-xl justify-center gap-2 grid grid-cols-1-e sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3  */}
      {/* rounded-xl flex  flex-wrap-e justify-center gap-4 f */}
      <div className="my-20">
        {/* <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"> */}
        <div className="flex flex-wrap gap-8 justify-center">
          {bestOffersList.map((item, index) => (
            <div
              key={index}
              className="bg-white relative mt-8 w-96  w-3/12-e w-max-e h-[415px] group hover:bg-slate-300 ease-in-out duration-150 shadow-sm transition-all rounded-[40px] sm:px-8 pt-8"
            >
              <div className="flex flex-col xl:flex-row w-full items-stretch xl:items-center">
                <div className="mx-auto my-6 rounded-full">
                  <img
                    src={item?.icon}
                    alt={item?.title}
                    className="w-full h-full"
                  />
                </div>
              </div>
              <p className=" mx-auto text-center text-2xl  font-bold text-primary  my-6">
                {item?.title}
              </p>
              <div className="flex items-center justify-between my-4">
                <div className="flex gap-2 order-2 ">
                  <div className="flex flex-col ml-5 px-6">
                    <p
                      style={{
                        // fontSize: "12px",
                        lineHeight: "40px",
                      }}
                      className=" text-center font-Alegreya tracking-wider text-text-primary px-3  text-md capitalize"
                    >
                      {item?.descprition}
                    </p>
                  </div>
                </div>
              </div>
              <div className="bottom-0  mx-auto w-full ">
                <img
                  className="w-full h-full "
                  src="/assets/Icon/buildingShape.svg"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BestOffersServices;
