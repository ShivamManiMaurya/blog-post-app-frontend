import { USER_ENDPOINT } from "./../endpoints";
import { SignupInput, SigninInput } from "@shivam-maurya/medium-commons";
import axiosInstance from "../axiosInstance";
import { API_ENDPOINTS } from "../endpoints";

const signupUser = async (data: SignupInput) => {
  const response = await axiosInstance.post(
    `${USER_ENDPOINT}${API_ENDPOINTS.USER_SIGNUP}`,
    data
  );
  return response.data;
};

const signinUser = async (data: SigninInput) => {
  const response = await axiosInstance.post(
    `${USER_ENDPOINT}${API_ENDPOINTS.USER_SIGNIN}`,
    data
  );
  return response.data;
};

export const userService = {
  signupUser,
  signinUser,
};
