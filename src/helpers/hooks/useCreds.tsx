import React from "react";
import { Some } from "../Some";

const useCreds = () => {
  const token = localStorage.getItem("token");
  return Some.String(token);
};

export default useCreds;
