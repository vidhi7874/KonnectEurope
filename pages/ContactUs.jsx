import React, { useState } from "react";

import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import Image from "next/image";
import ThrowToasterMsg from "../services/ThrowToasterMsg";
import { contactUsApi } from "../services/contact.service";
import { Footer, Header } from "../components/common";

const phoneRegExp =
  /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/;

const schema = yup.object().shape({
  contact_name: yup.string().required("Name is required"),
  email: yup.string().email("Invalid email").required("Email is required"),
  contact_number: yup
    .string()
    .required("Contact no required")
    .matches(/^\d{10}$/, "Phone number is not valid")
    .min(10, "Too short")
    .max(10, "Too long"),

  country: yup.string().required("Country of residence is required"),
  request_type: yup.string().required("Type of request is required"),
  inquiry: yup.string().required("Inquiry is required"),
});

const ContactUs = () => {
  const addresses = [
    {
      heading: "United Kingdom, Head Quator",
      address:
        "71-75 Shelton Street, Covent Garden  London, WC2H 9JQ, United Kingdom",
      phone: "+44 752 064 0435",
      email: "abc2gmail.com",
    },
    {
      heading: "Ahmedabad, India",
      address: "409, Galaxy Mall, Opp. Rani Zansi BRT stop, Satellite Road,",
      phone: "+91 79 4898 2907",
      email: "abc2gmail.com",
    },
    {
      heading: "UAE Sales & Operation Office",
      address: "222, Oasis Mankool, Bur Dubai, UAE",
      phone: "+971 54 453 9663",
      email: "abc2gmail.com",
    },
    {
      heading: "USA Sales Representative Location ",
      address: "Chicago, Los Angeles ",
      phone: "+971 54 453 9663",
      email: "abc2gmail.com",
    },
    {
      heading: "Australia Sales Representative Location",
      address: "Sydney, Melbourne, New South Wales ",
      phone: "+971 54 453 9663",
      email: "abc2gmail.com",
    },
    {
      heading: "Japan Sales Representative Location ",
      address: "Tokyo ",
      phone: "+971 54 453 9663",
      email: "abc2gmail.com",
    },
  ];

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    resolver: yupResolver(schema),
  });

  const [isLoading, setIsLoading] = useState(false);

  console.log("errors --> ", errors);
  const handleInput = (event) => {
    const inputValue = event.target.value;
    event.target.value = inputValue.slice(0, 10);
  };

  const onSubmit = async (data) => {
    let formData = {
      ...data,
      contact_number: `+91${data.contact_number}`,
    };
    console.log(formData);

    try {
      setIsLoading(true);
      const res = await contactUsApi.contactUs(formData);
      console.log("res ---> ", res);
      if (res?.data?.status === 201) {
        ThrowToasterMsg(res?.data?.message, res?.data?.status);
        reset();
      }
    } catch (error) {
      console.log("err signup --> ", error);

      ThrowToasterMsg(error?.data?.message, "");
    }
    setIsLoading(false);
  };

  return (
    <>
      <Header />
      <div className="mt-24" id="contactUs">
        <div className="flex flex-col md:flex-row space-x-2">
          <div className=" my-5 w-full md:w-2/3 md:pr-8 pb-8 md:pb-0 ml-10 rounded-3xl shadow-md  ">
            <div className="p-6">
              <h1 className="text-3xl py-4 font-bold mb-3  text-primary">
                Contact Us
              </h1>
              <form
                className="w-5/6 mt-7 p-5"
                onSubmit={handleSubmit(onSubmit)}
              >
                <div className="my-8">
                  <label className="text-text-primary">Enter your name</label>
                  <input
                    className={`w-full bgLightGray bg-inputLabel border border-slate-200  ${
                      errors.contact_name
                        ? "border-red-500 border"
                        : "border-gray-200"
                    } rounded py-2 px-4 mb-2 leading-tight focus:outline-none focus:bg-white focus:border-gray-500`}
                    id="contact_name"
                    type="text"
                    {...register("contact_name")}
                  />
                  {errors.contact_name && (
                    <p className="text-red-500">
                      {errors.contact_name.message}
                    </p>
                  )}
                </div>
                <div className="my-4">
                  <label className="text-text-primary  mt-3">
                    Enter your email
                  </label>
                  <input
                    className={`w-full bgLightGray border border-slate-200 bg-inputLabel  ${
                      errors.email ? "border-red-500 border" : "border-gray-200"
                    } rounded py-2 px-4 mb-2 leading-tight focus:outline-none focus:bg-white focus:border-gray-500`}
                    id="email"
                    type="email"
                    {...register("email")}
                  />
                  {errors.email && (
                    <p className="text-red-500">{errors.email.message}</p>
                  )}
                </div>
                <div className="my-4">
                  <label className="text-text-primary ">Contact no</label>
                  <input
                    className={`w-full bgLightGray border border-slate-200 bg-inputLabel  ${
                      errors.contact_number
                        ? "border-red-500 border"
                        : "border-gray-200"
                    } rounded py-2 px-4 mb-2 leading-tight focus:outline-none focus:bg-white focus:border-gray-500`}
                    id="contact_number"
                    type="number"
                    maxLength={10}
                    {...register("contact_number")}
                    onInput={handleInput}
                  />
                  {errors.contact_number && (
                    <p className="text-red-500">
                      {errors.contact_number.message}
                    </p>
                  )}
                </div>
                <div className="my-4">
                  <label className="text-text-primary">Country residence</label>
                  <input
                    className={`w-full bgLightGray border border-slate-200 bg-text-primary  ${
                      errors.country
                        ? "border-red-500 border"
                        : "border-gray-200"
                    } rounded py-2 px-4 mb-2 leading-tight focus:outline-none focus:bg-white focus:border-gray-500`}
                    id="country"
                    type="text"
                    {...register("country")}
                  />
                  {errors.country && (
                    <p className="text-red-500">{errors.country.message}</p>
                  )}
                </div>
                <div className="my-4">
                  <label className="text-text-primary">Type of request</label>
                  <input
                    className={`w-full bgLightGray border border-slate-200 bg-inputLabel  ${
                      errors.request_type
                        ? "border-red-500 border"
                        : "border-gray-200"
                    } rounded py-2 px-4 mb-2 leading-tight focus:outline-none focus:bg-white focus:border-gray-500`}
                    id="request_type"
                    type="text"
                    {...register("request_type")}
                  />
                  {errors.request_type && (
                    <p className="text-red-500">
                      {errors.request_type.message}
                    </p>
                  )}
                </div>
                <div className="my-4">
                  <label className="text-text-primary">Your inquiry</label>
                  <input
                    className={`bgLightGray border border-slate-200 w-full bg-inputLabel  ${
                      errors.inquiry
                        ? "border-red-500 border"
                        : "border-gray-100"
                    } rounded py-2 px-4 mb-2 leading-tight focus:outline-none focus:bg-white focus:border-gray-500`}
                    id="inquiry"
                    type="text"
                    {...register("inquiry")}
                  />
                  {errors.inquiry && (
                    <p className="text-red-500 ">{errors.inquiry.message}</p>
                  )}
                </div>
                <div className="flex justify-center mt-10">
                  <button
                    disabled={isLoading}
                    className="bg-secondary text-xl  hover:bg-blue-700 text-white font-bold py-4 px-16 rounded focus:outline-none focus:shadow-outline"
                    type="submit"
                  >
                    {isLoading ? "Please wait..." : "Submit"}
                  </button>
                </div>
              </form>
            </div>
          </div>
          <div className="w-100% md:w-1/3 bg-white rounded-2xl">
            {/* Content for the other part goes here */}
            {addresses.map((address, index) => (
              <div
                key={index}
                className="max-w-md mx-4 my-2 bg-white rounded-3xl shadow-sm overflow-hidden md:max-w-2xl"
              >
                <div
                  key={index}
                  className="p-8 flex flex-col items-center md:flex-row md:items-start md:justify-between  ml-3"
                >
                  <div className="ml-4 md:flex-1 md:ml-6">
                    <div className="uppercase tracking-wide text-md text-primary font-bold">
                      {address.heading}
                    </div>
                    <div className="mt-2 w-full text-sm text-secondary">
                      {address.address}
                    </div>
                    <div className="flex justify-between">
                      <div className="mt-4 flex items-center">
                        <Image
                          src="/assets/Icon/phone.svg"
                          width={20}
                          height={20}
                        />
                        <span className="text-secondary">{address.phone}</span>
                      </div>
                      <div className="mt-4 flex items-center">
                        <Image
                          src="/assets/Icon/Mail.svg"
                          width={20}
                          height={20}
                        />
                        <span className="text-secondary">{address.email}</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};
export default ContactUs;
