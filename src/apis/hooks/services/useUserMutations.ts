import { SignupInput } from "@shivam-maurya/medium-commons";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { userService } from "../../services/userService";
import { toast } from "react-toastify";

const userMutation = () => {
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
