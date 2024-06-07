import Axios from "../http";
// import { API } from "../constants/api.constants";
//import { toast } from "react-toastify";
// import { errorHandleService } from "./errorHandle.services";
import { API } from "../constants/api.constants";
import { toast } from "react-toastify";

export const loginApi = {
  login: async (data) => {
    try {
      const res = await Axios.post(API.LOGIN, data);

      return res;
    } catch (error) {
      const err = error?.response?.data;
      console.log("error in api service --> ", err);
      // toast("Wow so easy!");
      let msg = err ? err.message : "Internal server error.";
      toast.error(msg);
      //  errorHandleService(err?.status, err?.msg);
    }
  },
  //?from_date=2022-05-30&to_date=2022-08-30
};

const ShoToast = (msg) => {
  return toast.error(msg, {
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
