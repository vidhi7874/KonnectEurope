import Axios from "../http";
// import { API } from "../constants/api.constants";
//import { toast } from "react-toastify";
// import { errorHandleService } from "./errorHandle.services";
import { API } from "../constants/api.constants";
import { toast } from "react-toastify";
import ThrowToasterMsg from "./ThrowToasterMsg";

export const authApi = {
  login: async (data) => {
    try {
      const res = await Axios.post(API.LOGIN, data);
      return res;
    } catch (error) {
      const err = error?.response?.data;
      console.log("error in api service --> ", err);
      let msg = err ? err.message : "Internal server error.";
      toast.error(msg);

      //  errorHandleService(err?.status, err?.msg);
    }
  },
  forgetPwd: async (data) => {
    try {
      const res = await Axios.post(API.FORGET_PASSWORD, data);
      return res;
    } catch (error) {
      const err = error?.response?.data;
      console.log("error in api service --> ", err);
      let msg = err ? err.message : "Internal server error.";

      // if (err) {
      for (const [key, value] of Object.entries(err)) {
        //toast.error(value[0] || msg || "Internal server error");
      //  ThrowToasterMsg(value[0], err.status);
      }
      // } else {
      //   toast.error("Internal server error");
      // }

      //  errorHandleService(err?.status, err?.msg);
    }
  },
  changePassword: async (data, params) => {
    try {
      const { uid, token } = params;
      const res = await Axios.post(
        `${API.CHANGE_PASSWORD}${uid}/${token}/`,
        data
      );
      return res;
    } catch (error) {
      const err = error?.response?.data;
      console.log("error in api change  pwd service --> ", err);
      //   let msg = err ? err.message : "Internal server error.";
      for (const [key, value] of Object.entries(err)) {
        ThrowToasterMsg(value[0], err?.status);

        window.location.href = "/ForgetPassword";
        // Token is not valid or Expired
      }
    }
  },
  //?from_date=2022-05-30&to_date=2022-08-30
};

const ShoToast = (msg) => {
  toast.error(msg, {
    position: "top-right",
    autoClose: 2000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: "light",
  });
};
