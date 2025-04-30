import { SignupInput } from "@shivam-maurya/medium-commons";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { userService } from "../../services/userService";
import { toast } from "react-toastify";
import { RootState, AppDispatch } from "../../../redux/store";
import { setAuthToken } from "../../../redux/slices/authSlice";
import { useSelector, useDispatch } from "react-redux";
import { Some } from "../../../helpers/Some";

const userMutation = () => {
  const auth = useSelector((state: RootState) => state.auth);
  const dispatch = useDispatch<AppDispatch>();

  console.log("auth = ", auth);

  const signupUser = useMutation({
    mutationFn: userService.signupUser,
    onSuccess: (data) => {
      console.log("User created:", data);
      toast.success("Account created successfully.");
    },
    onError: (d) => toast.error(d?.message || "Something went wrong."),
  });

  const singInUser = useMutation({
    mutationFn: userService.signinUser,
    onSuccess: (data) => {
      console.log("token = ", data);
      const token = Some.String(data.data.token);
      dispatch(setAuthToken(token));
      toast.success("User login successfully.");
    },
    onError: (d) => toast.error(d?.message || "Something went wrong."),
  });

  return {
    signupUser,
    singInUser,
  };
};

export default userMutation;
