import React from "react";

const Button = () => {
  return (
    <>
      <button
        type="submit"
        className={`absolute right-1 h-10 grow bg-gray-900 text-white rounded text-sm py-4 flex flex-row justify-center items-center px-4 z-20`}
      >
        Sign up for news
      </button>
    </>
  );
};

export default Button;
