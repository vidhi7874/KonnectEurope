import Image from "next/image";
import React from "react";
import { StarIcon } from "../public/assets/Icon/icons";
import ServiceCard from "./common/Cards/ServiceCard";
import Testimonial from "./Testimonial";

const AboutUs = () => {
  const aboutList = [
    {
      id: 1,
      title: "title",
      desc: "Konnect Europe Limited “Gateway to UK & Europe”, having its head office in London, United Kingdom, we offer exclusive Travel Itineraries and travel support to London, England, Scotland, Wales, Ireland and European Destinations.",
      icon: "icon",
      bg: "bg-[#E3F8FF]",
    },
    {
      id: 2,
      title: "title",
      desc: "With over 25+ years of expertise in destination knowledge & designing itinerates for UK & Europe. We have a very strong relationship with tourism suppliers, accommodation providers, and local tour operators.",
      icon: "icon",
      bg: "bg-[#FFE9DD]",
    },
    {
      id: 3,
      title: "title",
      desc: "We offer unmatched customer oriented services with customized itineraries for FIT’s, Groups, MICE, and School Trips be it for leisure or business travel. We always try to understand from base level to complex requirements of the travellers and design a suitable itinerary to match their expectations and formulating their provided budget.",
      icon: "icon",
      bg: "bg-[#FFE9DD]",
    },
    {
      id: 4,
      title: "title",
      desc: "We are committed in handling Travel Agents, Tour Operators and Corporates with utmost business Ethics, Character, Competence and Collaboration. Your Guests & Employees are always covered with our best in class customer support throughout their travel to UK & Europe along with Trustworthiness, Respect, Responsibility, Fairness and Caring.",
      icon: "icon",
      bg: "bg-[#E3F8FF]",
    },
    {
      id: 5,
      title: "title",
      desc: "We organize accommodation in 3, 4 & 5 Star hotels, Apartments, UK & Europe Travel Passes & Train Tickets, Van & Coaches, Day Tours, Ferry tickets, Private Transfers, Attraction tickets and many more services",
      icon: "icon",
      bg: "bg-[#E3F8FF]",
    },
    {
      id: 6,
      title: "title",
      desc: "Being one of the fastest growing companies, Konnect Europe Limited is expanding its services across the world, with its current head office in London, United Kingdom, Dubai, UAE, India and Australia. Come Partner with us with Confidence for a better Travel experience to UK & European Destinations!!",
      icon: "icon",
      bg: "bg-[#FFE9DD]",
    },
  ];
  return (
    <section className=" mt-24 px-8 xl:px-16 mx-auto text-6xl" id="aboutUs">
      <div>
        <h1 className="text-secondary font-bold w-full text-3xl md:text-6xl text-center">
          About{" "}
          <span className="text-primary font-lato">Konnect Europe Limited</span>
        </h1>
      </div>
      <div className="my-20">
        <div className="lg:px-20 rounded-xl justify-center  items-center  gap-6 grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2  ">
          {aboutList.map((item, index) => (
            <div
              key={index}
              className={`${item.bg}  relative  w-full h-full  mx-auto group hover:bg-gradient-to-t hover:from-sky-400 hover:to-sky-600  ease-in-out duration-300 shadow-sm transition rounded-2xl`}
              // className=" relative  bg-[#E3F8FF] mx-auto group hover:bg-gradient-to-t hover:from-sky-400 hover:to-sky-600  ease-in-out duration-300 shadow-sm transition rounded-2xl"
            >
              <div className="flex items-center  justify-between my-4">
                <p
                  style={{
                    lineHeight: 1.8,
                    fontSize: "20px",
                    textAlign: "left",
                  }}
                  className="text-lg  text-center font-lato text-text-primary group-hover:text-white p-8  capitalize  line-clamp-4"
                >
                  {item.desc}
                </p>
                <div className=" absolute left-0 w-0 h-16 border-2  rotate-180 rounded-xl border-[#0090C5]  " />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
