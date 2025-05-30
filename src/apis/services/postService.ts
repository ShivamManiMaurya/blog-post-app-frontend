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

const getBlog = async (paylod: { token: string; id: string }) => {
  const response = await axiosInstance.get(
    `${BLOG_ENDPOINT}${API_ENDPOINTS.GET_POST}${paylod.id}`,
    {
      headers: getHeadersWithToken(paylod.token),
    }
  );
  return response.data;
};

const addBlog = async (payload: {
  token: string;
  data: {
    title: string;
    content: string;
    published?: boolean;
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

const updateBlog = async (payload: {
  token: string;
  id: string;
  data: {
    title: string;
    content: string;
    published?: boolean;
  };
}) => {
  const response = await axiosInstance.patch(
    `${BLOG_ENDPOINT}${API_ENDPOINTS.UPDATE_POST}${payload.id}`,
    payload.data,
    {
      headers: getHeadersWithToken(payload.token),
    }
  );
  return response.data;
};

const deleteBlog = async (payload: { token: string; id: string }) => {
  const response = await axiosInstance.patch(
    `${BLOG_ENDPOINT}${API_ENDPOINTS.DELETE_POST}${payload.id}`,
    null,
    {
      headers: getHeadersWithToken(payload.token),
    }
  );
  return response;
};

export const postService = {
  getBlogs,
  getBlog,
  addBlog,
  updateBlog,
  deleteBlog,
};
