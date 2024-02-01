import React, { useState } from "react";

const InputField = ({ type, id, label, value, onChange }) => (
  <div className="m-8">
    <input
      type={type}
      id={id}
      value={value}
      onChange={(e) => onChange(e.target.value)}
      placeholder={label}
      required
      className="border-b-2 border-black w-[300px]"
    />
  </div>
);
export default InputField