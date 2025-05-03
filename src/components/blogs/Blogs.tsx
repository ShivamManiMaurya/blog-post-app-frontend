import React, { useMemo } from "react";
import { useNavigate } from "react-router-dom";
import { toMaybe } from "../../helpers/Maybe";

interface IProps {
  id: string;
  title: string;
  blog: string;
  isSingle?: boolean;
}

const Blogs: React.FC<IProps> = ({ id, title, blog, isSingle = false }) => {
  const navigate = useNavigate();

  const restrictedBlog = useMemo(() => {
    let count = 0;
    const arr = toMaybe(blog)
      .unwrapOr("")
      .split(" ")
      .map((str) => {
        // Count word + space
        if (count + str?.length + 1 <= 100) {
          count += str?.length + 1;
          return str;
        }
        return "";
      });

    const result = arr.filter(Boolean).join(" ");
    return count > 100 || blog?.length > 100 ? result + "..." : result;
  }, [blog]);

  const handleClick = (id: string) => {
    navigate(`/blog/${id}`);
  };

  return (
    <div className=" cursor-pointer" onClick={() => handleClick(id)}>
      <h1 className=" font-bold text-3xl">{title}</h1>
      <p className=" text-xl">{isSingle ? blog : restrictedBlog}</p>
    </div>
  );
};

export default Blogs;
