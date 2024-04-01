"use client";
import Navbar from "@/app/components/Navbar/Navbar";
import React from "react";
import TableRow from "@/app/components/TableRow/TableRow";
import { useState } from "react";
import Tablerow4 from "@/app/components/Tablerow4/Tablerow4";

const Arihanta = () => {
  // State to store user input values
  const [userData, setUserData] = useState({
    products: "",
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
      const response = await fetch("http://localhost:5000/api/arihanta", {
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
        //medicines
        befresh: "",
        ntgas: "",
        immunePower: "",
        motapaMukti: "",
        diabZ: "",
        allerex: "",
        livnu: "",
        nilstone: "",
        menstronil: "",
        finedent: "",
        amritRas: "",
        brahmiJeevan: "",
        heightIncrease: "",
        jeevansar: "",
        kafhar: "",
        isotineEyedrop: "",

        //general
        patrika: "",
        dhoopStick: "",
        cgl: "",
        dhoopCone: "",
        hawanKund: "",
        aasan: "",
        dhuniPatraElec: "",
        riyalBig: "",
        riyalSmall: "",
        mala108: "",
        mala27: "",
        gomukhi: "",
        tilak: "",
        dssCover: "",
        gown: "",
        newGown: "",
        aanchmani: "",

        //murti
        gurujiWooden: "",
        durgaji: "",
        shukraji: "",
        hanumanji: "",
        radhaKrishanji: "",
        ramParivarji: "",
        lakshmiGaneshji: "",
        shivParivarji: "",
        shaniYantra: "",

        //other
        shampooBig: "",
        shampooSmall: "",
        specialDhuni: "",
        locketNew: "",
        bracelet: "",
        penDrive: "",

        //visheshkripaHawanSamagri: "",

        // bslnd
        poojaHawanSamagri: "",
        antiDandruff: "",
        gaisant: "",
        pachak: "",
        vathar: "",
        oodh1000: "",
        oodh5000: "",
        maykhanaCover: "",
        locket40: "",
        keyring: "",
        dhamBag: "",
        carStand: "",
        photo100: "",
        photo50: "",
        photo20: "",
        photo10: "",
        diary: "",

        //bslndMurti (to be confirmed)
        lakshmiGaneshjiMetal: "",
        hanumanjiMetalSmall: "",
        hanumanjiMetalBig: "",
        durgajiMetal: "",
        gangajiMetal: "",
        radhaKrishanjiMetal: "",
        ganeshjiMetal: "",

        pardShivling: "",
        pardBhasam: "",
        shivlingJal: "",
        charanPadukaBig: "",
        charanPadukaSmall: "",
        radhaKrishanShaktiFrame: "",
        radhaKrishanShaktiBhasam: "",

        //books
        experiencingDivinity: "",
        theEndofHumanSuff: "",
        liberationBeforeDeath: "",
        sadhguruVaniEng: "",
        sadhguruVaniHindi: "",
        divineDimention: "",
        dharamAurMedicalScience: "",
        mahayogiRajPunjabi: "",
        mahayogiRajHindi: "",
        mrityuSePehleMukti: "",
        maykhannajiBookHindi: "",
        maykhannajiBookUrdu: "",
        chamatkarNahiSatyaHai: "",
        gurugeetajiHindi: "",
        gurugeetajiEng: "",
        shatkam: "",
        gsHindi: "",
        gsEng: "",
        gsPunjabi: "",
        kalpatruChalisa: "",
        adbuthsantHindi: "",
        adbuthsantEng: "",
        adhbuthUttar: "",
        pkpHindi: "",
        pkpEng: "",
        pkpPunjabi: "",

        //bslndOther
        whiteAasan: "",
        dCure: "",
        shivHariEat: "",
        shivHariBath: "",
        pranUrja: "",
        calendar: "",
        treeOfLife: "",

        //to be confirmed
        miracleWash: "",
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
      <form className="w-200 mx-auto bg-red pt-8 pb-4 pl-8 pr-8 border border-gray-300 rounded-md">
        <table className="w-full mt-6">
          <thead>
            <tr>
              <th className="py-2 px-4 border-b border-gray-300 text-left">
                Products
              </th>
              <th className="py-2 px-4 border-b border-gray-300">Quantity</th>
              <th className="py-2 px-4 border-b border-gray-300">
                Price per piece
              </th>
              <th className="py-2 px-4 border-b border-gray-300">Total</th>
            </tr>
          </thead>
          <tbody>
            {/* <TableRow
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
            /> */}
            <Tablerow4
              label="Products"
              value={userData.products}
              handleInputChange={(event) =>
                onChange("products", event.target.value)
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

export default Arihanta;
