import Image from "next/image";
import React, { useEffect, useState } from "react";
import Logo from "../../../public/assets/logo.svg";
import { Link as LinkScroll } from "react-scroll";
import { useForm } from "react-hook-form";
import { SubscribeNewsLetterApi } from "../../../services/subscribeNewsLetter.service";
import ThrowToasterMsg from "../../../services/ThrowToasterMsg";
import Link from "next/link";
import { BuildingShapeFooter } from "../../../public/assets/Icon";

const Footer = () => {
  const [activeLink, setActiveLink] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [scrollActive, setScrollActive] = useState(false);
  useEffect(() => {
    window.addEventListener("scroll", () => {
      setScrollActive(window.scrollY > 20);
    });
  }, []);
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  const onSubmit = async (data) => {
    console.log(data);

    try {
      setIsLoading(true);
      const res = await SubscribeNewsLetterApi.subscribeNewsLetter(data);
      console.log("res ---> ", res);
      if (res?.data?.status === 201) {
        ThrowToasterMsg(res?.data?.message, res?.data?.status);
        reset();
        // window.location.href = "/";
        // setConformationPopupDetails({
        //   isSuccess: true,
        //   msg: modalMsg.success,
        //   isShow: true,
        // });
      }
    } catch (error) {
      console.log("err signup --> ", error);

      ThrowToasterMsg(error?.data?.message, "");
    }
    setIsLoading(false);
  };

  return (
    <div>
      <div
        style={{
          backgroundImage: 'url("/assets/Icon/footer_img.svg")',
          backgroundSize: "100%",
          backgroundRepeat: "no-repeat",
          height: "353px",
        }}
        className=" flex  bg-cover border border-red-500 z-0 mt-20 pt-28 m-auto lg:pt-0 border-none relative h-20 flex-e justify-center"
      >
        <div className="absolute left-0 top-[20rem] hidden md:block">
          {/* <img
            className="w-1/2 h-80%"
            src="/assets/Icon/buildingShapefooter.svg"
          /> */}
          <Image
            src="/assets/Icon/buildingshapefooter.svg"
            width={100}
            height={380}
            alt="Picturce of the author"
          />
        </div>
        <div className="w-full-e flex items-center justify-center subscribe-news-letter absolute bottom-0  w-[85%] m-auto">
          <div className="lg:max-w-6xl md:max-w-3xl sm:max-w-2xl e-mt-[4rem] max-w-lg w-full rounded-lg px-4 md:px-28 py-16 p-3 shadow-2xl  bg-white">
            <div className="flex items-center justify-start text-white mb-6">
              <h1 className=" uppercase font-Alegreya tracking-wider font-bold text-primary md:text-4xl text-3xl text-center sm:text-3xl">
                Subscribe Newsletters
              </h1>
            </div>
            <div className="overflow-hidden md:flex items-center justify-around gap-10">
              <form onSubmit={handleSubmit(onSubmit)} className="w-full">
                <div className="flex flex-col md:flex-row gap-3 items-center w-full">
                  <input
                    type="text"
                    {...register("subscriber_name", {
                      required: "Name is required",
                    })}
                    className={`border ${
                      errors.subscriber_name
                        ? "border border-red-600"
                        : "focus:ring-1"
                    } inputStyle rounded bg-white h-[56px]  focus:outline-none`}
                    placeholder="Enter your Name"
                  />
                  {errors.subscriber_name && (
                    <p className="text-red-600">
                      {errors.subscriber_name.message}
                    </p>
                  )}
                  <input
                    type="text"
                    {...register("subscriber_email", {
                      required: "Email is required",
                      pattern: /^\S+@\S+$/i,
                    })}
                    className={`border ${
                      errors.subscriber_email
                        ? "border border-red-600"
                        : "focus:ring-1"
                    } inputStyle rounded bg-white h-[56px]  focus:outline-none`}
                    placeholder="Enter your E-mail"
                  />
                  {errors.subscriber_email && (
                    <p className="text-red-600">
                      {errors.subscriber_email.message}
                    </p>
                  )}
                  <button className="p-4 font-Alegreya tracking-wider md:w-96 w-full md:mt-2 mt-4 bg-[#0090C5] rounded-[4px] font-bold text-white">
                    {isLoading ? "Please wait..." : "Subscribe Now"}
                  </button>
                </div>
                {errors.subscriber_name && <p className="text-red-600"></p>}
                {errors.subscriber_email && <p className="text-red-600"></p>}
              </form>
            </div>
          </div>
        </div>
      </div>

      <div
        style={{
          backgroundImage: 'url("/assets/images/footer_map.svg") ',
          backgroundRepeat: "no-repeat",
          backgroundPosition: "right top",
          height: "353px",
          backgroundSize: "50%",
        }}
        className="bgimg "
      >
        <div className="w-full-e flex items-center justify-center subscribe-news-letter absolut-e  bottom-0  w-[85%] m-auto">
          <div className="lg:max-w-6xl md:max-w-3xl sm:max-w-2xl e-mt-[4rem] max-w-lg w-full rounded-lg  p-3   bg-white-e">
            <div className="flex flex-col-reverse sm:flex-col">
              <div>
                <ul className="list-none sm:flex gap-10 sm:mt-5 mt-16 font-semibold text-primary ">
                  <ul className="hidden lg:flex col-start-4 col-end-8 text-black-500  items-center">
                    <LinkScroll
                      activeclassName="active"
                      to="hero"
                      spy={true}
                      smooth={true}
                      duration={1000}
                      onSetActive={() => {
                        setActiveLink("hero");
                      }}
                      onClick={() => {
                        if (window.location.pathname !== "/") {
                          window.location.pathname = "/";
                        }
                      }}
                      className={
                        "px-4 py-2 mx-2 cursor-pointer animation-hover inline-block relative" +
                        (activeLink === "hero"
                          ? " text-primary animation-active font-Alegreya tracking-wider bg-primary/10 font-bold rounded-full"
                          : " text-black-500 hover:text-orange-500 a")
                      }
                    >
                      Home
                    </LinkScroll>
                    <LinkScroll
                      activeclassName="active"
                      to="our-services"
                      spy={true}
                      smooth={true}
                      duration={1000}
                      onSetActive={() => {
                        setActiveLink("our-services");
                      }}
                      onClick={() => {
                        if (window.location.pathname !== "/") {
                          window.location.pathname = "/";
                        }
                      }}
                      className={
                        "px-4 py-2 mx-2 cursor-pointer animation-hover inline-block relative" +
                        (activeLink === "our-services"
                          ? " text-orange-600 animation-active bg-orange-100 rounded-full"
                          : " text-black-500 hover:text-orange-500 ")
                      }
                    >
                      Our Service
                    </LinkScroll>
                    <LinkScroll
                      activeclassName="active"
                      to="aboutUs"
                      spy={true}
                      smooth={true}
                      duration={1000}
                      onSetActive={() => {
                        setActiveLink("aboutUs");
                      }}
                      onClick={() => {
                        if (window.location.pathname !== "/") {
                          window.location.pathname = "/";
                        }
                      }}
                      className={
                        "px-4 py-2 mx-2 cursor-pointer animation-hover inline-block relative" +
                        (activeLink === "aboutUs"
                          ? " text-primary animation-active bg-primary/10  tracking-wider rounded-full"
                          : " text-black-500 hover:text-orange-500 a")
                      }
                    >
                      About Us
                    </LinkScroll>

                    {/* <LinkScroll
                      activeclassName="active"
                      to="contact-us"
                      spy={true}
                      smooth={true}
                      duration={1000}
                      onSetActive={() => {
                        setActiveLink("contact-us");
                      }}
                      className={
                        "px-4 py-2 mx-2 cursor-pointer animation-hover inline-block relative" +
                        (activeLink === "contact-us"
                          ? " text-orange-600 animation-active bg-orange-100 rounded-full"
                          : " text-black-500 hover:text-orange-500 ")
                      }
                    >
                      Contact us
                    </LinkScroll> */}

                    <span className="text-primary-e hover:text-orange-500">
                      <Link
                        className={
                          "px-4 py-2 mx-4 text-black-500  cursor-pointer animation-hover inline-block relative"
                        }
                        href="/ContactUs"
                      >
                        Contact Us
                      </Link>
                    </span>
                  </ul>
                </ul>
              </div>

              <div>
                <h4 className="text-primary font-Alegreya tracking-wider font-bold sm:text-5xl text-4xl mt-8">
                  Konnect Europe
                </h4>
                <p className="mt-5">
                  71-75 Shelton Street, Covent Garden, London, WC2H 9JQ, United
                  Kingdom
                </p>
              </div>
            </div>
            <div className="grid md:grid-cols-3 gap-4 mt-8">
              <div className="text-center md:text-left">
                © 2023 Konnect Europe. All rights reserved.{" "}
              </div>
              <div>
                <ul className="list-none flex sm:gap-8 gap-3 text-center justify-center text-xs mb-8 cursor-pointer">
                  <li>
                    <Link href="TermsOfService">Terms of Service</Link>
                  </li>
                  <li>
                    <Link href="PrivacyPolicy">Privacy Policy</Link>
                  </li>
                  <li>
                    <Link href="FAQ">FAQ</Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

// <div className="relative flex  flex-row-reverse-e  border border-red-500 h-40vh-e">
//   <div className=" mx-auto   relative  flex justify-center items-center border border-green-600">
//     <div className="w-full ">
//       <img
//         src="/assets/Icon/footer_img.svg"
//         className="w-full"
//         width="100%"
//         height="100"
//         alt="footer_img"
//       />
//     </div>
//     <div className="lg:max-w-6xl absolute top-38 md:max-w-3xl sm:max-w-2xl  max-w-lg w-full rounded-lg px-28 py-12 p-3 shadow-2xl  bg-white border">
//       <div className="flex items-center justify-start text-white mb-6">
//         <h1 className=" uppercase font-bold text-primary text-4xl sm:text-3xl">
//           Subscribe Newsletters
//         </h1>
//       </div>
//       <div className=" overflow-hidden sm:flex  items-center justify-around gap-10">
//         <input
//           type="text"
//           className="border border-[#0A142F]/20 px-2 rounded-[4px] h-12 w-full"
//           placeholder="Enter your E-mail"
//         />
//         <input
//           type="text"
//           className="border  border-[#0A142F]/20 px-2 rounded-[4px] h-12 w-full"
//           placeholder="Enter your E-mail"
//         />
//         <button className="p-3 w-96 bg-[#0090C5] rounded-[4px] font-bold text-white">
//           Subcribe Now
//         </button>
//       </div>
//     </div>
//   </div>

//   <div className="absolute top-10  w-full bottom-0">
//     <nav className="flex items-center justify-between flex-wrap bg-teal-500 p-6">
//       <div className="flex items-center flex-shrink-0 text-white mr-6">
//         <svg
//           className="fill-current h-8 w-8 mr-2"
//           width="54"
//           height="54"
//           viewBox="0 0 54 54"
//           xmlns="http://www.w3.org/2000/svg"
//         >
//           <path d="M13.5 22.1c1.8-7.2 6.3-10.8 13.5-10.8 10.8 0 12.15 8.1 17.55 9.45 3.6.9 6.75-.45 9.45-4.05-1.8 7.2-6.3 10.8-13.5 10.8-10.8 0-12.15-8.1-17.55-9.45-3.6-.9-6.75.45-9.45 4.05zM0 38.3c1.8-7.2 6.3-10.8 13.5-10.8 10.8 0 12.15 8.1 17.55 9.45 3.6.9 6.75-.45 9.45-4.05-1.8 7.2-6.3 10.8-13.5 10.8-10.8 0-12.15-8.1-17.55-9.45-3.6-.9-6.75.45-9.45 4.05z" />
//         </svg>
//         <span className="font-semibold text-xl tracking-tight">
//           Tailwind CSS
//         </span>
//       </div>
//       <div className="block lg:hidden">
//         <button className="flex items-center px-3 py-2 border rounded text-teal-200 border-teal-400 hover:text-white hover:border-white">
//           <svg
//             className="fill-current h-3 w-3"
//             viewBox="0 0 20 20"
//             xmlns="http://www.w3.org/2000/svg"
//           >
//             <title>Menu</title>
//             <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
//           </svg>
//         </button>
//       </div>
//       <div className="w-full block flex-grow lg:flex lg:items-center lg:w-auto">
//         <div className="text-sm lg:flex-grow">
//           <a
//             href="#responsive-header"
//             className="block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white mr-4"
//           >
//             Docs
//           </a>
//           <a
//             href="#responsive-header"
//             className="block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white mr-4"
//           >
//             Examples
//           </a>
//           <a
//             href="#responsive-header"
//             className="block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white"
//           >
//             Blog
//           </a>
//         </div>
//         <div>
//           <a
//             href="#"
//             className="inline-block text-sm px-4 py-2 leading-none border rounded text-white border-white hover:border-transparent hover:text-teal-500 hover:bg-white mt-4 lg:mt-0"
//           >
//             Download
//           </a>
//         </div>
//       </div>
//     </nav>
//   </div>
// </div>
export default Footer;
{
  /* 
  <div>
  <div
    style={{
      backgroundImage: 'url("/assets/Icon/footer_img.svg")',
      backgroundSize: "100%",
      backgroundRepeat: "no-repeat",
      height: "353px",
    }}
    className=" bg-cover border z-0 mt-20 pt-28 lg:pt-0 border-none relative h-20 flex-e justify-center"
  >
    <div className="w-full-e flex items-center justify-center subscribe-news-letter absolute  w-[85%] m-auto">
      <div className="lg:max-w-6xl md:max-w-3xl sm:max-w-2xl mt-[9rem] max-w-lg w-full rounded-lg px-28 py-12 p-3 shadow-2xl  bg-white">
        <div className="flex items-center justify-start text-white mb-6">
          <h1 className=" uppercase font-bold text-primary text-4xl sm:text-3xl">
            Subscribe Newsletters
          </h1>
        </div>
        <div className=" overflow-hidden sm:flex  items-center justify-around gap-10">
          <input
            type="text"
            className="border border-[#0A142F]/20 px-2 rounded-[4px] h-12 w-full"
            placeholder="Enter your E-mail"
          />
          <input
            type="text"
            className="border  border-[#0A142F]/20 px-2 rounded-[4px] h-12 w-full"
            placeholder="Enter your E-mail"
          />
          <button className="p-3 w-96 bg-[#0090C5] rounded-[4px] font-bold text-white">
            Subcribe Now
          </button>
        </div>
      </div>
    </div>
  </div>
</div>
 */
}

// <div
//           className=" text-black items-center flex justify-center"
//           style={{
//             backgroundImage: 'url("/assets/images/footer_map.svg")',
//             backgroundSize: "50%",
//             backgroundRepeat: "no-repeat",
//             backgroundPositionX: "right",
//           }}
//         >
//           <footer className="p-4 sm:p-6 max-w-[1500px] w-[1200px]">
//             <div className="my-10">
//               <ul className="text-primary sm:flex font-semibold  gap-6">
//                 <li>HOME</li>
//                 <li>ABOUT US</li>
//                 <li>OUR SERVICES</li>
//                 <li>CONTACT US</li>
//               </ul>

//               {/* <hr className="bg-gray border-hr my-10 w-1/2" /> */}
//             </div>

//             <div className=" my-4 ">
//               <div className=" mb-[0.5rem]">
//                 <h2 className="font-bold text-3xl lg:text-5xl md:text-xl text-primary mb-4 ">
//                   Konnect Europe
//                 </h2>
//                 <p
//                   className="text-lg w-full lg:w-2/3 text-gray-300 mb-4"
//                   style={{
//                     fontSize: "14px",
//                     color: "#5E6282",
//                   }}
//                 >
//                   71-75 Shelton Street, Covent Garden, London, WC2H 9JQ, United
//                   Kingdom
//                 </p>
//                 {/* <p className=" text-gray-300 mb-4">
//                 <a href="tel:90237 25674">+91 (902) 37-25676</a>
//               </p> */}
//               </div>
//             </div>

//             <div
//               className="sm:flex sm:items-center mt-16 sm:justify-between w-2/3 mb-10"
//               style={{
//                 // fontSize: "14px",
//                 color: "#5E6282",
//               }}
//             >
//               <span className="text-sm sm:text-center ">
//                 © 2019 Lift Media. All rights reserved.
//               </span>
//               <div className="flex mt-4 space-x-6 sm:justify-center sm:mt-0">
//                 {/* Alegreya Sans SC */}

//                 <a
//                   href="https://www.linkedin.com/company/atc-chains-india-ahmedabad/"
//                   target="_blank"
//                   className="text-gray-500 hover:text-blue-600"
//                 >
//                   Terms of Service
//                 </a>
//                 <a
//                   href="https://www.youtube.com/@atcchainsindia3442"
//                   target="_blank"
//                   className="text-gray-500 hover:text-blue-600 "
//                 >
//                   Privacy Policy
//                 </a>
//                 <a
//                   href="https://www.youtube.com/@atcchainsindia3442"
//                   target="_blank"
//                   className="text-gray-500 hover:text-blue-600 "
//                 >
//                   FAQ
//                 </a>
//               </div>
//             </div>
//           </footer>
//         </div>
