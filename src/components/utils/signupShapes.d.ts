export declare namespace signupShapes {
  type TSignupDetails = {
    label: string;
    type: "text" | "number" | "email" | "password";
    value: string | number;
    placeholder?: string;
    error?: boolean;
    errorMsg?: string;
    required?: boolean;
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
    onBlur?: () => void;
  };

  type TFormData = {
    name: string;
    email: string;
    password: string;
  };

  type TTouched = {
    name: boolean;
    email: boolean;
    password: boolean;
  };

  type TSigninTouched = {
    email: boolean;
    password: boolean;
  };
}
