import axios from "axios";
import { useSelector } from "react-redux";
import { RootState, AppDispatch } from "../redux/store";

const axiosInstance = axios.create({
  baseURL: import.meta.env.VITE_BASE_URL,
  headers: { "Content-Type": "application/json" },
});

// axiosInstance.interceptors.request.use((config) => {
//   const token = useSelector((state: RootState) => state.auth.token);
//   if (token) {
//     config.headers.Authorization = `Bearer ${token}`;
//   }

//   return config;
// });

export default axiosInstance;
