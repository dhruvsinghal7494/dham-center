"use client";
import Navbar from "@/app/components/Navbar/Navbar";
import React from "react";
import TableRow from "@/app/components/TableRow/TableRow";
import { useState } from "react";
import Tablerow4 from "@/app/components/Tablerow4/Tablerow4";

const MNDivine = () => {
  // State to store user input values
  const [userData, setUserData] = useState({
    // medicines
    befresh: ["", "", ""],
    ntgas: ["", "", ""],
    immunePower: ["", "", ""],
    motapaMukti: ["", "", ""],
    diabZ: ["", "", ""],
    allerex: ["", "", ""],
    livnu: ["", "", ""],
    nilstone: ["", "", ""],
    menstronil: ["", "", ""],
    finedent: ["", "", ""],
    amritRas: ["", "", ""],
    brahmiJeevan: ["", "", ""],
    heightIncrease: ["", "", ""],
    jeevansar: ["", "", ""],
    kafhar: ["", "", ""],
    isotineEyedrop: ["", "", ""],

    // general
    patrika: ["", "", ""],
    dhoopStick: ["", "", ""],
    cgl: ["", "", ""],
    dhoopCone: ["", "", ""],
    hawanKund: ["", "", ""],
    aasan: ["", "", ""],
    dhuniPatraElec: ["", "", ""],
    riyalBig: ["", "", ""],
    riyalSmall: ["", "", ""],
    mala108: ["", "", ""],
    mala27: ["", "", ""],
    gomukhi: ["", "", ""],
    tilak: ["", "", ""],
    dssCover: ["", "", ""],
    gown: ["", "", ""],
    newGown: ["", "", ""],
    aanchmani: ["", "", ""],

    // //murti
    gurujiWooden: ["", "", ""],
    durgaji: ["", "", ""],
    shukraji: ["", "", ""],
    hanumanji: ["", "", ""],
    radhaKrishanji: ["", "", ""],
    ramParivarji: ["", "", ""],
    lakshmiGaneshji: ["", "", ""],
    shivParivarji: ["", "", ""],
    shaniYantra: ["", "", ""],

    // //other
    shampooBig: ["", "", ""],
    shampooSmall: ["", "", ""],
    specialDhuni: ["", "", ""],
    locketNew: ["", "", ""],
    bracelet: ["", "", ""],
    penDrive: ["", "", ""],

    //visheshkripa
    visheshkripaHawanSamagri: ["", "", ""],

    //total amount
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

  // const [userData, setUserData] = useState({
  //   products: ['', '', ''] // initialize as empty array
  // });

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
      const response = await fetch("http://localhost:5000/api/mndivine", {
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
        // //medicines
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

        // //general
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

        // //murti
        gurujiWooden: "",
        durgaji: "",
        shukraji: "",
        hanumanji: "",
        radhaKrishanji: "",
        ramParivarji: "",
        lakshmiGaneshji: "",
        shivParivarji: "",
        shaniYantra: "",

        // //other
        shampooBig: "",
        shampooSmall: "",
        specialDhuni: "",
        locketNew: "",
        bracelet: "",
        penDrive: "",

        visheshkripaHawanSamagri: "",

        // // bslnd
        // poojaHawanSamagri: "",
        // antiDandruff: "",
        // gaisant: "",
        // pachak: "",
        // vathar: "",
        // oodh1000: "",
        // oodh5000: "",
        // maykhanaCover: "",
        // locket40: "",
        // keyring: "",
        // dhamBag: "",
        // carStand: "",
        // photo100: "",
        // photo50: "",
        // photo20: "",
        // photo10: "",
        // diary: "",

        // //bslndMurti (to be confirmed)
        // lakshmiGaneshjiMetal: "",
        // hanumanjiMetalSmall: "",
        // hanumanjiMetalBig: "",
        // durgajiMetal: "",
        // gangajiMetal: "",
        // radhaKrishanjiMetal: "",
        // ganeshjiMetal: "",

        // pardShivling: "",
        // pardBhasam: "",
        // shivlingJal: "",
        // charanPadukaBig: "",
        // charanPadukaSmall: "",
        // radhaKrishanShaktiFrame: "",
        // radhaKrishanShaktiBhasam: "",

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

        // //bslndOther
        // whiteAasan: "",
        // dCure: "",
        // shivHariEat: "",
        // shivHariBath: "",
        // pranUrja: "",
        // calendar: "",
        // treeOfLife: "",

        // //to be confirmed
        // miracleWash: "",

        products: ["", "", ""],
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
            {/* general  */}
            <Tablerow4
              label="Patrika"
              value={userData.patrika}
              handleInputChange={(event, index) =>
                handleInputChange("patrika", event.target.value, index)
              }
            />
            <Tablerow4
              label="Dhoop Stick"
              value={userData.dhoopStick}
              handleInputChange={(event, index) =>
                handleInputChange("dhoopStick", event.target.value, index)
              }
            />
            <Tablerow4
              label="CGL"
              value={userData.cgl}
              handleInputChange={(event, index) =>
                handleInputChange("cgl", event.target.value, index)
              }
            />
            <Tablerow4
              label="Dhoop Cone"
              value={userData.dhoopCone}
              handleInputChange={(event, index) =>
                handleInputChange("dhoopCone", event.target.value, index)
              }
            />
            <Tablerow4
              label="Hawan Kund"
              value={userData.hawanKund}
              handleInputChange={(event, index) =>
                handleInputChange("hawanKund", event.target.value, index)
              }
            />
            <Tablerow4
              label="Aasan"
              value={userData.aasan}
              handleInputChange={(event, index) =>
                handleInputChange("aasan", event.target.value, index)
              }
            />
            <Tablerow4
              label="Dhuni Patra Elec"
              value={userData.dhuniPatraElec}
              handleInputChange={(event, index) =>
                handleInputChange("dhuniPatraElec", event.target.value, index)
              }
            />
            <Tablerow4
              label="Riyal Big"
              value={userData.riyalBig}
              handleInputChange={(event, index) =>
                handleInputChange("riyalBig", event.target.value, index)
              }
            />
            <Tablerow4
              label="Riyal Small"
              value={userData.riyalSmall}
              handleInputChange={(event, index) =>
                handleInputChange("riyalSmall", event.target.value, index)
              }
            />
            <Tablerow4
              label="Mala 108"
              value={userData.mala108}
              handleInputChange={(event, index) =>
                handleInputChange("mala108", event.target.value, index)
              }
            />
            <Tablerow4
              label="Mala 27"
              value={userData.mala27}
              handleInputChange={(event, index) =>
                handleInputChange("mala27", event.target.value, index)
              }
            />
            <Tablerow4
              label="Gomukhi"
              value={userData.gomukhi}
              handleInputChange={(event, index) =>
                handleInputChange("gomukhi", event.target.value, index)
              }
            />
            <Tablerow4
              label="Chandan Tilak"
              value={userData.tilak}
              handleInputChange={(event, index) =>
                handleInputChange("tilak", event.target.value, index)
              }
            />
            <Tablerow4
              label="DSS Cover"
              value={userData.dssCover}
              handleInputChange={(event, index) =>
                handleInputChange("dssCover", event.target.value, index)
              }
            />
            <Tablerow4
              label="Gown"
              value={userData.gown}
              handleInputChange={(event, index) =>
                handleInputChange("gown", event.target.value, index)
              }
            />
            <Tablerow4
              label="New Gown"
              value={userData.newGown}
              handleInputChange={(event, index) =>
                handleInputChange("newGown", event.target.value, index)
              }
            />
            <Tablerow4
              label="Aanchmani"
              value={userData.aanchmani}
              handleInputChange={(event, index) =>
                handleInputChange("aanchmani", event.target.value, index)
              }
            />
            {/* medicines */}
            <Tablerow4
              label="Befresh"
              value={userData.befresh}
              handleInputChange={(event, index) =>
                handleInputChange("befresh", event.target.value, index)
              }
            />
            <Tablerow4
              label="NT Gas"
              value={userData.ntgas}
              handleInputChange={(event, index) =>
                handleInputChange("ntgas", event.target.value, index)
              }
            />
            <Tablerow4
              label="Immune Power"
              value={userData.immunePower}
              handleInputChange={(event, index) =>
                handleInputChange("immunePower", event.target.value, index)
              }
            />
            <Tablerow4
              label="MotapaMukti"
              value={userData.motapaMukti}
              handleInputChange={(event, index) =>
                handleInputChange("motapaMukti", event.target.value, index)
              }
            />
            <Tablerow4
              label="Diab-Z"
              value={userData.diabz}
              handleInputChange={(event, index) =>
                handleInputChange("diabz", event.target.value, index)
              }
            />
            <Tablerow4
              label="Allerex"
              value={userData.allerex}
              handleInputChange={(event, index) =>
                handleInputChange("allerex", event.target.value, index)
              }
            />
            <Tablerow4
              label="Livnu"
              value={userData.livnu}
              handleInputChange={(event, index) =>
                handleInputChange("livnu", event.target.value, index)
              }
            />

            <Tablerow4
              label="Nilstone"
              value={userData.nilstone}
              handleInputChange={(event, index) =>
                handleInputChange("nilstone", event.target.value, index)
              }
            />

            <Tablerow4
              label="Menstronil"
              value={userData.menstronil}
              handleInputChange={(event, index) =>
                handleInputChange("menstronil", event.target.value, index)
              }
            />

            <Tablerow4
              label="Finedent"
              value={userData.finedent}
              handleInputChange={(event, index) =>
                handleInputChange("finedent", event.target.value, index)
              }
            />

            <Tablerow4
              label="Amrit Ras"
              value={userData.amritRas}
              handleInputChange={(event, index) =>
                handleInputChange("amritRas", event.target.value, index)
              }
            />

            <Tablerow4
              label="Brahmi Jeevan"
              value={userData.brahmiJeevan}
              handleInputChange={(event, index) =>
                handleInputChange("brahmiJeevan", event.target.value, index)
              }
            />

            <Tablerow4
              label="Height Increase"
              value={userData.heightIncrease}
              handleInputChange={(event, index) =>
                handleInputChange("heightIncrease", event.target.value, index)
              }
            />

            <Tablerow4
              label="Jeevansar"
              value={userData.jeevansar}
              handleInputChange={(event, index) =>
                handleInputChange("jeevansar", event.target.value, index)
              }
            />

            <Tablerow4
              label="Kafhar"
              value={userData.kafhar}
              handleInputChange={(event, index) =>
                handleInputChange("kafhar", event.target.value, index)
              }
            />

            <Tablerow4
              label="Isotine Eyedrop"
              value={userData.isotineEyedrop}
              handleInputChange={(event, index) =>
                handleInputChange("isotineEyedrop", event.target.value, index)
              }
            />
            {/* amount */}
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

export default MNDivine;
