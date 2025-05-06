import React from "react";
import { Some } from "../Some";
import { jwtDecode } from "jwt-decode";

interface CustomJWTPayload {
  userId: string;
  email: string;
  exp: number;
  iat?: number;
}

const useCreds = () => {
  const token = localStorage.getItem("token");
  if (token) {
    const decodedData = jwtDecode<CustomJWTPayload>(token);
    return {
      token: Some.String(token),
      email: Some.String(decodedData.email),
      exp: Some.Number(decodedData.exp),
      userId: Some.String(decodedData.userId),
    };
  }
  return {
    token: "",
  };
};

export default useCreds;
