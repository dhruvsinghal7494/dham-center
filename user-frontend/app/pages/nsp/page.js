"use client";
import Navbar from "@/app/components/Navbar/Navbar";
import TableRow from "@/app/components/TableRow/TableRow";
import React, { useState } from "react";
// import axios from "axios";
import "dotenv/config";
import Tablerow4 from "@/app/components/Tablerow4/Tablerow4";

const NSPpage = () => {
  // State to store user input values
  const [userData, setUserData] = useState({
    // bslnd
    poojaHawanSamagri: ["", "", ""],
    antiDandruff: ["", "", ""],
    gaisant: ["", "", ""],
    pachak: ["", "", ""],
    vathar: ["", "", ""],
    oodh1000: ["", "", ""],
    oodh500: ["", "", ""],
    maykhanaCover: ["", "", ""],
    locket40: ["", "", ""],
    keyring: ["", "", ""],
    dhamBag: ["", "", ""],
    carStand: ["", "", ""],
    photo100: ["", "", ""],
    photo50: ["", "", ""],
    photo20: ["", "", ""],
    photo10: ["", "", ""],
    diary: ["", "", ""],

    //bslndMurti (to be confirmed)
    lakshmiGaneshjiMetal: ["", "", ""],
    hanumanjiMetalSmall: ["", "", ""],
    hanumanjiMetalBig: ["", "", ""],
    durgajiMetal: ["", "", ""],
    gangajiMetal: ["", "", ""],
    radhaKrishanjiMetal: ["", "", ""],
    ganeshjiMetal: ["", "", ""],

    pardShivling: ["", "", ""],
    pardBhasam: ["", "", ""],
    shivlingJal: ["", "", ""],
    charanPadukaBig: ["", "", ""],
    charanPadukaSmall: ["", "", ""],
    radhaKrishanShaktiFrame: ["", "", ""],
    radhaKrishanShaktiBhasam: ["", "", ""],

    //books(to bve confirmed)
    // experiencingDivinity: ["", "", ""],
    // theEndofHumanSuff: ["", "", ""],
    // liberationBeforeDeath: ["", "", ""],
    // sadhguruVaniEng: ["", "", ""],
    // sadhguruVaniHindi: ["", "", ""],
    // divineDimention: ["", "", ""],
    // dharamAurMedicalScience: ["", "", ""],
    // mahayogiRajPunjabi: ["", "", ""],
    // mahayogiRajHindi: ["", "", ""],
    // mrityuSePehleMukti: ["", "", ""],
    // maykhannajiBookHindi: ["", "", ""],
    // maykhannajiBookUrdu: ["", "", ""],
    // chamatkarNahiSatyaHai: ["", "", ""],
    // gurugeetajiHindi: ["", "", ""],
    // gurugeetajiEng: ["", "", ""],
    // shatkam: ["", "", ""],
    // gsHindi: ["", "", ""],
    // gsEng: ["", "", ""],
    // gsPunjabi: ["", "", ""],
    // kalpatruChalisa: ["", "", ""],
    // adbuthsantHindi: ["", "", ""],
    // adbuthsantEng: ["", "", ""],
    // adhbuthUttar: ["", "", ""],
    // pkpHindi: ["", "", ""],
    // pkpEng: ["", "", ""],
    // pkpPunjabi: ["", "", ""],

    //bslndOther
    whiteAasan: ["", "", ""],
    dCure: ["", "", ""],
    shivHariEat: ["", "", ""],
    shivHariBath: ["", "", ""],
    pranUrja: ["", "", ""],
    calendar: ["", "", ""],
    treeOfLife: ["", "", ""],

    //to be confirmed
    miracleWash: ["", "", ""],
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

  const handleInputChange = (name, value, index) => {
    setUserData((prev) => ({
      ...prev,
      [name]: prev[name].map((item, i) => (i === index ? value : item)),
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(userData);

    try {
      const response = await fetch("http://localhost:5000/api/nsp", {
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
        // bslnd
        poojaHawanSamagri: "",
        antiDandruff: "",
        gaisant: "",
        pachak: "",
        vathar: "",
        oodh1000: "",
        oodh500: "",
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

        // //books
        // experiencingDivinity: "",
        // theEndofHumanSuff: "",
        // liberationBeforeDeath: "",
        // sadhguruVaniEng: "",
        // sadhguruVaniHindi: "",
        // divineDimention: "",
        // dharamAurMedicalScience: "",
        // mahayogiRajPunjabi: "",
        // mahayogiRajHindi: "",
        // mrityuSePehleMukti: "",
        // maykhannajiBookHindi: "",
        // maykhannajiBookUrdu: "",
        // chamatkarNahiSatyaHai: "",
        // gurugeetajiHindi: "",
        // gurugeetajiEng: "",
        // shatkam: "",
        // gsHindi: "",
        // gsEng: "",
        // gsPunjabi: "",
        // kalpatruChalisa: "",
        // adbuthsantHindi: "",
        // adbuthsantEng: "",
        // adhbuthUttar: "",
        // pkpHindi: "",
        // pkpEng: "",
        // pkpPunjabi: "",

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
      {/* <Navbar /> */}
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
            {/* to be confirmed if this is vishesh kripa or diff */}
            <Tablerow4
              label="Pooja Hawan Samagri"
              value={userData.poojaHawanSamagri}
              handleInputChange={(event, index) =>
                handleInputChange(
                  "poojaHawanSamagri",
                  event.target.value,
                  index
                )
              }
            />

            <Tablerow4
              label="Anti Dandruff"
              value={userData.antiDandruff}
              handleInputChange={(event, index) =>
                handleInputChange("antiDandruff", event.target.value, index)
              }
            />

            <Tablerow4
              label="Gaisant"
              value={userData.gaisant}
              handleInputChange={(event, index) =>
                handleInputChange("gaisant", event.target.value, index)
              }
            />

            <Tablerow4
              label="Pachak"
              value={userData.pachak}
              handleInputChange={(event, index) =>
                handleInputChange("pachak", event.target.value, index)
              }
            />

            <Tablerow4
              label="Vathar"
              value={userData.vathar}
              handleInputChange={(event, index) =>
                handleInputChange("vathar", event.target.value, index)
              }
            />

            <Tablerow4
              label="Oodh 1000"
              value={userData.oodh1000}
              handleInputChange={(event, index) =>
                handleInputChange("oodh1000", event.target.value, index)
              }
            />

            <Tablerow4
              label="Oodh 500"
              value={userData.oodh500}
              handleInputChange={(event, index) =>
                handleInputChange("oodh500", event.target.value, index)
              }
            />

            <Tablerow4
              label="Maykhana Cover"
              value={userData.maykhanaCover}
              handleInputChange={(event, index) =>
                handleInputChange("maykhanaCover", event.target.value, index)
              }
            />

            <Tablerow4
              label="Locket 40"
              value={userData.locket40}
              handleInputChange={(event, index) =>
                handleInputChange("locket40", event.target.value, index)
              }
            />

            <Tablerow4
              label="Keyring"
              value={userData.keyring}
              handleInputChange={(event, index) =>
                handleInputChange("keyring", event.target.value, index)
              }
            />

            <Tablerow4
              label="Dham Bag"
              value={userData.dhamBag}
              handleInputChange={(event, index) =>
                handleInputChange("dhamBag", event.target.value, index)
              }
            />

            <Tablerow4
              label="Car Stand"
              value={userData.carStand}
              handleInputChange={(event, index) =>
                handleInputChange("carStand", event.target.value, index)
              }
            />

            <Tablerow4
              label="Photo 100"
              value={userData.photo100}
              handleInputChange={(event, index) =>
                handleInputChange("photo100", event.target.value, index)
              }
            />

            <Tablerow4
              label="Photo 50"
              value={userData.photo50}
              handleInputChange={(event, index) =>
                handleInputChange("photo50", event.target.value, index)
              }
            />

            <Tablerow4
              label="Photo 20"
              value={userData.photo20}
              handleInputChange={(event, index) =>
                handleInputChange("photo20", event.target.value, index)
              }
            />

            <Tablerow4
              label="Photo 10"
              value={userData.photo10}
              handleInputChange={(event, index) =>
                handleInputChange("photo10", event.target.value, index)
              }
            />

            <Tablerow4
              label="Diary"
              value={userData.diary}
              handleInputChange={(event, index) =>
                handleInputChange("diary", event.target.value, index)
              }
            />

            <Tablerow4
              label="Lakshmi Ganeshji Metal"
              value={userData.lakshmiGaneshjiMetal}
              handleInputChange={(event) =>
                handleInputChange("lakshmiGaneshjiMetal", event.target.value)
              }
            />

            <Tablerow4
              label="Hanumanji Metal (Small)"
              value={userData.hanumanjiMetalSmall}
              handleInputChange={(event) =>
                handleInputChange("hanumanjiMetalSmall", event.target.value)
              }
            />

            <Tablerow4
              label="Hanumanji Metal (Big)"
              value={userData.hanumanjiMetalBig}
              handleInputChange={(event) =>
                handleInputChange("hanumanjiMetalBig", event.target.value)
              }
            />

            <Tablerow4
              label="Durgaji Metal"
              value={userData.durgajiMetal}
              handleInputChange={(event) =>
                handleInputChange("durgajiMetal", event.target.value)
              }
            />

            <Tablerow4
              label="Gangaji Metal"
              value={userData.gangajiMetal}
              handleInputChange={(event) =>
                handleInputChange("gangajiMetal", event.target.value)
              }
            />

            <Tablerow4
              label="Radha Krishanji Metal"
              value={userData.radhaKrishanjiMetal}
              handleInputChange={(event) =>
                handleInputChange("radhaKrishanjiMetal", event.target.value)
              }
            />

            <Tablerow4
              label="Ganeshji Metal"
              value={userData.ganeshjiMetal}
              handleInputChange={(event) =>
                handleInputChange("ganeshjiMetal", event.target.value)
              }
            />

            <Tablerow4
              label="Pard Shivling"
              value={userData.pardShivling}
              handleInputChange={(event) =>
                handleInputChange("pardShivling", event.target.value)
              }
            />

            <Tablerow4
              label="Pard Bhasam"
              value={userData.pardBhasam}
              handleInputChange={(event) =>
                handleInputChange("pardBhasam", event.target.value)
              }
            />

            <Tablerow4
              label="Shivling Jal"
              value={userData.shivlingJal}
              handleInputChange={(event) =>
                handleInputChange("shivlingJal", event.target.value)
              }
            />

            <Tablerow4
              label="Charan Paduka (Big)"
              value={userData.charanPadukaBig}
              handleInputChange={(event) =>
                handleInputChange("charanPadukaBig", event.target.value)
              }
            />

            <Tablerow4
              label="Charan Paduka (Small)"
              value={userData.charanPadukaSmall}
              handleInputChange={(event) =>
                handleInputChange("charanPadukaSmall", event.target.value)
              }
            />

            <Tablerow4
              label="Radha Krishan Shakti Frame"
              value={userData.radhaKrishanShaktiFrame}
              handleInputChange={(event) =>
                handleInputChange("radhaKrishanShaktiFrame", event.target.value)
              }
            />

            <Tablerow4
              label="Radha Krishan Shakti Bhasam"
              value={userData.radhaKrishanShaktiBhasam}
              handleInputChange={(event) =>
                handleInputChange(
                  "radhaKrishanShaktiBhasam",
                  event.target.value
                )
              }
            />

            <Tablerow4
              label="White Aasan"
              value={userData.whiteAasan}
              handleInputChange={(event) =>
                handleInputChange("whiteAasan", event.target.value)
              }
            />

            <Tablerow4
              label="DCure"
              value={userData.dCure}
              handleInputChange={(event) =>
                handleInputChange("dCure", event.target.value)
              }
            />

            <Tablerow4
              label="Shiv Hari Eat"
              value={userData.shivHariEat}
              handleInputChange={(event) =>
                handleInputChange("shivHariEat", event.target.value)
              }
            />

            <Tablerow4
              label="Shiv Hari Bath"
              value={userData.shivHariBath}
              handleInputChange={(event) =>
                handleInputChange("shivHariBath", event.target.value)
              }
            />

            <Tablerow4
              label="Pran Urja"
              value={userData.pranUrja}
              handleInputChange={(event) =>
                handleInputChange("pranUrja", event.target.value)
              }
            />

            <Tablerow4
              label="Calendar"
              value={userData.calendar}
              handleInputChange={(event) =>
                handleInputChange("calendar", event.target.value)
              }
            />

            <Tablerow4
              label="Tree of Life"
              value={userData.treeOfLife}
              handleInputChange={(event) =>
                handleInputChange("treeOfLife", event.target.value)
              }
            />

            <Tablerow4
              label="Miracle Wash"
              value={userData.miracleWash}
              handleInputChange={(event) =>
                handleInputChange("miracleWash", event.target.value)
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

export default NSPpage;
