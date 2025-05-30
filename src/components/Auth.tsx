import React, { useMemo, useState } from "react";
import { Link } from "react-router-dom";
import InputField from "./commons/InputField";
import { signupShapes } from "./utils/signupShapes";
import { getSigninDetails, getSignupDetails } from "./utils/helpers";
import { SignupInput, SigninInput } from "@shivam-maurya/medium-commons";
import useUserMutations from "../apis/hooks/services/useUserMutations";
import { toast } from "react-toastify";
import Spinner from "./commons/Spinner";

interface IProps {
  isSignup: boolean;
}

const Auth: React.FC<IProps> = ({ isSignup }) => {
  // states
  const [formData, setFormData] = useState<SignupInput>({
    name: "",
    email: "",
    password: "",
  });
  const [touched, setTouched] = useState<signupShapes.TTouched>({
    name: false,
    email: false,
    password: false,
  });
  const [signinData, setSinginData] = useState<SigninInput>({
    email: "",
    password: "",
  });
  const [signinTouched, setSigninTouched] =
    useState<signupShapes.TSigninTouched>({
      email: false,
      password: false,
    });
  const [isLoading, setIsLoading] = useState(false);

  // api calls
  const { signupUser, singInUser } = useUserMutations();

  const fieldDetails = useMemo(() => {
    if (isSignup) {
      return getSignupDetails(formData, touched, setTouched, setFormData);
    } else {
      return getSigninDetails(
        signinData,
        signinTouched,
        setSigninTouched,
        setSinginData
      );
    }
  }, [isSignup, formData, touched, signinData, signinTouched]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    setTouched({
      name: true,
      email: true,
      password: true,
    });

    setSigninTouched({
      email: true,
      password: true,
    });

    const isValid = isSignup
      ? formData.email && formData.password && formData.password.length >= 6
      : signinData.email &&
        signinData.password &&
        signinData.password.length >= 6;

    if (!isValid) {
      toast.error("Please fill out all required fields correctly");
      return;
    }

    const payload = isSignup ? formData : signinData;

    try {
      if (isSignup) {
        await signupUser.mutateAsync(payload);
      } else {
        await singInUser.mutateAsync(payload);
      }
    } catch (err) {
      toast.error("Something went wrong. Please try again.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-white px-4 ">
      <div className="max-w-md w-full space-y-8">
        <div>
          <h2 className="text-3xl font-bold text-gray-900">
            {`${isSignup ? "Create" : "Login"} an account`}
          </h2>
          {isSignup ? (
            <p className=" text-gray-500">
              Already have an account? <Link to="/signin">Login</Link>
            </p>
          ) : (
            <p className=" text-gray-500">
              Don't have an account? <Link to="/signup">Signup</Link>
            </p>
          )}
        </div>
        <form onSubmit={handleSubmit} className=" mt-8 space-y-6">
          {fieldDetails.map((item, index) => (
            <InputField key={index + item.label} fields={item} />
          ))}
          <div>
            <button
              type="submit"
              disabled={isLoading}
              className="w-full py-2 px-4 bg-black text-white font-medium rounded-md hover:bg-gray-800 transition flex justify-center items-center gap-2">
              {isLoading && <Spinner />}
              {isLoading ? "Processing..." : !isSignup ? "Login" : "Sign Up"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Auth;
