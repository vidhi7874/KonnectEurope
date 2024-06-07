import axios from "axios";
// import { localStorageService } from "../services/localStorage.services";

const Axios = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_BASE_URL_DEV,
  // baseURL: "https://eworkpermitservice.azurewebsites.net/api",
});

// if (
//   typeof window !== "undefined" &&
//   localStorageService.get("userDetails")?.user_details
// ) {
//   console.log("Axios ====> ", Axios);
//    var { token } = localStorageService.get("userDetails")?.user_details;
// }

// if (token) {
//   Axios.interceptors.request.use((value) => {
//     value.headers = {
//       Authorization: `Bearer ${token}`,
//     };
//     return value;
//   });
// }

export default Axios;
