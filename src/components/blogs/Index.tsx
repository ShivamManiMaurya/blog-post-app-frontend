import React from "react";
import Header from "./Header";
import Blogs from "./Blogs";

const Index = () => {
  return (
    <div>
      {/* Headers  */}
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
