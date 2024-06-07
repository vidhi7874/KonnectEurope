import React, { useState } from "react";

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Image from "next/image";
import { ArrowBack, ArrowNext } from "../../../public/assets/Icon/icons";

const MainSlider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [sliderRef, setSliderRef] = useState(null);
  const handleAfterChange = (index) => {
    setCurrentIndex(index);
  };
  const settings = {
    afterChange: handleAfterChange,
    dotsClass: "slick-dots flex items-center justify-center",
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 2,
    centerMode: true,
    centerPadding: "20px",
    dots: true,
    customPaging: function (i) {
      return (
        <a className="">
          <span
            className={` ${
              i === currentIndex ? "bg-orange-600" : "bg-gray"
            } mx-2 rounded-l-full mt-4 rounded-r-full  h-2 sm:h-4 w-2 sm:w-4 block cursor-pointer transition-all`}
          ></span>
        </a>
      );
    },

    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
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

  return (
    <div className="lg:mx-10 lg:my-20">
      <Slider {...settings} arrows={false} ref={setSliderRef} className="">
        <div className=" lg:px-10 my-6">
          <div className="relative w-full items-center justify-center ">
            <div
              className="h-[50vh] lg:h-[70vh] min-w-full w-full rounded-[40px] bg-cover bg-center"
              style={{
                backgroundImage: 'url("/assets/images/sliders/slider-1.png")',
              }}
            />
            <div className="bg-black/70 absolute z-20 inset-0 rounded-[40px]  overflow-hidden">
              <div className="flex justify-between h-full w-full items-center  gap-4">
                <div className="relative my-6 lg:px-10 w-2/3">
                  <div className=" border-gray-400 px-4">
                    <p className=" text-white text-sm md:text-4xl  lg:leading-[1.5] capitalize text-start font-semibold ">
                      Over 60+ Ready to <br /> Book European <br /> Holiday
                      Packages
                    </p>
                  </div>
                </div>
                <div
                  style={{
                    backgroundImage:
                      'url("/assets/images/sliders/innerImage.png")',
                  }}
                  className="bg-red-800  shadow-2xl lg:w-2/3 lg:h-96 bg-cover bg-center "
                >
                  <div className="relative h-full w-full bg-opacity-50 rounded-tr-lg rounded-br-lg">
                    <div className="bg-black/70 w-full h-full  ">
                      <div className="p-8 z-30 ">
                        <p className="text-white text-xs md:text-sm lg:text-xl mb-4"></p>
                      </div>
                    </div>
                    <div className="bg-black/70 text-sm sm:text-3xl absolute hidden sm:block bottom-0  opacity-0.3  text-white backdrop-blur-sm leading-[2] lg:mx-10  p-8 rounded-[40px]">
                      United Kingdom, Switzerland, France, Scotland, Austria,
                      Spain, Italy, Greece, The Netherlands, Hungary, Czech
                      Republic
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="px-10">
          <div className="z-30 relative items-center justify-center w-full h-full ">
            <div
              className="h-[65vh] overflow-hidden  rounded-[40px] bg-cover  bg-center"
              style={{
                backgroundImage: 'url("/assets/images/sliders/slider-3.png")',
              }}
            />
            <div className="bg-black/60 absolute w-full h-full z-20 p-2 md:p-14 py-20 inset-0 rounded-[40px]  overflow-hidden">
              <div className="flex items-center justify-between">
                <div className="text-white w-full">
                  <h1 className="font-bold text-sm md:text-4xl lg:text-7xl font-Alegreya ">
                    Swiss Paris Combo <br /> – 6 Nights 7 Days
                  </h1>
                  <p className="pl-2 md:pl-20 text-sm">
                    Interlaken – Lucerne – Paris
                  </p>
                  <div className="absolute bottom-08">
                    <p className="text-xs sm:text-xl my-2">
                      Highlights of the tour
                    </p>
                    <h2 className="font-bold text-xs md:text-2xl">
                      Jungfraujoch – Top of Europe, Mt. Titlis, Eiffel <br />{" "}
                      Tower, Seine River Cruise
                    </h2>
                  </div>
                </div>
                <div className="w-full text-end">
                  <Image
                    src="/assets/logo.svg"
                    alt="logo"
                    width={100}
                    height={100}
                    className="ml-10"
                  />
                  <div className="absolute w-1/2 sm:w-3/4 bottom-4 sm:bottom-14">
                    <div className="flex items-center justify-center ">
                      <button className="py-2 sm:py-6 text-white float-right text-xs  font-bold px-2 sm:px-10 bg-[#0065C8] rounded-[10px]">
                        Starting from EUR 990 Per Person
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="px-10">
          <div className="z-30 relative items-center justify-center w-full h-full ">
            <div
              className="h-[65vh] overflow-hidden  rounded-[40px] bg-cover  bg-center"
              style={{
                backgroundImage: 'url("/assets/images/sliders/slider-4.png")',
              }}
            />
            <div className="bg-black/60 absolute w-full h-full z-20 p-14 py-20 inset-0 rounded-[40px]  overflow-hidden">
              <div className="flex items-center justify-between">
                <div className="text-white w-full">
                  <h1 className="font-bold text-6xl font-Alegreya ">
                    Swiss Paris Combo <br /> – 6 Nights 7 Days
                  </h1>
                  <p className="pl-20 text-xl">Interlaken – Lucerne – Paris</p>
                </div>
              </div>
            </div>
            <div className="absolute z-20 bottom-0 bg-black/20 text-white rounded-b-[40px] rounded-t-2xl py-8 backdrop-blur-sm w-full ">
              <div className=" flex items-center justify-around">
                <h2 className="font-bold text-xl sm:text-xl">
                  Charles Bridge, Prague Castle, Schönbrunn Palace,
                  <br /> St. Stephen’s Cathedral, <br />
                  Parliament Building, Danube River cruise
                </h2>
                <div>
                  <button className="border py-1 sm:py-3 px-1 sm:px-8 capitalize rounded-xl bg-[#2E2825]">
                    Starting from EUR 399* Per Person
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="px-10">
          <div className="z-30 relative items-center justify-center w-full h-full ">
            <div
              className="h-[65vh] overflow-hidden  rounded-[40px] bg-cover  bg-center"
              style={{
                backgroundImage: 'url("/assets/images/sliders/slider-5.png")',
              }}
            />
            <div className="bg-black/60 absolute w-full h-full z-20 p-6 sm:p-14 sm:py-20 inset-0 rounded-[40px]  overflow-hidden">
              <div className="flex items-center justify-start w-full h-full">
                <div className="text-white w-full">
                  <h1 className="font-bold text-xs sm:text-6xl  mb-4 font-Alegreya ">
                    UK & Scotland Diaries <br />– 9 Nights 10 Days
                  </h1>
                  <p className="my:1 sm:my-6 text-xs sm:text-2xl">
                    London – Manchester – Edinburgh
                  </p>
                  <p className="text-xs sm:text-2xl">
                    Buckingham Palace, London Eye, Stonehenge, Manchester
                    Stadium, <br />
                    Scottish Highlands, Edinburgh Castle
                  </p>
                </div>
                <div className="absolute bottom-4 right-16">
                  <button className="border text-xs text-end py-3 px-8 text-white capitalize rounded-xl bg-[#2E2825]">
                    Starting from EUR 399* Per Person
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="px-10">
          <div className="z-30 relative items-center justify-center w-full h-full ">
            <div
              className="h-[65vh] overflow-hidden  rounded-[40px] bg-cover  bg-center"
              style={{
                backgroundImage: 'url("/assets/images/sliders/slider-2.png")',
              }}
            />
            <div className="bg-black/60 absolute w-full h-full z-20 p-14 py-20 inset-0 rounded-[40px]  overflow-hidden">
              <div className="flex items-center justify-between w-full h-full">
                <div className="text-white w-full">
                  <h1 className="font-bold text-xs sm:text-3xl mb-4 font-Alegreya ">
                    Book with Confidence, <br />
                    A trusted <br />
                    DMC for UK & Europe
                  </h1>
                  <p className="my-6 text-2xl">
                    Come Partner with us for a better Travel Experience
                  </p>

                  <button className="border py-1 sm:py-3 px-16 capitalize rounded-xl bg-[#7A7774]">
                    Sign Up
                  </button>
                </div>
                <div className=" flex  flex-col gap-8">
                  <img
                    className="w-56 h-56 rounded-xl"
                    src="/assets/images/sliders/innerImage.png"
                    alt=""
                  />
                  <img
                    className="w-56 h-56 rounded-xl"
                    src="/assets/images/sliders/innerImage.png"
                    alt=""
                  />
                  <img
                    className="w-56 h-56 rounded-xl"
                    src="/assets/images/sliders/innerImage.png"
                    alt=""
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </Slider>
    </div>
  );
};

export default MainSlider;
