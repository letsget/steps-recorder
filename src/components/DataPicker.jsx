import React from "react";

const DataPicker = ({ onInput, date }) => {
  return (
    <input
      className="input"
      required
      type="date"
      onChange={onInput}
      value={date}
    />
  );
};

export default DataPicker;
