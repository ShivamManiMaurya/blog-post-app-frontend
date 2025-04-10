import React, { useState } from "react";
import { Link } from "react-router-dom";
import InputField from "./commons/InputField";
import { signupShapes } from "./utils/signupShapes";
import { getSignupDetails } from "./utils/helpers";

const Auth = () => {
  const [formData, setFormData] = useState<signupShapes.TFormData>({
    username: "",
    email: "",
    password: "",
  });

  const signupDetails = getSignupDetails(formData, setFormData);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log(formData);
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-white px-4 ">
      <div className="max-w-md w-full space-y-8">
        <div>
          <h2 className="text-3xl font-bold text-gray-900">
            Create an account
          </h2>
          <p className=" text-gray-500">
            Already have an account? <Link to="/signin">Login</Link>
          </p>
        </div>
        <form onSubmit={handleSubmit} className=" mt-8 space-y-6">
          {signupDetails.map((item, index) => (
            <InputField
              key={index + item.label}
              label={item.label}
              type={item.type}
              value={item.value}
              onChange={item.onChange}
              placeholder={item.placeholder}
            />
          ))}
          <div>
            <button
              type="submit"
              className="w-full py-2 px-4 bg-black text-white font-medium rounded-md hover:bg-gray-800 transition">
              Sign Up
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Auth;
