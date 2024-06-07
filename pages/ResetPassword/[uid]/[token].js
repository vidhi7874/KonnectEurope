import React, { useMemo, useState } from "react";
import { motion } from "framer-motion";
// import getScrollAnimation from "../utils/getScrollAnimation";
// import ScrollAnimationWrapper from "../Layout/ScrollAnimationWrapper";
import { useForm } from "react-hook-form";
// import { loginApi } from "../services/login.service";
import Link from "next/link";
import Image from "next/image";
// import { authApi } from "../services/auth.service";
// import ThrowToasterMsg from "../services/ThrowToasterMsg";
import { yupResolver } from "@hookform/resolvers/yup";
import * as Yup from "yup";
// import { redirect } from "next/navigation";
import getScrollAnimation from "../../../utils/getScrollAnimation";
import { authApi } from "../../../services/auth.service";
import ThrowToasterMsg from "../../../services/ThrowToasterMsg";
import { useRouter } from "next/router";

const pwdErrors = [
  "Between 8 to 15 characters",
  " One lowercase letter",
  "One uppercase letter",
  "One numeric digit",
  "One special character",
];
// "New password should not be similar to current password",

const index = () => {
  const scrollAnimation = useMemo(() => getScrollAnimation(), []);
  const [isLoading, setIsLoading] = useState(false);
  const router = useRouter();
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const toggleShowPassword = () => {
    setShowPassword((prevShowPassword) => !prevShowPassword);
  };
  const toggleShowConfirmPassword = () => setShowConfirmPassword(!showConfirmPassword);


  const validationSchema = Yup.object().shape({
    newpassword: Yup.string()
      .required("Password is required")
      .min(8, "Password must be at least 8 to 15 characters")
      .max(15, "Password must be at least 8 to 15 characters")
      .test(
        "isValidPass",
        "Password must be 8 to 15 char (One UpperCase, One LowerCase & One Symbol)",
        (value, context) => {
          console.log("validations err ---> ", value, context);
          const hasUpperCase = /[A-Z]/.test(value);
          const hasLowerCase = /[a-z]/.test(value);
          const hasNumber = /[0-9]/.test(value);
          const hasSymbole = /[!@#%&]/.test(value);
          let validConditions = 0;
          const numberOfMustBeValidConditions = 4;
          const conditions = [
            hasLowerCase,
            hasUpperCase,
            hasNumber,
            hasSymbole,
          ];
          conditions.forEach((condition) =>
            condition ? validConditions++ : null
          );
          if (validConditions >= numberOfMustBeValidConditions) {
            return true;
          }
          return false;
        }
      ),
    confirmpassword: Yup.string()
      .required("Confirm Password is required")
      .oneOf([Yup.ref("newpassword")], "Passwords must match"),
  });
  const formOptions = { resolver: yupResolver(validationSchema) };

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm(formOptions);

  console.log(errors);

  const onSubmit = async (data) => {
    console.log("data ---> ", data);
    const { uid, token } = router.query;

    setIsLoading(true);
    try {
      console.log("data on password change ---> ", data);
      const res = await authApi.changePassword(data, { uid, token });
      console.log("res $$$ ---> ", res);
      let message = res?.data?.message;
      let status = res?.data?.status;

      if (status === 200) {
        ThrowToasterMsg(message, status);
        window.location.href = "/";
      }
    } catch (error) {
      console.log("err change pwd on err --> ", error);
    }
    setIsLoading(false);
  };

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
  <div className=" flex justify-center mx-6 sm:mx-10">
        <div>
          <h1 className="text-2xl sm:text-4xl text-secondary font-bold my-2">
            Reset password
          </h1>
          <div className="w-full-e mt-10 w-96-e  ">
            <div>
              <form onSubmit={handleSubmit(onSubmit)}>
                <div className="mt-2 w-full">
                <div className="relative">
  <label className="label-text">Password</label>
  <input
    placeholder="Password"
    name="newpassword"
    type={showPassword ? "text" : "password"}
    {...register("newpassword")}
    // errors
    className={`${
      errors.newpassword
          ? "border border-red-600"
          : "focus:ring-1"
      }  inputStyle rounded bg-white h-[56px]  focus:outline-none`}
  />
  <div
    className="absolute right-0 top-16 -translate-y-1/2 mr-2 cursor-pointer"
    onClick={toggleShowPassword}
  >
    {showPassword ? (
      <img className="mr-4" src="/assets/Icon/eye_open.svg" alt="Hide Password" />
    ) : (
      <img className="mr-4" src="/assets/Icon/eye_off.svg" alt="Show Password" />
    )}
  </div>
  <div className="mx-2 mt-1">
    {errors && errors?.newpassword && (
      <span className="text-red-500">
        {errors?.newpassword?.message}
      </span>
    )}
  </div>
</div>


                    <div className="mt-5">
                   <div className="relative">
                   <label className="label-text">Confirm Password</label>
                      <input
                        placeholder="Confirm Password"
                        name="confirmpassword"
                        type={showConfirmPassword ? "text" : "password"}
                        {...register("confirmpassword")}
                        // errors
                        className={`${
                          errors.confirmpassword
                            ? "border border-red-600"
                            : "focus:ring-1"
                        }  inputStyle rounded bg-white h-[56px]  focus:outline-none`}
                      />
                        <div
        className="absolute right-0 top-2/3 -translate-y-1/2 mr-2 cursor-pointer"
        onClick={toggleShowConfirmPassword}
      >
          {showConfirmPassword ? (
            <img className="mr-4" src="/assets/Icon/eye_open.svg" />
          ) : (
            <img className="mr-4" src="/assets/Icon/eye_off.svg" />
          )}
      </div>
                   </div>
                      <div className="mx-2 mt-1">
                        {errors && errors?.confirmpassword && (
                          <span className="text-red-500">
                            {errors?.confirmpassword?.message}
                          </span>
                        )}
                      </div>
                    </div>

                    <div className=" text-center py-4 w-full">
                      <button
                        disabled={isLoading}
                        className={`${
                          isLoading ? "cursor-progress" : "cursor-pointer"
                        } px-20 py-3  shadow-md bg-gradient-to-r from-secondary to-secondary w-full hover:from-secondary hover:to-secondary transition-all duration-150 ease-in-out text-white  rounded `}
                      >
                    {isLoading ? "Please Wait.." : "Submit"}
                      </button>
                    </div>

                    <div>
                      <h4 className="text-primary font-weight text-3xl">
                       Password Must Contain:
                     </h4>

                     <div>
                       <ul className="list-disc mt-5 mx-7">
                         {pwdErrors.map((el) => (
                           <li className="mt-3">{el}</li>
                         ))}
                      </ul>
                    </div>
                  </div>
                </div>
               </form>
            </div>
          </div>
        </div>
</div>
</div>
  );
};

export default index;
