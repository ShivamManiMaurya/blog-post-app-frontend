import { useQuery } from "@tanstack/react-query";
import { Some } from "../../../helpers/Some";
import { postService } from "../../services/postService";
import { useSelector } from "react-redux";
import { RootState } from "../../../redux/store";
import useCreds from "../../../helpers/hooks/useCreds";
import { toMaybe } from "../../../helpers/Maybe";
import { postShapes } from "../../types/postShapes";

function useGetAllBlogs() {
  const token = useCreds();

  async function getAllBlogs() {
    const resp = await postService.getBlogs(Some.String(token));
    const posts = Some.Array(resp?.data);
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
    refetchOnWindowFocus: false,
    initialData: [],
  });
}

export default useGetAllBlogs;
