import React from "react";
import Logo from "../../public/assets/logo.svg";
import SubscribeNewsLetter from "../common/Footer/SubscribeNewsLetter";

const Footer = () => {
  return (
    <div className="footer-bg z-0 mt-20 pt-28 lg:pt-0 border-none relative">
      <span className="absolute bottom-0 right-0 hidden 2xl:block"></span>
      <div className="w-full flex items-center justify-center">
        <div className="lg:max-w-6xl md:max-w-3xl sm:max-w-2xl  max-w-lg w-full rounded-3xl pb-5  mb-6 lg:p-12 p-3 bg-primary">
          <div className="flex flex-col items-center justify-center text-white mb-6">
            <p>Wall of fame</p>
            <h1 className="font-bold text-4xl sm:text-3xl">Our Clients</h1>
          </div>
          <div className=" overflow-hidden"></div>
        </div>
      </div>
      <div className=" text-white items-center flex justify-center">
        <footer className="p-4 sm:p-6 max-w-[1500px] w-[1200px]">
          <div className="grid grid-cols-1 lg:grid-cols-3 my-4 md:grid-cols-4 ">
            <div className=" mb-[0.5rem]">
              <h2 className="font-bold text-3xl lg:text-5xl md:text-xl text-white mb-4 ">
                ATC Chains
              </h2>
              <p className="text-lg w-full lg:w-2/3 text-gray-300 mb-4">
                22, Kalyannagar Society, O/s Shahpur Gate, Shahpur, Ahmedabad -
                380004
              </p>
              <p className=" text-gray-300 mb-4">
                <a href="tel:90237 25674">+91 (902) 37-25676</a>
              </p>
            </div>

            <div className="">
              <h2 className="linksHeading font-bold text-3xl  text-white ">
                Quick Links
              </h2>
              <div className="links">
                <ul className="flex-col flex-wrap text-xl items-center my-6 font-bold space-y-2"></ul>
              </div>
            </div>

            <div className="space-y-4 ">
              <div className="-mt-16 hidden lg:block"></div>
              <h1 className="  text-2xl  text-white">Download</h1>
              <div className="bg-white/30 w-full rounded-xl h-36 p-6">
                <h4 className=" text-white text-sm mb-6">
                  Product Detail & Specification
                </h4>
                <button
                  type="submit"
                  onClick={() => downloadAttachments()}
                  className="bg-btn-secondary h-[2.1rem] w-[11rem] md:w-[8rem] rounded-full text-white"
                >
                  Download
                </button>
              </div>
            </div>
          </div>
          <hr className="my-6 border-gray-600 sm:mx-auto dark:border-gray-700 lg:my-8" />
          <div className="sm:flex sm:items-center sm:justify-between">
            <span className="text-sm sm:text-center ">
              © Copyright Atc Chains 2022{" "}
              <a href="#" className="hover:underline"></a>. All right reserved.
            </span>
            <div className="flex mt-4 space-x-6 sm:justify-center sm:mt-0">
              <a
                href="https://www.linkedin.com/company/atc-chains-india-ahmedabad/"
                target="_blank"
                className="text-gray-500 hover:text-white"
              >
                <YoutubeIcon />
              </a>
              <a
                href="https://www.youtube.com/@atcchainsindia3442"
                target="_blank"
                className="text-gray-500 hover:text-white "
              >
                <LinkedinIcon />
              </a>
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
};

export default Footer;
