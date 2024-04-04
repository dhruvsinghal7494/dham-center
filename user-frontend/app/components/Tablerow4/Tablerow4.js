// import React, { useState, useEffect } from "react";

// const Tablerow4 = ({ label, value1, value2, handleInputChange }) => {
//   const [total, setTotal] = useState(0);

//   useEffect(() => {
//     setTotal(value1 * value2);
//   }, [value1, value2]);
//   return (
//     <tr>
//       <td className="py-2 px-4 border-b-5 border-gray-300">{label}</td>
//       <td className="w-32 p-2 rounded-md border-b border-gray-300 text-black">
//         <input
//           type={label.toLowerCase()}
//           id={label}
//           value={value1}
//           onChange={handleInputChange}
//           className="rounded-md w-50 p-2 border"
//         />
//       </td>
//       <td className="w-32 p-2 rounded-md border-b border-gray-300 text-black">
//         <input
//           type={label.toLowerCase()}
//           id={label}
//           value={value2}
//           onChange={handleInputChange}
//           className="rounded-md w-50 p-2 border"
//         />
//       </td>
//       <td className="w-32 p-2 rounded-md border-b border-gray-300 text-black">
//         <input
//           type={label.toLowerCase()}
//           id={label}
//           value={total}
//           onChange={(e) => setTotal(e.target.value)}
//           className="rounded-md w-50 p-2 border"
//         />
//       </td>
//     </tr>
//   );
// };

// export default Tablerow4;
import React from "react";

const Tablerow4 = ({ label, value = ["", "", ""], handleInputChange }) => {
  const [value1, value2, value3] = value;
  return (
    <tr>
      <td className="py-2 px-4 border-b-5 border-gray-300">{label}</td>
      <td className="w-32 p-2 rounded-md border-b border-gray-300 text-black">
        <input
          type="number"
          name="value1"
          value={value1}
          onChange={(e) => handleInputChange(e, 0)}
          className="rounded-md w-50 p-2 border"
        />
      </td>
      <td className="w-32 p-2 rounded-md border-b border-gray-300 text-black">
        <input
          type="number"
          name="value2"
          value={value2}
          onChange={(e) => handleInputChange(e, 1)}
          className="rounded-md w-50 p-2 border"
        />
      </td>
      <td className="w-32 p-2 rounded-md border-b border-gray-300 text-black">
        <input
          type="number"
          name="value3"
          value={value3}
          onChange={(e) => handleInputChange(e, 2)}
          className="rounded-md w-50 p-2 border"
        />
      </td>
    </tr>
  );
};

// const Tablerow4 = ({ label, value, handleInputChange }) => {
//   // value should be an array
//   const [value1, value2, value3] = value;

//   return (
//     <tr>
//       <td>{label}</td>
//       <td>
//         <input name="value1" value={value1} onChange={handleInputChange} />
//       </td>

//       <td>
//         <input name="value2" value={value2} onChange={handleInputChange} />
//       </td>

//       <td>
//         <input name="value3" value={value3} onChange={handleInputChange} />
//       </td>
//     </tr>
//   );
// };
export default Tablerow4;
