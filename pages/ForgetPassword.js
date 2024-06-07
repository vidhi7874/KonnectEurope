import React, { useEffect, useMemo, useState } from "react";
import { motion } from "framer-motion";
import getScrollAnimation from "../utils/getScrollAnimation";

import { useForm } from "react-hook-form";
import { loginApi } from "../services/login.service";
import Link from "next/link";
import Image from "next/image";
import { authApi } from "../services/auth.service";
import ThrowToasterMsg from "../services/ThrowToasterMsg";
import CustomModal from "../components/CustomModal";

const modalMsg = {
  success: "Your reset password link has been sent to your registered email id",
  error:
    "This email address is not registered with us kindly enter registered email id",
};

const ForgetPassword = () => {
  const scrollAnimation = useMemo(() => getScrollAnimation(), []);
  const [conformationPopupDetails, setConformationPopupDetails] = useState({
    isSuccess: false,
    msg: modalMsg.error,
    isShow: false,
  });

  const [isLoading, setIsLoading] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    console.log("data ---> ", data);
    setIsLoading(true);
    try {
      const res = await authApi.forgetPwd(data);
      console.log("res $$$ ---> ", res);
      let message = res?.data?.message;
      let status = res?.data?.status;

      if (status === 200) {
        setConformationPopupDetails({
          isSuccess: true,
          msg: modalMsg.success,
          isShow: true,
        });

        console.log("status ---> ", data, message);
      } else {
        setConformationPopupDetails({
          isSuccess: false,

          msg: modalMsg.error,
          isShow: true,
        });
        console.log("status ---> ", data, message);
      }
    } catch (error) {
      console.log("err $$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$ --> ", error);
    }
    setIsLoading(false);
  };

  useEffect(() => {
    console.log(
      "conformationPopupDetails ---------------> ",
      conformationPopupDetails
    );
  }, [conformationPopupDetails]);
  return (
    <div className="flex flex-col md:flex-row h-screen">
      <div className="bg-[#F1FBFE] md:w-1/2">
        <div className="flex  md:justify-start mb-8">
          <img
            src="/assets/logo.svg"
            alt="logo"
            className="h-16 md:h-20 hidden md:block absolute top-10 left-28"
          />
        </div>
        <div className="flex justify-center items-center h-full">
          <img
            src="/assets/images/forget_pwd_img.svg"
            alt="forgot password"
            className="w-2/3"
          />
        </div>
      </div>

      <div className="flex-1 flex flex-col justify-center p-4 md:p-8 mx-10">
        <h1 className="text-2xl sm:text-4xl text-secondary font-bold my-2  sm:my-10  text-center md:text-left">
          Forgot password
        </h1>
        <div className="w-full ">
          <div>
            <form onSubmit={handleSubmit(onSubmit)}>
              <div className="mt-4 w-full">
                <div>
                  <label className="label-text">Enter email address</label>
                  <input
                    type="email"
                    placeholder="Enter your email"
                    {...register("email", {
                      required: "Email is required",
                      pattern: {
                        value:
                          /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
                        message: "Please enter a valid email",
                      },
                    })}
                    className={`${
                      errors.email ? "border border-red-600" : "focus:ring-1"
                    }  inputStyle rounded bg-white h-[56px]  focus:outline-none`}
                  />
                  <div className="mx-2 mt-1">
                    {errors && errors.email && (
                      <span className="text-red-500">
                        {errors.email.message}
                      </span>
                    )}
                  </div>
                </div>

                <div className="text-center py-4 w-full">
                  <button
                    disabled={isLoading}
                    className={`${
                      isLoading ? "cursor-progress" : "cursor-pointer"
                    } px-20 py-3  shadow-md bg-gradient-to-r from-secondary to-secondary w-full hover:from-secondary hover:to-secondary transition-all duration-150 ease-in-out text-white  rounded `}
                  >
                    {isLoading ? "Sending Email..." : "Submit"}
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>

      {conformationPopupDetails.isShow && (
        <CustomModal
          isOpen={conformationPopupDetails?.isShow}
          title={conformationPopupDetails}
          setConformationPopupDetails={setConformationPopupDetails}
          closeButtonLabel="Close"
        />
      )}
    </div>
  );
};

export default ForgetPassword;
