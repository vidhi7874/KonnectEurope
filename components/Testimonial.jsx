import React, { useState } from "react";

import Slider from "react-slick";
import Image from "next/image";
import { ArrowBack, ArrowNext, StarIcon } from "../public/assets/Icon/icons";

const Testimonial = ({
  listTestimoni = [
    {
      name: "Adam Smith",
      clientImg: "/assets/images/testimonial/testimonial-1.svg",
      avatar: "/assets/images/avatars/avatar-1.svg",
      designation: "Product Developer at Webflow",
      rating: "4.5",
      testimoni:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua quis nostrud exercitation ullamco",
    },
    {
      name: "Adam Smith",
      clientImg: "/assets/images/testimonial/testimonial-2.svg",
      avatar: "/assets/images/avatars/avatar-1.svg",
      designation: "Product Developer at Webflow",
      rating: "4.5",
      testimoni:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua quis nostrud exercitation ullamco",
    },
    {
      name: "Adam Smith",
      clientImg: "/assets/images/testimonial/testimonial-1.svg",
      avatar: "/assets/images/avatars/avatar-1.svg",
      designation: "Product Developer at Webflow",
      rating: "4.5",
      testimoni:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua quis nostrud exercitation ullamco",
    },
    {
      name: "Adam Smith",
      clientImg: "/assets/images/testimonial/testimonial-2.svg",
      avatar: "/assets/images/avatars/avatar-1.svg",
      designation: "Product Developer at Webflow",
      rating: "4.5",
      testimoni:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua quis nostrud exercitation ullamco",
    },
    {
      name: "Adam Smith",
      clientImg: "/assets/images/testimonial/testimonial-1.svg",
      avatar: "/assets/images/avatars/avatar-1.svg",
      designation: "Product Developer at Webflow",
      rating: "4.5",
      testimoni:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua quis nostrud exercitation ullamco",
    },
    {
      name: "Adam Smith",
      clientImg: "/assets/images/testimonial/testimonial-1.svg",
      avatar: "/assets/images/avatars/avatar-1.svg",
      designation: "Product Developer at Webflow",
      rating: "4.5",
      testimoni:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua quis nostrud exercitation ullamco",
    },
  ],
}) => {
  const settings = {
    dots: false,
    customPaging: function (i) {
      return (
        <a className="">
          <span className="mx-2 rounded-l-full rounded-r-full h-4 w-4 block cursor-pointer transition-all "></span>
        </a>
      );
    },
    dotsClass: "slick-dots w-max absolute mt-20",
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 2,
    responsive: [
      {
        breakpoint: 770,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  const [sliderRef, setSliderRef] = useState(null);

  return (
    <>
      <Slider
        {...settings}
        arrows={false}
        ref={setSliderRef}
        className=" items-stretch grid grid-rows-2  justify-items-stretch"
      >
        {listTestimoni.map((listTestimonis, index) => (
          <div
            className="px-3 rounded-xl shadow-xl space-x-4 flex items-stretch"
            key={index}
          >
            <div className="hover:border-orange-500 shadow-xl transition-all rounded-lg p-8 flex flex-col">
              <div className="flex flex-col xl:flex-row w-full items-stretch xl:items-center">
                <div className="flex order-2 ">
                  <Image
                    src={listTestimonis.clientImg}
                    height={150}
                    width={150}
                    alt="Client"
                  />
                </div>
              </div>
              <p className="text-left my-6">“{listTestimonis.testimoni}”.</p>
              <div className="flex items-center justify-between my-4">
                <div className="flex gap-2 order-2 xl:order-1">
                  <Image
                    src={listTestimonis.avatar}
                    height={50}
                    width={50}
                    className="bg-white rounded-full"
                    alt="Icon People"
                  />
                  <div className="flex flex-col ml-5 text-left">
                    <p className="text-lg text-black-600 capitalize">
                      {listTestimonis.name}
                    </p>
                    <p className="text-sm hidden lg:flex text-black-500 capitalize">
                      {listTestimonis.designation}
                    </p>
                  </div>
                </div>
                <div className="flex flex-none items-center ml-auto order-1 xl:order-2">
                  <span className="flex ml-4">
                    <StarIcon className="h-4 w-4" />
                    <StarIcon className="h-4 w-4" />
                    <StarIcon className="h-4 w-4" />
                    <StarIcon className="h-4 w-4" />
                    <StarIcon className="h-4 w-4" />
                  </span>
                </div>
              </div>
            </div>
          </div>
        ))}
      </Slider>
      <div className="flex mt-10 w-full  items-center justify-end">
        <div className="flex flex-none justify-between w-auto mt-14">
          <div
            className="mx-4 flex items-center justify-center h-14 w-14 rounded-full bg-white border-orange-500 border hover:bg-orange-500 hover:text-white-500 transition-all text-orange-500 cursor-pointer"
            onClick={sliderRef?.slickPrev}
          >
            <ArrowBack className="w-10 " />
          </div>
          <div
            className="flex items-center justify-center h-14 w-14 rounded-full bg-white border-orange-500 border hover:bg-orange-500 hover:text-white-500 transition-all text-orange-500 cursor-pointer"
            onClick={sliderRef?.slickNext}
          >
            <ArrowNext className="" />
          </div>
        </div>
      </div>
    </>
  );
};

export default Testimonial;
