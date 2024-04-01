import React, { useState } from "react";

const Tablerow = ({ label, value, handleInputChange }) => {
  return (
    <tr>
      <td className="py-2 px-4 border-b-5 border-gray-300">{label}</td>
      <td className="w-32 p-2 rounded-md border-b border-gray-300 text-black">
        <input
          type={label.toLowerCase()}
          id={label}
          value={value}
          onChange={handleInputChange}
          className="rounded-md w-50 p-2 border"
        />
      </td>
    </tr>
  );
};

export default Tablerow;
