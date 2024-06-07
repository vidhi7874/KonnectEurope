import React from "react";

const SubscribeNewsLetter = () => {
  return (
    <div>
      <div className="w-full flex items-center justify-center">
        <div className="lg:max-w-6xl md:max-w-3xl sm:max-w-2xl  max-w-lg w-full rounded-3xl pb-5  mb-6 lg:p-12 p-3 bg-primary">
          <div className="flex flex-col items-center justify-center text-white mb-6">
            <p>Wall of fame</p>
            <h1 className="font-bold text-4xl sm:text-3xl">Our Clients</h1>
          </div>
          <div className=" overflow-hidden">{/* <ClientCardSection /> */}</div>
        </div>
      </div>
    </div>
  );
};

export default SubscribeNewsLetter;
