import { BLOG_ENDPOINT } from "./../endpoints";
import axiosInstance from "../axiosInstance";
import { API_ENDPOINTS } from "../endpoints";
import { getHeadersWithToken } from "../../helpers/helpers";

const getBlogs = async (token: string) => {
  const response = await axiosInstance.get(
    `${BLOG_ENDPOINT}${API_ENDPOINTS.GET_ALL_POST}`,
    {
      headers: getHeadersWithToken(token),
    }
  );
  return response.data;
};

const addBlog = async (payload: {
  token: string;
  data: {
    title: string;
    content: string;
  };
}) => {
  const response = await axiosInstance.post(
    `${BLOG_ENDPOINT}${API_ENDPOINTS.ADD_POST}`,
    payload.data,
    {
      headers: getHeadersWithToken(payload.token),
    }
  );
  return response.data;
};

export const postService = {
  getBlogs,
  addBlog,
};
