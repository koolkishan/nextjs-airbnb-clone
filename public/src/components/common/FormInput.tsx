import React, { Dispatch, SetStateAction } from "react";

export default function FormInput({
  name,
  type = "text",
  value,
  setValue,
  placeholder,
}: {
  name: string;
  type: "text" | "password";
  value: string;
  setValue: Dispatch<SetStateAction<string>>;
  placeholder: string;
}) {
  return (
    <input
      type={type}
      value={value}
      name={name}
      onChange={(e) => setValue(e.target.value)}
      placeholder={placeholder}
      className="border border-gray-300 px-2 py-4 rounded-md w-full"
    />
  );
}
