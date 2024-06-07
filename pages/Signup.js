import React, { useMemo, useState, useEffect } from "react";
import { useForm } from "react-hook-form";

import { motion } from "framer-motion";
import getScrollAnimation from "../utils/getScrollAnimation";

import svg_icons from "../public/assets/Icon/svgIcons";
import upload_svg_icon from "../public/assets/Icon/upload.svg";
import ButtonOutline from "../components/common/Buttons/ButtonPrimary";
import Link from "next/link";
import { signupApi } from "../services/signup.service";
import ReactPhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
import csc from "country-state-city";
import { Country, State, City } from "country-state-city";
import Select from "react-select";
import { yupResolver } from "@hookform/resolvers/yup";
import * as Yup from "yup";
import ThrowToasterMsg from "../services/ThrowToasterMsg";
import CustomModal from "../components/CustomModal";
import { Footer, Header } from "../components/common";

const modalMsg = {
  success: "Agent sign up successfully",
};

const phoneNumberInputStyle = {
  backgroundColor: "#F8F9FF",

  height: "49px",
  marginTop: "10px",
  width: "100%",
  margin: "4px",
};

const phoneNumberInputButtonStyle = {
  backgroundColor: "#F8F9FF",
  height: "49px",
  padding: "8px 0px",
  borderRadius: "8px 0px 0px 8px",
};

