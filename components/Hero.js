import React, { useMemo, useState } from "react";
import { motion } from "framer-motion";
import getScrollAnimation from "../utils/getScrollAnimation";
import ScrollAnimationWrapper from "./Layout/ScrollAnimationWrapper";
import { useForm } from "react-hook-form";
import { loginApi } from "../services/login.service";
import Link from "next/link";
import { authApi } from "../services/auth.service";
import { localStorageService } from "../services/localStorge.service";

const Hero = ({}) => {
  const scrollAnimation = useMemo(() => getScrollAnimation(), []);
  const [showPassword, setShowPassword] = useState(false);

  const toggleShowPassword = () => {
    setShowPassword((prevShowPassword) => !prevShowPassword);
  };
  const [isLoading, setIsLoading] = useState(false);
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm({
    trapSpacesForRequiredFields: true,
  });

  const onSubmit = async (data) => {
    try {
      setIsLoading(true);
      const res = await authApi.login(data);
      console.log("res ---> ", res);
      if (res.data && res.status === 200) {
        const { access } = res.data.token;
        //NEXT_PUBLIC_AGENT_PORTAL_URL
        const url = process.env.NEXT_PUBLIC_AGENT_PORTAL_URL;
        // window.location.href = `${url}?token=${access}`;
        //   const { agency_email, agency_name } = res.data;
        // let user_obj = JSON.stringify({ agency_email, agency_name, access });
        // localStorageService.set("konnect_europe_user_details", {
        //   agency_email,
        //   agency_name,
        //   access,
        // });
        console.log("NEXT_PUBLIC_AGENT_PORTAL_URL --> ", url);
        window.open(`${url}?access_token=${access}`, "_self");
        // https://base.url?access_token=f4f4994a875f461ca4d7708b9e027df4
      }
    } catch (error) {
      console.log("err --> ", error);
    }
    setIsLoading(false);
  };

  console.log("errors --> ", errors);

  return (
    <div className="max-w-screen-2xl lg:mt-24 px-6 xl:px-16 mx-auto" id="hero">
      <ScrollAnimationWrapper>
        <motion.div
          className="grid grid-cols-1 text-start lg:grid-cols-3 gap-4 py-6"
          variants={scrollAnimation}
        >
          <div className="col-span-2 pl-4 flex items-center ">
            <h1 className=" text-2xl sm:text-5xl text-secondary font-extrabold font-Alegreya tracking-wider xl:text-6xl capitalized  text-black-600 leading-normal">
              Discover the amazing <br /> adventures{" "}
              <span className=" text-primary font-Alegreya tracking-wider">
                waiting for you to
                <br /> be explored
              </span>{" "}
              with us!
            </h1>
          </div>
          <div className=" shadow-[0_20px_50px_rgba(0,_190,_237,_0.15)] lg:mx:0 min-w[27rem] lg:mt-10 max-w-lg border border-gray/10 rounded-[40px] p-8  ">
            <div className=" mt-4 text-left bg-white rounded-2xl">
              <div className="flex gap-3 justify-between items-center ">
                <h3 className=" text-xl sm:text-2xl font-bold text-center font-Alegreya tracking-wider">
                  AGENT LOGIN
                </h3>{" "}
                <h6 className="text-gray text-sm">
                  No Account ?{" "}
                  <span className="text-primary font-bold hover:underline">
                    <Link href="/Signup">Sign Up</Link>
                  </span>
                </h6>
              </div>
              <form onSubmit={handleSubmit(onSubmit)}>
                <div className="mt-4 w-full">
                  <div>
                    <input
                      type="email"
                      placeholder="Email"
                      {...register("email", {
                        required: "Email is required",
                        pattern: {
                          value:
                            /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
                          message: "Please enter a valid email",
                        },
                      })}
                      // errors
                      className={`${
                        errors.email ? "border border-red-600" : "focus:ring-1"
                      }  inputStyle h-[56px]  focus:outline-none  `}
                    />
                    <div className="mx-2 mt-1">
                      {errors && errors.email && (
                        <span className="text-red-500">
                          {errors.email.message}
                        </span>
                      )}
                    </div>
                  </div>
                  <div className="mt-4 relative">
                    <input
                      type={showPassword ? "text" : "password"}
                      placeholder="Password"
                      {...register("password", {
                        required: "You must specify a password",
                      })}
                      className={`${
                        errors.password
                          ? "border border-red-600"
                          : "focus:ring-1"
                      } inputStyle h-[56px] focus:outline-none`}
                    />
                    {watch("password") && (
                      <div
                        className="absolute right-0 top-1/2 -translate-y-1/2 mr-2 cursor-pointer"
                        onClick={toggleShowPassword}
                      >
                        {showPassword ? (
                          <img
                            className="mr-4"
                            src="/assets/Icon/eye_open.svg"
                          />
                        ) : (
                          <img
                            className="mr-4"
                            src="/assets/Icon/eye_off.svg"
                          />
                        )}
                      </div>
                    )}
                    <div className="mt-1 mx-1">
                      {errors && errors.password && (
                        <span className="text-red-500">
                          {errors.password.message}
                        </span>
                      )}
                    </div>
                  </div>

                  <div className="flex items-center my-4 gap-2 justify-between">
                    <div className="flex mt-5 items-center gap-2">
                      <input
                        type="checkbox"
                        className="py-2 h-5 w-5 bg-secondary rounded-2xl boder border-gray text-secondary hover:bg-primary"
                      />
                      Remember me
                    </div>

                    <span className="text-primary -mt-6  text-xs md:text-sm font-bold hover:underline">
                      <Link href="/ForgetPassword"> Forgot password?</Link>
                    </span>
                  </div>

                  <div className="text-center py-4 w-full">
                    <button
                      disabled={isLoading}
                      className={`${
                        isLoading ? "cursor-progress" : "cursor-pointer"
                      } px-20 py-3  shadow-md bg-gradient-to-r from-primary to-primary/50 hover:from-secondary hover:to-secondary/50 transition-all duration-150 ease-in-out text-white  rounded-xl  `}
                    >
                      {isLoading ? "Please wait..." : "Sign in"}
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </motion.div>
      </ScrollAnimationWrapper>
    </div>
  );
};

export default Hero;
