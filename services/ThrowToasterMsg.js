import { toast } from "react-toastify";
// import { localStorageService } from "./localStorge.service";
const defaultErrMsg = "Something went wrong !";

const ThrowToasterMsg = (obj, code) => {
  console.log("ThrowErrors logs ---> ", obj, code);
  switch (code) {
    case 200:
      okay(obj, code);
      break;
    case 201:
      okay(obj, code);
      break;
    case 400:
      BadRequest(obj, code);
      break;
    case 403:
      unauthorized(obj, code);
      break;

    case 401:
      unauthorized(obj, code);
      break;

    default:
      defaultErr(obj, code);
      break;
  }
};

const defaultErr = (obj) => {
  console.log("default err --> ", obj);
  toast.error(obj || "Something went wrong !");
};

const okay = (obj, code) => {
  // alert(code);
  // status code - 200
  console.log("Okay --> ", obj, code);

  toast.success(obj);
};

const BadRequest = (obj, code) => {
  console.log("BadRequest 000000", obj);
  // status code - 400
  toast.error(obj?.msg || obj);
};
const unauthorized = (obj, code) => {
  // status code - 401
  console.log("unauthorized user ---> ", obj, code);
  redirectToLogin();
  //toast.error(obj?.msg || defaultErrMsg);
};
const Forbidden = () => {
  // status code - 403
};

const InternalServerError = () => {
  // status code - 500
};

const redirectToLogin = () => {
  // "colorMode", "themeMode"
  // keyNames.forEach((key) => localStorageService.remove(key));
  //window.location.href = `${window.location.href}login`;
};

export default ThrowToasterMsg;
