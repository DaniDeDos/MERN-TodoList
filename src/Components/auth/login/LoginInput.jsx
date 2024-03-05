import React from "react";

const LoginInput = ({ type, name, placeholder, value, onChange, label }) => (
  <div>
    <label
      htmlFor={name}
      className="block mb-2 text-sm font-medium text-gray-900"
    >
      {label}
    </label>
    <input
      type={type}
      name={name}
      autoComplete={type === "email" ? "current-email" : "current-password"}
      id={name}
      className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5"
      placeholder={placeholder}
      required=""
      value={value}
      onChange={onChange}
    />
  </div>
);

export default LoginInput;
