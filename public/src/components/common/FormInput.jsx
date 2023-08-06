import React, { Dispatch, SetStateAction } from "react";

export default function FormInput({
  name,
  type = "text",
  value,
  setValue,
  placeholder,
  isListing = false,
}) {
  return (
    <input
      type={type}
      value={value}
      name={name}
      onChange={(e) =>
        isListing ? setValue(name, e.target.value) : setValue(e.target.value)
      }
      placeholder={placeholder}
      className="border border-gray-300 px-2 py-4 rounded-md w-full"
    />
  );
}
