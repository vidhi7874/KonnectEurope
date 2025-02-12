import React from "react";

const ButtonPrimary = ({ children, addClass, type, disabled }) => {
  return (
    <button
      type={type}
      disabled={disabled || false}
      className={
        "py-3 lg:py-4 px-12 lg:px-16 text-white-500 font-semibold rounded-xl bg-secondary text-white hover:shadow-orange-md transition-all outline-none " +
        addClass
      }
    >
      {children}
    </button>
  );
};

export default ButtonPrimary;
