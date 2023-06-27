import React, { Dispatch } from "react";

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
  setValue: Dispatch;
  placeholder: string;
}) {
  return (
    <input
      type={type}
      value={value}
      name={name}
      onChange={(e) => setValue(e.target.value)}
      placeholder={placeholder}
      className=""
    />
  );
}
