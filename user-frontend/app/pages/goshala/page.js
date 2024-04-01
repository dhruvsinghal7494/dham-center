"use client";
import Navbar from "@/app/components/Navbar/Navbar";
import React from "react";
import TableRow from "@/app/components/TableRow/TableRow";
import { useState } from "react";

const Goshala = () => {
  // State to store user input values
  const [userData, setUserData] = useState({
    name: "",
    phone: "",
    address: "",
    amount: "",
  });
  const [successMessage, setSuccessMessage] = useState("");

  // Function to handle input changes
  const onChange = (name, value) => {
    setUserData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(userData);

    try {
      const response = await fetch("http://localhost:5000/api/goshala", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(userData),
      });

      if (!response.ok) {
        throw new Error("Network response was not ok");
      }

      setUserData({
        name: "",
        phone: "",
        address: "",
        amount: "",
      });

      const responseData = await response.json();
      console.log(responseData);

      // Display success message to the user
      setSuccessMessage("Entry saved successfully!");
    } catch (error) {
      setSuccessMessage("Error saving entry. Please try again.");
      console.error(error);
    }
  };

  return (
    <div className="container mx-auto pt-6 pb-2">
      {/* {userData.username} */}
      <Navbar />
      <form className="max-w-lg mx-auto bg-red pt-8 pb-4 pl-8 pr-8 border border-gray-300 rounded-md">
        <table className="w-full mt-6">
          <thead>
            <tr>
              <th className="py-2 px-4 border-b border-gray-300 text-left">
                Constraint
              </th>
              <th className="py-2 px-4 border-b border-gray-300">User Input</th>
            </tr>
          </thead>
          <tbody>
            <TableRow
              label="Name"
              value={userData.name}
              handleInputChange={(event) =>
                onChange("name", event.target.value)
              }
            />
            <TableRow
              label="Phone"
              value={userData.phone}
              handleInputChange={(event) =>
                onChange("phone", event.target.value)
              }
            />
            <TableRow
              label="Address"
              value={userData.address}
              handleInputChange={(event) =>
                onChange("address", event.target.value)
              }
            />
            <TableRow
              label="Amount"
              value={userData.amount}
              handleInputChange={(event) =>
                onChange("amount", event.target.value)
              }
            />
          </tbody>
        </table>
        <div className="flex flex-col items-center justify-center mt-4">
          {successMessage && (
            <div className="text-white-600">{successMessage}</div>
          )}
          <button
            type="submit"
            className="px-4 py-2 bg-teal-500 text-white rounded-md cursor-pointer mt-4"
            onClick={handleSubmit}
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default Goshala;
