import React from "react";
import Quotes from "../components/Quotes";
import Auth from "../components/Auth";

const Signin = () => {
  return (
    <div className="grid md:grid-cols-2 grid-cols-1 bg-red-500 min-h-screen">
      <div className="bg-blue-500">
        <Auth isSignup={false} />
      </div>
      <div className="bg-green-500 hidden md:block">
        <Quotes />
      </div>
    </div>
  );
};

export default Signin;
