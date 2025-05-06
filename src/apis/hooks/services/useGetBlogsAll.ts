import { useQuery, UseQueryOptions } from "@tanstack/react-query";
import { Some } from "../../../helpers/Some";
import { postService } from "../../services/postService";
import { useSelector } from "react-redux";
import { RootState } from "../../../redux/store";
import useCreds from "../../../helpers/hooks/useCreds";
import { toMaybe } from "../../../helpers/Maybe";
import { postShapes } from "../../types/postShapes";
import axios from "axios";

function useGetAllBlogs() {
  const creds = useCreds();

  async function getAllBlogs() {
    try {
      const resp = await postService.getBlogs(Some.String(creds?.token));
      return Some.Array(resp?.data);
    } catch (error) {
      const errMsg =
        axios?.isAxiosError(error) && error?.response?.data?.message
          ? error.response.data.message
          : "An unexpected error occurred.";
      throw new Error(errMsg);
    }
  }

  function toAllBlogs(posts: any[]) {
    const allPosts: postShapes.allPost[] = posts.map((post) => {
      return {
        authName: Some.String(post?.authName),
        authorId: Some.String(post?.authorId),
        content: Some.String(post?.content),
        createdAt: Some.String(post?.createdAt),
        deleteAt: toMaybe(post?.deleteAt).unwrapOr(null),
        id: Some.String(post?.id),
        published: Some.Boolean(post?.published),
        title: Some.String(post?.title),
        updatedAt: toMaybe(post?.updatedAt).unwrapOr(null),
      };
    });
    return allPosts;
  }

  return useQuery({
    queryKey: ["get-all-blogs"],
    queryFn: getAllBlogs,
    select: (data: any[]) => toAllBlogs(data),
    refetchOnWindowFocus: false,
  });
}

export default useGetAllBlogs;
