import { signupInput } from "./../../../../commons/src/index";
import React from "react";
import { signupShapes } from "./signupShapes";
import { SigninInput, SignupInput } from "@shivam-maurya/medium-commons";
import { Some } from "../../helpers/Some";

export const getSignupDetails = (
  formdata: SignupInput,
  touched: signupShapes.TTouched,
  setTouched: React.Dispatch<React.SetStateAction<signupShapes.TTouched>>,
  setFormData: React.Dispatch<React.SetStateAction<SignupInput>>
): signupShapes.TSignupDetails[] => {
  return [
    {
      label: "Username",
      type: "text",
      value: Some.String(formdata.name),
      onChange: (e: React.ChangeEvent<HTMLInputElement>) =>
        setFormData({ ...formdata, name: e.target.value }),
      placeholder: "Enter your username",
    },
    {
      label: "Email",
      type: "email",
      value: formdata.email,
      onChange: (e: React.ChangeEvent<HTMLInputElement>) =>
        setFormData({ ...formdata, email: e.target.value }),
      onBlur: () => setTouched((prev) => ({ ...prev, email: true })),
      placeholder: "Enter your email",
      error: touched.email && formdata.email.length === 0,
      errorMsg: "Required field!",
      required: true,
    },
    {
      label: "Password",
      type: "password",
      value: formdata.password,
      onChange: (e: React.ChangeEvent<HTMLInputElement>) =>
        setFormData({ ...formdata, password: e.target.value }),
      onBlur: () => setTouched((prev) => ({ ...prev, password: true })),
      placeholder: "Enter your password",
      error:
        touched.password &&
        (formdata.password.length < 6 || formdata.password.length === 0),
      errorMsg:
        formdata.password.length === 0
          ? "Required field!"
          : "Password must be at least 6 characters.",
      required: true,
    },
  ];
};

export const getSigninDetails = (
  formdata: SigninInput,
  touched: signupShapes.TSigninTouched,
  setTouched: React.Dispatch<React.SetStateAction<signupShapes.TSigninTouched>>,
  setFormData: React.Dispatch<React.SetStateAction<SigninInput>>
): signupShapes.TSignupDetails[] => {
  return [
    {
      label: "Email",
      type: "email",
      value: formdata.email,
      onChange: (e: React.ChangeEvent<HTMLInputElement>) =>
        setFormData({ ...formdata, email: e.target.value }),
      onBlur: () => setTouched((prev) => ({ ...prev, email: true })),
      placeholder: "Enter your email",
      error: touched.email && formdata.email.length === 0,
      errorMsg: "Required field!",
      required: true,
    },
    {
      label: "Password",
      type: "password",
      value: formdata.password,
      onChange: (e: React.ChangeEvent<HTMLInputElement>) =>
        setFormData({ ...formdata, password: e.target.value }),
      onBlur: () => setTouched((prev) => ({ ...prev, password: true })),
      placeholder: "Enter your password",
      error:
        touched.password &&
        (formdata.password.length < 6 || formdata.password.length === 0),
      errorMsg:
        formdata.password.length === 0
          ? "Required field!"
          : "Password must be at least 6 characters.",
      required: true,
    },
  ];
};
