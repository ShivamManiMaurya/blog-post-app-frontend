import React from "react";
import Header from "./Header";
import Blogs from "./Blogs";
import useGetSinglePost from "../../apis/hooks/services/useGetSinglePost";
import { useParams } from "react-router-dom";
import { Some } from "../../helpers/Some";

const SingleBlog = () => {
  const { id } = useParams<{ id: string }>();

  const { data: post, isLoading } = useGetSinglePost(Some.String(id));

  console.log("post = ", post);

  return (
    <div>
      <Header
        imgUrl={"https://i.pravatar.cc/40?img=12"}
        name={post.authName}
        date={post.createdAt}
      />
      <Blogs title={post.title} blog={post.content} id={post.id} />
    </div>
  );
};

export default SingleBlog;
