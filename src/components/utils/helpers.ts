import React from "react";
import { signupShapes } from "./signupShapes";

export const getSignupDetails = (
  formdata: signupShapes.TFormData,
  setFormData: React.Dispatch<React.SetStateAction<signupShapes.TFormData>>
): signupShapes.TSignupDetails[] => {
  return [
    {
      label: "Username",
      type: "text",
      value: formdata.username,
      onChange: (e: React.ChangeEvent<HTMLInputElement>) =>
        setFormData({ ...formdata, username: e.target.value }),
      placeholder: "Enter your username",
    },
    {
      label: "Email",
      type: "email",
      value: formdata.email,
      onChange: (e: React.ChangeEvent<HTMLInputElement>) =>
        setFormData({ ...formdata, email: e.target.value }),
      placeholder: "Enter your email",
    },
    {
      label: "Password",
      type: "password",
      value: formdata.password,
      onChange: (e: React.ChangeEvent<HTMLInputElement>) =>
        setFormData({ ...formdata, password: e.target.value }),
      placeholder: "Enter your password",
    },
  ];
};
