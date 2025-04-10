import React from "react";
import { signupShapes } from "../utils/signupShapes";

interface IProps {
  label: signupShapes.TSignupDetails["label"];
  type: signupShapes.TSignupDetails["type"];
  value: signupShapes.TSignupDetails["value"];
  onChange: signupShapes.TSignupDetails["onChange"];
  placeholder?: signupShapes.TSignupDetails["placeholder"];
}

const InputField: React.FC<IProps> = ({
  label,
  type,
  value,
  onChange,
  placeholder,
}) => {
  return (
    <div>
      <label
        htmlFor={label}
        className="block text-sm font-medium text-gray-700">
        {label}
      </label>
      <input
        id={label}
        type={type}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        className="mt-1 w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-black focus:border-black"
      />
    </div>
  );
};

export default InputField;
