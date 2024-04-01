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
import React, { useState } from "react";

const Tablerow4 = ({ label, value1, value2, total, handleInputChange }) => {
  // const [total, setTotal] = useState(value1 * value2 || 0);

  // const handleValueChange = (e) => {
  //   const { name, value } = e.target;
  //   // Call handleInputChange to update the parent state
  //   handleInputChange(name, value);
  //   // Calculate and update the total
  //   setTotal(name === "value1" ? value * value2 : value1 * value);
  // };

  return (
    <tr>
      <td className="py-2 px-4 border-b-5 border-gray-300">{label}</td>
      <td className="w-32 p-2 rounded-md border-b border-gray-300 text-black">
        <input
          type="number"
          name="value1"
          value={value1}
          onChange={handleInputChange}
          className="rounded-md w-50 p-2 border"
        />
      </td>
      <td className="w-32 p-2 rounded-md border-b border-gray-300 text-black">
        <input
          type="number"
          name="value2"
          value={value2}
          onChange={handleInputChange}
          className="rounded-md w-50 p-2 border"
        />
      </td>
      <td className="w-32 p-2 rounded-md border-b border-gray-300 text-black">
        <input
          type="text"
          value={total}
          onChange={handleInputChange}
          className="rounded-md w-50 p-2 border"
        />
      </td>
    </tr>
  );
};

export default Tablerow4;
