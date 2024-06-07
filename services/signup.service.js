import Axios from "../http";
// import { API } from "../constants/api.constants";
//import { toast } from "react-toastify";
// import { errorHandleService } from "./errorHandle.services";
import { API } from "../constants/api.constants";
import ThrowToasterMsg from "./ThrowToasterMsg";

export const signupApi = {
  signup: async (data) => {
    try {
      const res = await Axios.post(API.SIGNUP, data);
      return res;
    } catch (error) {
      const err = error?.response?.data?.data;
      console.log("error in  signup service --> ", error);

      // const msg = error.response.data.data.user_oto[0];
      const statusCode = error.response.data.status;

      for (const [key, value] of Object.entries(err)) {
        ThrowToasterMsg(value[0], statusCode);
      }
      //  ThrowToasterMsg(msg, statusCode);
      //  errorHandleService(err?.status, err?.msg);
    }
  },
  //?from_date=2022-05-30&to_date=2022-08-30
};
