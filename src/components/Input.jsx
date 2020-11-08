import React from "react";

const Input = ({ steps, onInput }) => {
  return (
    <input
      value={steps}
      min="0"
      required
      onChange={onInput}
      className="input"
      type="number"
      placeholder="Enter a number"
    />
  );
};

export default Input;
