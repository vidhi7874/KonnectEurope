import Image from "next/image";
import React from "react";
import {
  Accommodation,
  European_Holiday,
  Sightseeing,
  Transfers,
  RailEurope,
} from "../public/assets/Icon";
import { useState } from "react";
import ServiceModel from "./ServiceModel";

const OurServices = () => {
  const servicesList = [
    {
      id: 1,
      title: "European Holiday",
      desc: "With over 120+ ready to book packages, being a Travel Agent or Tour Operator, win over your clients with instant itineraries choices. We have curated these packages with past traveller experiences and top selling itineraries in your regions.",
      highlight: "For Groups, you are welcome to submitted your requirement",
      icon: "/assets/Icon/European_Holiday.svg",
    },
    {
      id: 2,
      title: "Accommodation",
      desc: "Starting from basic Hotel to a Luxury Palace, we have most of the Hotels covered for a prefect stay for travellers. We offer contracted rates with major Hotel chains including all Star categories for almost all the cities of UK, Ireland, Scotland and Europe.",
      highlight: "For Groups, you are welcome to submitted your requirement",
      icon: "/assets/Icon/Accommodation.svg",
    },
    {
      id: 3,
      title: "Sightseeing",
      desc: "With millions of Sightseeing and Activities, from Mountain Excursions, Attractions tickets, Cruises, Day trips and many more to choose. As a Travel Agent or Tour Operator, you can impress your clients with unmated services.",
      highlight:
        "Book Mountain peak Excursions with ease with instant confirmations and best deals.",
      icon: "/assets/Icon/Sightseeing.svg",
    },
    {
      id: 4,
      title: "Transfers",
      desc: "With our pre-arranged transportation from Airport, Train station, Port or Accommodation or vice versa. We have negotiated rates from hundreds of suppliers across UK & Europe, providing you the lowest possible prices along with best of quality of service.",
      highlight: "Book The transfers",
      icon: "/assets/Icon/Transfers.svg",
    },
    {
      id: 5,
      title: "Rail Europe",
      desc: "All of UK, Ireland, Scotland & Europe are very well connected with Rail network. One of the best Travel experience to explore by Train, with various Rail passes, unbeatable flexibility these passes provide, it’s incredibly convenient too. The Interrail Pass, Eurail Pass and Swiss Pass are all available for sale with Konnect Europe Limited.",
      highlight:
        "With instant confirmation and best commissions, book next pass or train tickets with Konnect Europe Limited",
      icon: "/assets/Icon/RailEurope.svg",
    },
  ];

  // const modalMsg = {
  //   success: "Your reset password link has been sent to your registered email id",
  //   error: "This email address is not registered with us kindly enter registered email id",
  // };
  const [isOpen, setIsOpen] = useState(false);
  // const [modalDetails, setModalDetails] = useState({
  //   isSuccess: false,
  //   msg: modalMsg.error,
  //   isShow: false,
  // });
  // const handleServiceClick = (item) => {
  //   console.log("details");
  //   setModalDetails({ ...item, isShow: true });
  // };
  const [conformationPopupDetails, setConformationPopupDetails] = useState({
    isSuccess: false,
    msg: servicesList.desc,
    isShow: false,
  });
  const [modalDetails, setModalDetails] = useState({
    isShow: false,
    title: "",
    detail: "",
    highlight: "",
    isSuccess: "",
  });
  const handleServiceClick = (item) => {
    console.log(item);
    setModalDetails({
      isShow: true,
      title: item.title,
      detail: item.desc,
      highlight: item.highlight,
      isSuccess: item.isSuccess, // set isSuccess to item's isSuccess property
    });
  };
  return (
    <section
      className=" mt-24 px-8-e xl:px-16 mx-auto text-6xl"
      id="our-services"
    >
      <div>
        <h1 className="text-secondary text-3xl md:text-6xl font-bold w-full text-center ">
          Services <span className="text-primary">We Serve</span>
        </h1>
      </div>
      <div className="my-20 mx-4">
        <div className="wrap mx-auto lg:px-12 rounded-xl gap-4 flex flex-wrap justify-center">
          {servicesList.map((item, index) => (
            <div
              key={index}
              className="bg-[#E2FCFF] w-[23rem] group rounded-[43px] hover:bg-gradient-to-t hover:from-sky-400 hover:to-sky-600 mb-4 ease-in-out duration-150 shadow-sm transition-all px-3 pt-8 flex flex-col"
              onClick={() => {
                console.log("clicked item:", item); // add this to check if the click event is being triggered
                handleServiceClick(item); // update the modalDetails object to include isShow=true
              }}
            >
              <div className="flex flex-col xl:flex-row w-full items-stretch xl:items-center">
                <div className="flex order-2 mx-auto p-4 bg-white-e shadow-e rounded-full-e">
                  <Image
                    src={item.icon}
                    height={100}
                    width={200}
                    alt={`icons_${index}`}
                    className="mx-auto rounded-full-e"
                  />
                </div>
              </div>
              <p className="mx-auto font-Alegreya tracking-wider text-2xl uppercase font-bold text-primary group-hover:text-white my-4">
                {item.title}
              </p>
              <div className="flex items-center justify-between my-1">
                <div className="flex gap-2 order-2">
                  <div className="flex flex-col ml-5 text-left">
                    <p
                      style={{ lineHeight: 2.0, fontSize: "18px" }}
                      className="text-lg text-md text-center font-lato text-text-primary group-hover:text-white capitalize"
                    >
                      {item.desc}
                    </p>
                  </div>
                </div>
              </div>
              <div className="border-4 mx-6 rounded-xl border-[#E2FCFF] border-bg-[#E2FCFF]" />
            </div>
          ))}
        </div>

        {modalDetails.isShow && (
          <ServiceModel
            isOpen={modalDetails.isShow}
            modalDetails={modalDetails}
            setModalDetails={setModalDetails}
            closeButtonLabel="Close"
            setConformationPopupDetails={setConformationPopupDetails}
            isSuccess={
              modalDetails?.isSuccess ? modalDetails?.isSuccess : false
            }
          />
        )}
      </div>
    </section>
  );
};

export default OurServices;