const SUPPORTED_FORMATS = ["image/jpg", "image/jpeg", "image/png"];
const Signup = () => {
  const [isLoading, setIsLoading] = useState(false);
  const scrollAnimation = useMemo(() => getScrollAnimation(), []);
  const [phone, setPhone] = useState({});
  const [agencyContact, setAgencyContact] = useState({});
  const [countryState, setCountryState] = useState({});
  const [states, setStates] = useState({});
  const [citiesState, setCitiesState] = useState({});

  const validationSchema = Yup.object().shape({
    agency_name: Yup.string().required("Agency name is required"),
    agency_contact: Yup.string().required("Agency contact is required"),
    agency_reg_no: Yup.string().required("agency reg no is required"),
    first_name: Yup.string().required("First name is required"),
    last_name: Yup.string().required("Last name is required"),
    phone: Yup.string().required("Phone is required"),
    email: Yup.string().email().required("Email is required"),
    address: Yup.string().required("Address is required"),
    country: Yup.string().required("Country is required"),
    state: Yup.string().required("state is required"),
    city: Yup.string().required("City is required"),
    zip_code: Yup.string().required("Zip code is required"),
    company_id_proof: Yup.mixed()
      .test("required", "You need to provide a file", (value) => {
        return value && value?.length;
      })
      .test("fileSize", "Allow only 2Mb file", (value, context) => {
        let fileSize = value[0]?.size;
        var size = Math.round(fileSize / 1024);

        return value && value[0] && value[0]?.size && size <= 2 * 1024;
      })
      .test("type", "We only support image file", (value) => {
        console.log("value --> ", value[0], value[0]?.type);
        return (
          value &&
          value[0] &&
          value[0]?.type !== SUPPORTED_FORMATS.includes(value[0]?.type)
        );
      }),

    agent_id_proof: Yup.mixed()
      .test("required", "You need to provide a file", (value) => {
        return value && value?.length;
      })
      .test("fileSize", "Allow only 2Mb file", (value, context) => {
        let fileSize = value[0]?.size;
        var size = Math.round(fileSize / 1024);

        return value && value[0] && value[0]?.size && size <= 2 * 1024;
      })
      .test("type", "We only support image file", function (value) {
        console.log("value --> ", value[0], value[0]?.type);

        return (
          value &&
          value[0] &&
          value[0]?.type !== SUPPORTED_FORMATS.includes(value[0]?.type)
        );
      }),

    password: Yup.string()
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
      )
      .test(
        "isNotBlank",
        "Your password can’t start or end with a blank space",
        (value) => {
          if (value && (value.startsWith(" ") || value.endsWith(" "))) {
            return false;
          }
          return true;
        }
      ),

    conf_password: Yup.string()
      .required("Confirm Password is required")
      .oneOf([Yup.ref("password")], "Passwords must match"),
  });
  const [conformationPopupDetails, setConformationPopupDetails] = useState({
    isSuccess: false,
    msg: modalMsg.error,
    isShow: false,
  });

  const customStyles = {
    control: (styles) => ({
      ...styles,
      backgroundColor: "#F8F9FF",
      height: "46px",
      marginTop: "15px",
      borderRadius: "0.4rem",
      border: errors.country ? "1px solid red" : "",
      boxShadow: "none",
    }),
    option: (styles, { data, isDisabled, isFocused, isSelected }) => {
      return {
        ...styles,
        color: isSelected ? "#f5f5f5" : "#0090C5",
        backgroundColor: isSelected ? "#F95700" : "#f5f5f5",
        "&:hover": {
          backgroundColor: "#e9e9e9",
          color: "#F95700",
        },
      };
    },
  };

  // for popup
  useEffect(() => {
    console.log(
      "conformationPopupDetails ---------------> ",
      conformationPopupDetails
    );
  }, [conformationPopupDetails]);
  const formOptions = { resolver: yupResolver(validationSchema) };
  const {
    register,
    handleSubmit,
    watch,
    setValue,
    getValues,
    setError,
    clearErrors,
    formState: { errors },
  } = useForm(formOptions);

  const [state, setState] = useState({
    password: true,
    conf_password: true,
  });
  const password = watch("password");

  const [filesUpload, setFilesUpload] = useState({
    company_id_proof: {
      name: "",
      file: "",
    },
    agent_id_proof: {
      name: "",
      file: "",
    },
  });

  const companyFileUpload = (event) => {
    let file = event.target.files[0];

    console.log("companyFileUpload ====> ", file);

    let fileName = file.name;

    clearErrors(["company_id_proof"]);
    setFilesUpload((prev) => ({
      ...prev,
      company_id_proof: {
        name: file.name,
        file: file,
      },
    }));
  };

  const agentIdProofUpload = (event) => {
    let file = event.target.files[0];

    console.log("agentIdProofUpload ====> ", file);
    let fileName = file.name;
    console.log("fileName --> ", fileName);

    clearErrors(["agent_id_proof"]);
    setFilesUpload((prev) => ({
      ...prev,
      agent_id_proof: {
        name: file.name,
        file: file,
      },
    }));
  };

  console.log("errors ---> ", errors);

  const onSubmit = async (data) => {
    console.log(data);
    let formData = new FormData();

    for (const [key, value] of Object.entries(data)) {
      if (key === "company_id_proof") {
        const company_id_proof_file = filesUpload.company_id_proof.file;
        formData.append(key, company_id_proof_file);
      }
      if (key === "agent_id_proof") {
        const agent_id_proof_file = filesUpload.agent_id_proof.file;
        formData.append(key, agent_id_proof_file);
      }
      formData.append(key, value);
    }
    signup(formData);
  };

  const signup = async (data) => {
    try {
      setIsLoading(true);
      const res = await signupApi.signup(data);
      console.log("res ---> ", res);
      if (res?.data?.status === 200) {
        setConformationPopupDetails({
          isSuccess: true,
          msg: modalMsg.success,
          isShow: true,
        });
      }
    } catch (error) {
      console.log("err signup --> ", error);

      ThrowToasterMsg(error?.data?.message, "");
    }
    setIsLoading(false);
  };

  const handleOnChange = (...args) => {
    console.log(args);
    setAgencyContact((prev) => ({ ...prev, code: args[3], value: args[3] }));
    setValue("agency_contact", args[3], { shouldValidate: true });
  };

  const handleOnChangePhone = (...args) => {
    console.log(args);
    setPhone((prev) => ({ ...prev, code: args[3], value: args[3] }));
    setValue("phone", args[3], { shouldValidate: true });
  };

  const getCountries = async () => {
    try {
      const result = await Country.getAllCountries();
      let allCountries = [];
      allCountries = result?.map(({ isoCode, name }) => ({
        value: isoCode,
        label: name,
      }));

      setCountryState((prev) => ({ ...prev, allCountries }));
    } catch (error) {
      console.log("error ---", error);
    }
  };

  const getStates = async () => {
    try {
      let selectedCountry = countryState?.selected?.value;
      console.log("selectedCountry --> ", selectedCountry);
      const result = await State.getStatesOfCountry(selectedCountry);
      let allStates = [];
      allStates = result?.map(({ isoCode, name }) => ({
        value: isoCode,
        label: name,
      }));

      setStates((perv) => ({ ...perv, allStates }));

      console.log("allStates ------> ", allStates);
    } catch (error) {
      console.log("error ---> ");
    }
  };

  const getCity = async () => {
    try {
      let selected_country = countryState?.selected?.value;
      let selected_state = states?.selected?.value;

      console.log("city --> ", selected_country, selected_state);
      if (selected_country && selected_state) {
        const result = await City.getCitiesOfState(
          selected_country,
          selected_state
        );
        let allCities = [];
        console.log("resu");
        console.log("result ---> ", result);
        allCities = result?.map(({ stateCode, name }) => ({
          value: name,
          label: name,
        }));
        setCitiesState((perv) => ({ ...perv, allCities }));
        console.log("allCities ------> ", allCities);
      }
    } catch (error) {
      console.log("error ---> ", error);
    }
  };

  useEffect(() => {
    console.log({
      Country,
      State,
      City,
    });
    getCountries();
  }, []);

  useEffect(() => {
    getStates();
  }, [countryState]);

  useEffect(() => {
    getCity();
  }, [states]);

  useEffect(() => {
    if (!conformationPopupDetails.isShow) {
    }
  }, [conformationPopupDetails.isShow]);

  return (
    <>
      <Header />

      <div className=" mx-10-e lg:mx-12-e xl:mx-48-e max-w-screen-xl-e mt-32 px-8 xl:px-16 mx-auto container shadow-lg overflow-hidden">
        <ScrollAnimationWrapper>
          <motion.div className="mx-7" variants={scrollAnimation}>
            <form onSubmit={handleSubmit(onSubmit)}>
              <div className="flex justify-center my-5x">
                <h3 className="mx-auto font-bold text-3xl md:text-4xl leading-normal">
                  <span className=" text-secondary"> Partner Registration</span>
                </h3>
              </div>

              <div>
                <div>
                  <label className="text-primary text-xl  md:text-2xl lg:text-3xl xl:text-3xl my-4 font-Alegreya">
                    Company Detail
                  </label>
                  <div className="md:flex mt-7 mb-8-e gap-6  justify-between items-center">
                    <div className="md:w-1/2 w-full mb-4">
                      <label
                        className={`  font-Alegreya ${
                          errors.agency_name
                            ? "text-red-500"
                            : "text-inputLabel"
                        }`}
                      >
                        Company Name*
                      </label>
                      <div>
                        <input
                          type="text"
                          {...register("agency_name", { required: true })}
                          placeholder="John Doe"
                          className={`input-style h-[49px] ${
                            errors.agency_name
                              ? "border-red-500"
                              : "border-slate-200"
                          }`}
                        />
                      </div>
                    </div>
                    <div className="md:w-1/2 w-full  mb-4">
                      <label
                        className={`  font-Alegreya ${
                          errors.agency_contact
                            ? "text-red-500"
                            : "text-inputLabel"
                        }`}
                      >
                        Company Contact no*
                      </label>
                      <div className="mt-4">
                        <ReactPhoneInput
                          value={agencyContact?.value}
                          name="agency_contact"
                          {...register("agency_contact", { required: true })}
                          enableSearch={true}
                          containerclassName="mt-4"
                          inputStyle={{
                            ...phoneNumberInputStyle,
                            border: `${
                              errors.agency_contact ? "1px solid red" : ""
                            }`,
                          }}
                          buttonStyle={{
                            ...phoneNumberInputButtonStyle,
                            border: `${
                              errors.agency_contact ? "1px solid red" : ""
                            }`,
                          }}
                          onChange={handleOnChange}
                        />
                      </div>
                    </div>
                    <div className="md:w-1/2 w-full mb-4">
                      <label
                        className={`  font-Alegreya ${
                          errors.agency_contact
                            ? "text-red-500"
                            : "text-inputLabel"
                        }`}
                      >
                        Company Reg. No*
                      </label>
                      <div>
                        <input
                          type="text"
                          {...register("agency_reg_no", { required: true })}
                          placeholder="EWRE3K343"
                          className={`input-style h-[49px] ${
                            errors.agency_reg_no
                              ? "border-red-500"
                              : "border-slate-200"
                          }`}
                        />
                      </div>
                    </div>
                  </div>
                </div>

                <div className="mt-8">
                  <label className="text-primary text-xl  md:text-2xl lg:text-3xl xl:text-3xl mt-7 font-Alegreya">
                    Concern Person Details
                  </label>

                  <div className="md:flex mt-7 mb-8-e gap-6  justify-between items-center">
                    <div className="md:w-1/2 w-full mb-4">
                      <label
                        className={`  font-Alegreya ${
                          errors.first_name ? "text-red-500" : "text-inputLabel"
                        }`}
                      >
                        First Name*
                      </label>
                      <div>
                        <input
                          type="text"
                          {...register("first_name", { required: true })}
                          placeholder="Enter First Name"
                          className={`input-style h-[49px] ${
                            errors.first_name
                              ? "border-red-500"
                              : "border-slate-200"
                          }`}
                        />
                      </div>
                    </div>
                    <div className="md:w-1/2 w-full mb-4">
                      <label
                        className={`  font-Alegreya ${
                          errors.last_name ? "text-red-500" : "text-inputLabel"
                        }`}
                      >
                        Last Name*
                      </label>
                      <div>
                        <input
                          type="text"
                          {...register("last_name", { required: true })}
                          placeholder="Enter Last Name"
                          className={`input-style h-[49px] ${
                            errors.last_name
                              ? "border-red-500"
                              : "border-slate-200"
                          }`}
                        />
                      </div>
                    </div>
                    <div className="md:w-1/2 w-full mb-4">
                      <label
                        className={`font-Alegreya ${
                          errors.phone ? "text-red-500" : "text-inputLabel"
                        }`}
                      >
                        Contact No*
                      </label>
                      <div className="mt-4">
                        <ReactPhoneInput
                          value={phone?.value}
                          name="phone"
                          {...register("phone", { required: true })}
                          enableSearch={true}
                          containerclassName="mt-4"
                          inputStyle={{
                            ...phoneNumberInputStyle,
                            border: `${errors.phone ? "1px solid red" : ""}`,
                          }}
                          buttonStyle={{
                            ...phoneNumberInputButtonStyle,
                            border: `${errors.phone ? "1px solid red" : ""}`,
                          }}
                          onChange={handleOnChangePhone}
                        />
                      </div>
                    </div>
                  </div>
                  <div className=" w-full mb-4">
                    <label
                      className={`font-Alegreya ${
                        errors.email ? "text-red-500" : "text-inputLabel"
                      }`}
                    >
                      Company Email*
                    </label>
                    <div>
                      <input
                        type="email"
                        {...register("email", { required: true })}
                        placeholder="Enter your Email here"
                        className={`input-style h-[49px] ${
                          errors.email ? "border-red-500" : "border-slate-200"
                        }`}
                      />
                    </div>
                  </div>
                  <div className=" w-full mb-4">
                    <label
                      className={`font-Alegreya ${
                        errors.address ? "text-red-500" : "text-inputLabel"
                      }`}
                    >
                      Company Address*
                    </label>
                    <textarea
                      {...register("address", { required: true })}
                      placeholder="Enter your Address"
                      className={`input-style h-[130px]  ${
                        errors.address ? "border-red-500" : "border-slate-200"
                      }`}
                    />
                  </div>

                  <div className="md:flex mt-7 mb-8-e gap-6  justify-between items-center">
                    <div className="md:w-1/2 w-full mb-4">
                      <label
                        className={`font-Alegreya ${
                          errors.country ? "text-red-500" : "text-inputLabel"
                        }`}
                      >
                        Country*
                      </label>

                      <Select
                        name="country"
                        {...register("country", { required: true })}
                        styles={customStyles}
                        options={countryState?.allCountries}
                        onChange={(el) => {
                          console.log(el);
                          setCountryState((prev) => ({
                            ...prev,
                            selected: el,
                          }));
                          setStates((prev) => ({ ...prev, selected: {} }));
                          setCitiesState((prev) => ({ ...prev, selected: {} }));

                          setValue("country", el.value, {
                            shouldValidate: true,
                          });
                        }}
                      />
                    </div>
                    <div className="md:w-1/2 w-full mb-4">
                      <label
                        className={`font-Alegreya ${
                          errors.city ? "text-red-500" : "text-inputLabel"
                        }`}
                      >
                        State*
                      </label>

                      <Select
                        name="state"
                        {...register("state", { required: true })}
                        styles={customStyles}
                        options={states.allStates}
                        value={states?.selected}
                        onChange={(el) => {
                          setStates((prev) => ({ ...prev, selected: el }));
                          setCitiesState((prev) => ({ ...prev, selected: {} }));
                          setValue("state", el.value, { shouldValidate: true });
                          console.log(el);
                        }}
                      />
                    </div>

                    <div className="md:w-1/2 w-full mb-4">
                      <label
                        className={`font-Alegreya ${
                          errors.city ? "text-red-500" : "text-inputLabel"
                        }`}
                      >
                        City*
                      </label>

                      <Select
                        name="city"
                        {...register("city", { required: true })}
                        styles={customStyles}
                        options={citiesState?.allCities}
                        value={citiesState?.selected}
                        onChange={(el) => {
                          console.log("-------->", el);
                          setCitiesState((prev) => ({ ...prev, selected: el }));
                          setValue("city", el.value, { shouldValidate: true });
                          console.log(el);
                        }}
                      />
                    </div>

                    <div className="md:w-1/2 mt-1 w-full mb-4">
                      <label
                        className={`font-Alegreya ${
                          errors.zip_code ? "text-red-500" : "text-inputLabel"
                        }`}
                      >
                        Area/ZIP/ PIN code*
                      </label>
                      <input
                        type="text"
                        {...register("zip_code", { required: true })}
                        placeholder="Enter Area/ZIP/ PIN code"
                        className={`input-style h-[49px] ${
                          errors.zip_code
                            ? "border-red-500"
                            : "border-slate-200"
                        }`}
                      />
                    </div>
                  </div>

                  {/* password and conform password */}
                  <motion.div className="md:mx-7" variants={scrollAnimation}>
                    <div className="md:flex mt-7 mb-8 gap-6 justify-center items-start">
                      <div className="md:w-1/2 lg:px-8 w-full mb-4">
                        <label
                          className={`font-Alegreya ${
                            errors.password ? "text-red-500" : "text-inputLabel"
                          }`}
                        >
                          Password*
                        </label>
                        <div className="relative">
                          <input
                            type={state.password ? "text" : "password"}
                            {...register("password")}
                            className={`input-style h-[49px] ${
                              errors?.password
                                ? "border-red-500"
                                : "border-slate-200"
                            }`}
                          />
                          <div
                            className="absolute right-5 top-8 cursor-pointer"
                            onClick={() =>
                              setState((prev) => ({
                                ...prev,
                                password: !prev.password,
                              }))
                            }
                          >
                            {!state.password
                              ? svg_icons.eye_close
                              : svg_icons.eye}
                          </div>
                        </div>
                        <div className="mx-2 mt-1">
                          {errors && errors?.password && (
                            <span className="text-red-500 break-all">
                              {errors?.password?.message}
                            </span>
                          )}
                        </div>
                      </div>
                      <div className="md:w-1/2 w-full mb-4 lg:px-8">
                        <label
                          className={`font-Alegreya ${
                            errors.conf_password
                              ? "text-red-500"
                              : "text-inputLabel"
                          }`}
                        >
                          Confirm Password*
                        </label>
                        <div className="relative">
                          <input
                            type={state.conf_password ? "text" : "password"}
                            {...register("conf_password", { required: true })}
                            className={`input-style h-[49px] ${
                              errors?.conf_password
                                ? "border-red-500"
                                : "border-slate-200"
                            }`}
                          />
                          <div
                            className="absolute right-5 top-8 cursor-pointer"
                            onClick={() =>
                              setState((prev) => ({
                                ...prev,
                                conf_password: !prev.conf_password,
                              }))
                            }
                          >
                            {!state.conf_password
                              ? svg_icons.eye_close
                              : svg_icons.eye}
                          </div>
                        </div>
                        <div className="mx-2 mt-1">
                          {errors && errors?.conf_password && (
                            <span className="text-red-500 break-all">
                              {errors?.conf_password?.message}
                            </span>
                          )}
                        </div>
                      </div>
                    </div>
                  </motion.div>
                </div>

                {/* Upload documents */}
                <motion.div
                  className=" mx-1 md:mx-7"
                  variants={scrollAnimation}
                >
                  <div className="flex justify-center my-16 ">
                    <h3 className="mx-auto font-bold text-xl md:text-3xl lg:text-5xl leading-normal">
                      <span className="text-primary"> Upload Document </span>{" "}
                    </h3>
                  </div>
                  <div className="md:flex justify-center">
                    <div className="my-5 w-11/12 md:w-96  mx:1 md:mx-10">
                      <div
                        className={`max-w-sm rounded-3xl overflow-hidden border ${
                          errors.company_id_proof
                            ? "border-red-500"
                            : "border-slate-200"
                        }`}
                      >
                        <div>
                          <div className="px-6 py-4 flex items-center justify-center">
                            <div className="w-28 relative h-28 bg-secondary rounded-full flex items-center justify-center my-4">
                              <img
                                src="/assets/Icon/upload.svg"
                                alt="upload_img"
                                width="50"
                              />

                              <input
                                type="file"
                                name="company_id_proof"
                                {...register("company_id_proof", {
                                  required: true,
                                })}
                                onChange={(e) => companyFileUpload(e)}
                                className="h-full w-full opacity-0 absolute"
                              />
                            </div>
                          </div>
                          <div className="flex justify-center text-inputLabel font-Alegreya font-bold text-3xl">
                            <p>Upload</p>
                          </div>
                          <div className="flex flex-col justify-center font-Alegreya text-2xl mt-6 h-[130px]">
                            <p className="text-thinText text-lg text-center leading-relaxed">
                              Company registration copy/any
                              <br />
                              tax registration proof
                            </p>
                            <div className="text-center p-3 py-0 text-xl">
                              <small className="text-green-700">
                                {filesUpload.company_id_proof.name}
                              </small>
                            </div>
                            {errors.company_id_proof && (
                              <small className="text-center p-1 text-red-500">
                                {errors.company_id_proof.message}
                              </small>
                            )}
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="my-5 w-11/12 md:w-96  mx:1 md:mx-10">
                      <div
                        className={`max-w-sm rounded-3xl overflow-hidden border ${
                          errors.agent_id_proof
                            ? "border-red-500"
                            : "border-slate-200"
                        }`}
                      >
                        <div>
                          <div className="px-6 py-4 flex items-center justify-center">
                            <div className="w-28 relative h-28 bg-secondary rounded-full flex items-center justify-center my-4">
                              <img
                                src="/assets/Icon/upload.svg"
                                alt="upload_img"
                                width="50"
                              />
                              <input
                                type="file"
                                name="agent_id_proof"
                                {...register("agent_id_proof", {
                                  required: true,
                                })}
                                onChange={(e) => agentIdProofUpload(e)}
                                className="h-full w-full opacity-0 absolute"
                              />
                            </div>
                          </div>
                          <div className="flex justify-center text-inputLabel font-Alegreya font-bold text-3xl">
                            <p>Upload</p>
                          </div>
                          <div className="flex flex-col justify-center font-Alegreya text-2xl mt-6 h-[130px]">
                            <p className="text-thinText text-lg text-center leading-relaxed">
                              Passport/ Drivers Licence/ any government issued
                              ID
                            </p>
                            <div className="text-center p-3 text-xl">
                              <small className="text-green-700">
                                {filesUpload.agent_id_proof.name}
                              </small>
                            </div>
                            {errors.agent_id_proof && (
                              <small className="text-center p-1 text-red-500">
                                {errors.agent_id_proof.message}
                              </small>
                            )}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.div>

                {/* Submit Button */}
                <motion.div className="mx-7" variants={scrollAnimation}>
                  <div className="flex justify-center items-center mt-16 ">
                    <ButtonOutline
                      type="submit"
                      addclassName="w-1/3 ont-Alegreya text-xl h-20"
                      disabled={isLoading}
                    >
                      {" "}
                      {isLoading ? "Please wait..." : "Submit Request"}
                    </ButtonOutline>
                  </div>
                  <div className="text-center my-7">
                    <p>
                      Already have an account?{" "}
                      <span className="text-primary font-semibold cursor-pointer">
                        <Link href="/">Sign in</Link>
                      </span>
                    </p>
                  </div>
                </motion.div>
              </div>
            </form>
          </motion.div>
        </ScrollAnimationWrapper>
        {conformationPopupDetails.isShow && (
          <CustomModal
            isOpen={conformationPopupDetails?.isShow}
            title={conformationPopupDetails}
            setConformationPopupDetails={setConformationPopupDetails}
            closeButtonLabel="Close"
            onClose={() => (window.location.href = "http://localhost:3000/")}
          />
        )}
      </div>
      <Footer />
    </>
  );
};

export default Signup;

const ScrollAnimationWrapper = ({ children, className, ...props }) => {
  return (
    <motion.div
      initial="offscreen"
      whileInView="onscreen"
      viewport={{ once: true }}
      className={className}
      {...props}
    >
      {children}
    </motion.div>
  );
};
