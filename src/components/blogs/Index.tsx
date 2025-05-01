import React from "react";
import Header from "./Header";
import Blogs from "./Blogs";
import useGetAllBlogs from "../../apis/hooks/services/useGetBlogsAll";
import { useNavigate } from "react-router-dom";

const Index = () => {
  const { data, isLoading } = useGetAllBlogs();
  const navigate = useNavigate();

  return (
    <div>
      {/* Headers  */}
      <button onClick={() => navigate("/blogs/create")}>Create blog</button>
      <Header
        imgUrl={"https://i.pravatar.cc/40?img=12"}
        name={"ravi"}
        date={"Dec 3, 2023"}
      />
      {/* Blogs  */}
      <Blogs
        title={
          "default values if the input is invalid or of an unexpected type"
        }
        blog={
          "Day 15 of #100DaysOfCode Added some utility functions that ensure type safety and allow setting default values if the input is invalid or of an unexpected type"
        }
      />
    </div>
  );
};

export default Index;
