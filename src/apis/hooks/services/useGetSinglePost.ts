import { Token } from "./../../../../node_modules/acorn/dist/acorn.d";
import { useQuery } from "@tanstack/react-query";
import { Some } from "../../../helpers/Some";
import { postService } from "../../services/postService";
import { useSelector } from "react-redux";
import { RootState } from "../../../redux/store";
import useCreds from "../../../helpers/hooks/useCreds";
import { toMaybe } from "../../../helpers/Maybe";
import { postShapes } from "../../types/postShapes";

function useGetSinglePost(id: string) {
  const creds = useCreds();

  const payload = {
    token: creds?.token,
    id,
  };

  async function getPost() {
    const resp = await postService.getBlog(payload);
    const post = Some.Object(resp?.data);
    const allPosts: postShapes.allPost = {
      authName: Some.String(post?.name),
      authorId: Some.String(post?.authorId),
      content: Some.String(post?.content),
      createdAt: Some.String(post?.createdAt),
      deleteAt: toMaybe(post?.deleteAt).unwrapOr(null),
      id: Some.String(post?.id),
      published: Some.Boolean(post?.published),
      title: Some.String(post?.title),
      updatedAt: toMaybe(post?.updatedAt).unwrapOr(null),
    };

    return allPosts;
  }

  return useQuery({
    queryKey: ["get-blog"],
    queryFn: getPost,
    refetchOnWindowFocus: false,
  });
}

export default useGetSinglePost;
