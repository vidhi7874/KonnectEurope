import Link from "next/link";
import React, { useState, useEffect } from "react";
import { Link as LinkScroll } from "react-scroll";
import Logo from "../../../public/assets/logo.svg";

const Header = () => {
  const [activeLink, setActiveLink] = useState(null);
  const [scrollActive, setScrollActive] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      setScrollActive(window.scrollY > 20);
    });
  }, []);

  useEffect(() => {}, [activeLink]);

  return (
    <>
      <header
        className={
          "  fixed top-0 w-full bg-[#F4FEFF] hidden shadow-[0_20px_50px_rgba(0,_190,_237,_0.15)] lg:block z-50 transition-all " +
          (scrollActive ? " shadow-md pt-0" : "")
        }
      >
        <nav className="max-w-screen-2xl bg-white px-6 sm:px-8 xl:px-16 mx-auto grid grid-flow-col sm:py-2">
          <div className="col-start-1 col-end-2 pl-2 flex items-center">
            <Link href="/">
              <a>
                <Logo
                  className="h-20 w-auto"
                  onClick={() => (window.location.href = "/")}
                />
              </a>
            </Link>
          </div>
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
                  : " text-[#8E8E8E] hover:text-orange-500 a")
              }
            >
              HOME
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
                  ? " text-primary animation-active font-Alegreya tracking-wider bg-primary/10 font-bold rounded-full"
                  : "  text-[#8E8E8E] hover:text-orange-500 a")
              }
            >
              OUR SERVICES
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
                  ? " text-primary animation-active font-Alegreya tracking-wider bg-primary/10 font-bold rounded-full"
                  : "  text-[#8E8E8E] hover:text-orange-500 a")
              }
            >
              ABOUT US
            </LinkScroll>

            <li>
              <span className="text-[#8E8E8E] hover:text-orange-500">
                <Link
                  className={
                    "px-4 py-2 mx-3 text-black-500 cursor-pointer animation-hover inline-block relative" +
                    (activeLink === "contactUs"
                      ? " text-primary animation-active font-Alegreya tracking-wider bg-primary/10 font-bold rounded-full"
                      : "")
                  }
                  href="/ContactUs"
                >
                  CONTACT US
                </Link>
              </span>
            </li>
          </ul>
        </nav>
      </header>

      {/* Start Mobile Navigation */}
      <nav className="fixed lg:hidden bottom-0 left-0 right-0 z-20 shadow-t ">
        <div className="bg-white p-4 ">
          <ul className="flex w-full justify-between items-center text-black-500">
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
                "mx-1 sm:mx-2 px-3 sm:px-4 py-2 flex  flex-col items-center text-xs border-t-2 transition-all " +
                (activeLink === "hero"
                  ? " text-primary animation-active bg-primary/10 rounded-full"
                  : " border-transparent")
              }
            >
              HOME
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
                "mx-1 sm:mx-2 px-3 sm:px-4 py-2 flex flex-col items-center text-xs border-t-2 transition-all " +
                (activeLink === "aboutUs"
                  ? " text-primary animation-active bg-primary/10 rounded-full"
                  : " border-transparent ")
              }
            >
              ABOUT US
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
                "mx-1 sm:mx-2 px-3 sm:px-4 py-2 flex flex-col items-center  text-xs border-t-2 transition-all " +
                (activeLink === "our-services"
                  ? " text-primary animation-active bg-primary/10 rounded-full"
                  : " border-transparent ")
              }
            >
              OUR SERVICES
            </LinkScroll>

            <li>
              <span className=" hover:text-orange-500">
                <Link
                  className={
                    "px-4 py-2 mx-3 text-black-500 cursor-pointer animation-hover inline-block relative" +
                    (activeLink === "contactUs"
                      ? " text-primary animation-active  tracking-wider bg-primary/10 font-bold rounded-full"
                      : "")
                  }
                  href="/ContactUs"
                >
                  CONTACT US
                </Link>
              </span>
            </li>
          </ul>
        </div>
      </nav>
      {/* End Mobile Navigation */}
    </>
  );
};

export default Header;
