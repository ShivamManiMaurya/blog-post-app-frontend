import React from "react";
import Header from "./Header";
import Blogs from "./Blogs";
import useGetAllBlogs from "../../apis/hooks/services/useGetBlogsAll";
import { useNavigate } from "react-router-dom";

const Index = () => {
  const { data: allPosts, isLoading } = useGetAllBlogs();
  const navigate = useNavigate();

  return (
    <div className="px-16 py-10 ">
      <button onClick={() => navigate("/blogs/create")}>Create blog</button>
      <hr className="my-4 border-t border-gray-300" />

      {allPosts.map((post) => (
        <div className=" py-4 " key={post.id}>
          <Header
            imgUrl={"https://i.pravatar.cc/40?img=12"}
            name={post.authName}
            date={post.createdAt}
          />
          <Blogs title={post.title} blog={post.content} id={post.id} />
        </div>
      ))}
    </div>
  );
};

export default Index;
