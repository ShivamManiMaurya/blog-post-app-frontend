import { useMutation } from "@tanstack/react-query";
import { userService } from "../../services/userService";
import { toast } from "react-toastify";
import { AppDispatch } from "../../../redux/store";
import { setAuthToken } from "../../../redux/slices/authSlice";
import { useDispatch } from "react-redux";
import { Some } from "../../../helpers/Some";
import { useNavigate } from "react-router-dom";
import { postService } from "../../services/postService";

const useBlogMutations = () => {
  const dispatch = useDispatch<AppDispatch>();
  const navigate = useNavigate();

  const addPost = useMutation({
    mutationFn: postService.addBlog,
    onSuccess: () => {
      toast.success("Story added successfully.");
      //   navigate("../blogs");
    },
    onError: (d) => toast.error(d?.message || "Something went wrong."),
  });

  const updatePost = useMutation({
    mutationFn: postService.updateBlog,
    onSuccess: () => {
      toast.success("Story updated successfully.");
    },
    onError: (d) => toast.error(d?.message || "Something went wrong."),
  });

  const deletePost = useMutation({
    mutationFn: postService.deleteBlog,
    onSuccess: () => {
      toast.success("Story deleted successfully.");
      navigate("/blogs");
    },
    onError: (d) => toast.error(d?.message || "Something went wrong."),
  });

  return {
    addPost,
    updatePost,
    deletePost,
  };
};

export default useBlogMutations;
