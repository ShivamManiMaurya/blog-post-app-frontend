import React from "react";

interface IProps {
  title: string;
  blog: string;
}

const Blogs: React.FC<IProps> = ({ title, blog }) => {
  return (
    <div>
      <h1 className=" font-bold text-3xl">{title}</h1>
      <p className=" text-xl">{blog}</p>
    </div>
  );
};

export default Blogs;
