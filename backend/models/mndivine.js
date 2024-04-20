const mongoose = require("mongoose");

const mndivineSchema = new mongoose.Schema(
  {
    // //medicines
    befresh: [
      { type: Number, default: "0" },
      { type: Number, default: "0" },
      { type: Number, default: "0" },
    ],
    ntgas: [
      { type: Number, default: "0" },
      { type: Number, default: "0" },
      { type: Number, default: "0" },
    ],
    immunePower: [
      { type: Number, default: "0" },
      { type: Number, default: "0" },
      { type: Number, default: "0" },
    ],
    motapaMukti: [
      { type: Number, default: "0" },
      { type: Number, default: "0" },
      { type: Number, default: "0" },
    ],
    diabZ: [
      { type: Number, default: "0" },
      { type: Number, default: "0" },
      { type: Number, default: "0" },
    ],
    allerex: [
      { type: Number, default: "0" },
      { type: Number, default: "0" },
      { type: Number, default: "0" },
    ],
    livnu: [
      { type: Number, default: "0" },
      { type: Number, default: "0" },
      { type: Number, default: "0" },
    ],
    nilstone: [
      { type: Number, default: "0" },
      { type: Number, default: "0" },
      { type: Number, default: "0" },
    ],
    menstronil: [
      { type: Number, default: "0" },
      { type: Number, default: "0" },
      { type: Number, default: "0" },
    ],
    finedent: [
      { type: Number, default: "0" },
      { type: Number, default: "0" },
      { type: Number, default: "0" },
    ],
    amritRas: [
      { type: Number, default: "0" },
      { type: Number, default: "0" },
      { type: Number, default: "0" },
    ],
    brahmiJeevan: [
      { type: Number, default: "0" },
      { type: Number, default: "0" },
      { type: Number, default: "0" },
    ],
    heightIncrease: [
      { type: Number, default: "0" },
      { type: Number, default: "0" },
      { type: Number, default: "0" },
    ],
    jeevansar: [
      { type: Number, default: "0" },
      { type: Number, default: "0" },
      { type: Number, default: "0" },
    ],
    kafhar: [
      { type: Number, default: "0" },
      { type: Number, default: "0" },
      { type: Number, default: "0" },
    ],
    isotineEyedrop: [
      { type: Number, default: "0" },
      { type: Number, default: "0" },
      { type: Number, default: "0" },
    ],

    // //general
    patrika: [
      { type: Number, default: "0" },
      { type: Number, default: "0" },
      { type: Number, default: "0" },
    ],
    dhoopStick: [
      { type: Number, default: "0" },
      { type: Number, default: "0" },
      { type: Number, default: "0" },
    ],
    cgl: [
      { type: Number, default: "0" },
      { type: Number, default: "0" },
      { type: Number, default: "0" },
    ],
    dhoopCone: [
      { type: Number, default: "0" },
      { type: Number, default: "0" },
      { type: Number, default: "0" },
    ],
    hawanKund: [
      { type: Number, default: "0" },
      { type: Number, default: "0" },
      { type: Number, default: "0" },
    ],
    aasan: [
      { type: Number, default: "0" },
      { type: Number, default: "0" },
      { type: Number, default: "0" },
    ],
    dhuniPatraElec: [
      { type: Number, default: "0" },
      { type: Number, default: "0" },
      { type: Number, default: "0" },
    ],
    riyalBig: [
      { type: Number, default: "0" },
      { type: Number, default: "0" },
      { type: Number, default: "0" },
    ],
    riyalSmall: [
      { type: Number, default: "0" },
      { type: Number, default: "0" },
      { type: Number, default: "0" },
    ],
    mala108: [
      { type: Number, default: "0" },
      { type: Number, default: "0" },
      { type: Number, default: "0" },
    ],
    mala27: [
      { type: Number, default: "0" },
      { type: Number, default: "0" },
      { type: Number, default: "0" },
    ],
    gomukhi: [
      { type: Number, default: "0" },
      { type: Number, default: "0" },
      { type: Number, default: "0" },
    ],
    tilak: [
      { type: Number, default: "0" },
      { type: Number, default: "0" },
      { type: Number, default: "0" },
    ],
    dssCover: [
      { type: Number, default: "0" },
      { type: Number, default: "0" },
      { type: Number, default: "0" },
    ],
    gown: [
      { type: Number, default: "0" },
      { type: Number, default: "0" },
      { type: Number, default: "0" },
    ],
    newGown: [
      { type: Number, default: "0" },
      { type: Number, default: "0" },
      { type: Number, default: "0" },
    ],
    aanchmani: [
      { type: Number, default: "0" },
      { type: Number, default: "0" },
      { type: Number, default: "0" },
    ],

    // //murti
    gurujiWooden: [
      { type: Number, default: "0" },
      { type: Number, default: "0" },
      { type: Number, default: "0" },
    ],
    durgaji: [
      { type: Number, default: "0" },
      { type: Number, default: "0" },
      { type: Number, default: "0" },
    ],
    shukraji: [
      { type: Number, default: "0" },
      { type: Number, default: "0" },
      { type: Number, default: "0" },
    ],
    hanumanji: [
      { type: Number, default: "0" },
      { type: Number, default: "0" },
      { type: Number, default: "0" },
    ],
    radhaKrishanji: [
      { type: Number, default: "0" },
      { type: Number, default: "0" },
      { type: Number, default: "0" },
    ],
    ramParivarji: [
      { type: Number, default: "0" },
      { type: Number, default: "0" },
      { type: Number, default: "0" },
    ],
    lakshmiGaneshji: [
      { type: Number, default: "0" },
      { type: Number, default: "0" },
      { type: Number, default: "0" },
    ],
    shivParivarji: [
      { type: Number, default: "0" },
      { type: Number, default: "0" },
      { type: Number, default: "0" },
    ],
    shaniYantra: [
      { type: Number, default: "0" },
      { type: Number, default: "0" },
      { type: Number, default: "0" },
    ],

    // //other
    shampooBig: [
      { type: Number, default: "0" },
      { type: Number, default: "0" },
      { type: Number, default: "0" },
    ],
    shampooSmall: [
      { type: Number, default: "0" },
      { type: Number, default: "0" },
      { type: Number, default: "0" },
    ],
    specialDhuni: [
      { type: Number, default: "0" },
      { type: Number, default: "0" },
      { type: Number, default: "0" },
    ],
    locketNew: [
      { type: Number, default: "0" },
      { type: Number, default: "0" },
      { type: Number, default: "0" },
    ],
    bracelet: [
      { type: Number, default: "0" },
      { type: Number, default: "0" },
      { type: Number, default: "0" },
    ],
    penDrive: [
      { type: Number, default: "0" },
      { type: Number, default: "0" },
      { type: Number, default: "0" },
    ],

    visheshkripaHawanSamagri: [
      { type: Number, default: "0" },
      { type: Number, default: "0" },
      { type: Number, default: "0" },
    ],

    // total amount
    amount: {
      type: Number,
      require: true,
      min: 0,
    },
  },
  { timestamps: true }
);

const mndivine = mongoose.model("mndivine", mndivineSchema);

module.exports = mndivine;
