import React, { useMemo } from "react";
import Header from "./Header";
import Blogs from "./Blogs";
import useGetSinglePost from "../../apis/hooks/services/useGetSinglePost";
import { useNavigate, useParams } from "react-router-dom";
import { Some } from "../../helpers/Some";
import Spinner from "../commons/Spinner";
import { toMaybe } from "../../helpers/Maybe";
import { postShapes } from "../../apis/types/postShapes";
import ErrorText from "../commons/ErrorText";

const SingleBlog = () => {
  const { id } = useParams<{ id: string }>();

  // api call
  const { data, isLoading, isError, error } = useGetSinglePost(Some.String(id));

  const post = useMemo(() => {
    return toMaybe(data).unwrapOr({} as postShapes.allPost);
  }, [data]);

  return (
    <div className=" p-24">
      {isLoading ? (
        <div className=" flex justify-center items-center h-[75vh]">
          <Spinner width="4rem" height="4rem" />
        </div>
      ) : isError || error ? (
        <ErrorText error={error} />
      ) : (
        <>
          <Header
            imgUrl={"https://i.pravatar.cc/40?img=12"}
            name={post.authName}
            date={post.createdAt}
            authorId={post.authorId}
            id={id}
            isEdit
          />
          <Blogs
            title={post.title}
            blog={post.content}
            id={post.id}
            isSingle={true}
          />
        </>
      )}
    </div>
  );
};

export default SingleBlog;
