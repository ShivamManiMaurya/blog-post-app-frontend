import React from "react";
import { signupShapes } from "../utils/signupShapes";

interface IProps {
  fields: signupShapes.TSignupDetails;
}

const InputField: React.FC<IProps> = ({ fields }) => {
  return (
    <div>
      <label
        htmlFor={fields.label}
        className="block text-sm font-medium text-gray-700">
        {fields.label}
        {fields.required ? "*" : ""}
      </label>
      <input
        id={fields.label}
        type={fields.type}
        value={fields.value}
        onChange={fields.onChange}
        placeholder={fields.placeholder}
        onBlur={fields.onBlur}
        className={`mt-1 w-full px-3 py-2 border ${
          fields.error ? "border-red-500" : "border-gray-300"
        } rounded-md shadow-sm focus:outline-none focus:ring-black focus:border-black`}
      />
      {fields.error && (
        <p className="mt-1 text-sm text-red-600">{fields.errorMsg}</p>
      )}
    </div>
  );
};

export default InputField;
