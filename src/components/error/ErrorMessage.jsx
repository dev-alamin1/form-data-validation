import React from "react";

const ErrorMessage = ({errorMessage,error,clearError}) => {

 

  return (
    <div className="relative bg-white mt-1 p-1 rounded-md inline-block text-red-600">
      <p className="inline-block">{error[errorMessage]}</p>
      <button
        className={`absolute top-1 -right-5   text-red-600 hover:text-white rounded-full`}
        onClick={()=>clearError(errorMessage)}
      >
        X
      </button>
    </div>
  );
};

export default ErrorMessage;
