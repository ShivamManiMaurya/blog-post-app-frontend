export declare namespace signupShapes {
  type TSignupDetails = {
    label: string;
    type: "text" | "number" | "email" | "password";
    value: string | number;
    placeholder?: string;
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  };

  type TFormData = {
    username: string;
    email: string;
    password: string;
  };
}
