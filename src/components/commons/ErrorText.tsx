import React from "react";

type TProps = {
  error: Error;
};

const ErrorText: React.FC<TProps> = ({ error }) => {
  return (
    <div className=" flex flex-col justify-center items-center h-[75vh]">
      <h3 className=" text-2xl text-red-600">
        {error.message ? error.message : "Something went wrong."}
      </h3>
      <h6 className=" text-lg">Please try again.</h6>
    </div>
  );
};

export default ErrorText;
