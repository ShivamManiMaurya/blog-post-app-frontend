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

  //   const singInUser = useMutation({
  //     mutationFn: userService.signinUser,
  //     onSuccess: (data) => {
  //       const token = Some.String(data.data.token);
  //       dispatch(setAuthToken(token));
  //       localStorage.setItem("token", token);
  //       toast.success("User login successfully.");
  //       navigate("../blogs");
  //     },
  //     onError: (d) => {
  //       console.log("err = ", d);
  //       toast.error(d?.message || "Something went wrong.");
  //     },
  //   });

  return {
    addPost,
  };
};

export default useBlogMutations;
