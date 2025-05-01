import React, { useState } from "react";
import useBlogMutations from "../../apis/hooks/services/useBlogMutations";
import useCreds from "../../helpers/hooks/useCreds";

const AddDetails = () => {
  const [fields, setFields] = useState({
    title: "",
    content: "",
  });

  const { addPost } = useBlogMutations();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const token = useCreds();

    await addPost.mutateAsync({ token, data: fields });
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="mt-8 w-full space-y-6 px-72 flex justify-start items-end gap-20">
      <button
        type="submit"
        className=" absolute top-6 left-44 h-fit py-2 px-4 bg-black text-white font-medium rounded-md hover:bg-gray-800 transition flex justify-center items-center gap-2">
        Publish
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
      </div>
    </form>
  );
};

export default AddDetails;
