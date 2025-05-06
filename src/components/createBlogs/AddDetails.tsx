import React, { useEffect, useState } from "react";
import useBlogMutations from "../../apis/hooks/services/useBlogMutations";
import useCreds from "../../helpers/hooks/useCreds";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import useGetSinglePost from "../../apis/hooks/services/useGetSinglePost";
import { Some } from "../../helpers/Some";

const AddDetails = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const location = useLocation();
  const isUpdate = location.pathname.includes("update");

  const [fields, setFields] = useState({
    title: "",
    content: "",
    published: false,
  });

  const { addPost, updatePost } = useBlogMutations();
  const { data: post, isLoading } = useGetSinglePost(Some.String(id));

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const creds = useCreds();

    if (isUpdate && id) {
      await updatePost.mutateAsync({ token: creds.token, id, data: fields });
    } else {
      await addPost.mutateAsync({ token: creds.token, data: fields });
    }
    navigate("/blogs");
  };

  useEffect(() => {
    if (id && post) {
      setFields({
        title: post.title,
        content: post.content,
        published: post.published,
      });
    }
  }, [id, post]);

  return (
    <form
      onSubmit={handleSubmit}
      className="mt-8 w-full space-y-6 px-72 flex justify-start items-end gap-20">
      <button
        type="submit"
        className=" absolute top-6 left-44 h-fit py-2 px-4 bg-black text-white font-medium rounded-md hover:bg-gray-800 transition flex justify-center items-center gap-2">
        {isUpdate ? "Update" : "Publish"}
      </button>
      <div className="flex flex-col items-center gap-5 w-full">
        <div className="w-full">
          <input
            value={fields.title}
            type="text"
            onChange={(e) =>
              setFields((prev) => ({ ...prev, title: e.target.value }))
            }
            placeholder="Title"
            className="w-full text-4xl font-light placeholder-gray-400 border-none focus:ring-0 outline-none text-left"
          />
        </div>
        <div className="w-full">
          <textarea
            value={fields.content}
            onChange={(e) =>
              setFields((prev) => ({ ...prev, content: e.target.value }))
            }
            placeholder="Tell your story..."
            className="w-full h-[calc(100vh-200px)] text-xl font-light placeholder-gray-400 border-none focus:ring-0 outline-none text-left resize-none"
          />
        </div>
        <label className="mt-2 flex items-center space-x-2 text-gray-700 absolute top-20 left-24">
          <input
            type="checkbox"
            checked={fields.published}
            onChange={(e) =>
              setFields((prev) => ({ ...prev, published: e.target.checked }))
            }
            className="form-checkbox h-5 w-5 text-blue-600"
          />
          <span>Mark as published</span>
        </label>
      </div>
    </form>
  );
};

export default AddDetails;
