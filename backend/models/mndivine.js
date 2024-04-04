const mongoose = require("mongoose");

const mndivineSchema = new mongoose.Schema(
  {
    // //medicines
    befresh: {
      type: Array,
      default: ["0", "0", "0"],
    },
    ntgas: {
      type: Array,
      default: ["0", "0", "0"],
    },
    immunePower: {
      type: Array,
      default: ["0", "0", "0"],
    },
    motapaMukti: {
      type: Array,
      default: ["0", "0", "0"],
    },
    diabZ: {
      type: Array,
      default: ["0", "0", "0"],
    },
    allerex: {
      type: Array,
      default: ["0", "0", "0"],
    },
    livnu: {
      type: Array,
      default: ["0", "0", "0"],
    },
    nilstone: {
      type: Array,
      default: ["0", "0", "0"],
    },
    menstronil: {
      type: Array,
      default: ["0", "0", "0"],
    },
    finedent: {
      type: Array,
      default: ["0", "0", "0"],
    },
    amritRas: {
      type: Array,
      default: ["0", "0", "0"],
    },
    brahmiJeevan: {
      type: Array,
      default: ["0", "0", "0"],
    },
    heightIncrease: {
      type: Array,
      default: ["0", "0", "0"],
    },
    jeevansar: {
      type: Array,
      default: ["0", "0", "0"],
    },
    kafhar: {
      type: Array,
      default: ["0", "0", "0"],
    },
    isotineEyedrop: {
      type: Array,
      default: ["0", "0", "0"],
    },

    // //general
    patrika: {
      type: Array,
      default: ["0", "0", "0"],
    },
    dhoopStick: {
      type: Array,
      default: ["0", "0", "0"],
    },
    cgl: {
      type: Array,
      default: ["0", "0", "0"],
    },
    dhoopCone: {
      type: Array,
      default: ["0", "0", "0"],
    },
    hawanKund: {
      type: Array,
      default: ["0", "0", "0"],
    },
    aasan: {
      type: Array,
      default: ["0", "0", "0"],
    },
    dhuniPatraElec: {
      type: Array,
      default: ["0", "0", "0"],
    },
    riyalBig: {
      type: Array,
      default: ["0", "0", "0"],
    },
    riyalSmall: {
      type: Array,
      default: ["0", "0", "0"],
    },
    mala108: {
      type: Array,
      default: ["0", "0", "0"],
    },
    mala27: {
      type: Array,
      default: ["0", "0", "0"],
    },
    gomukhi: {
      type: Array,
      default: ["0", "0", "0"],
    },
    tilak: {
      type: Array,
      default: ["0", "0", "0"],
    },
    dssCover: {
      type: Array,
      default: ["0", "0", "0"],
    },
    gown: {
      type: Array,
      default: ["0", "0", "0"],
    },
    newGown: {
      type: Array,
      default: ["0", "0", "0"],
    },
    aanchmani: {
      type: Array,
      default: ["0", "0", "0"],
    },

    // //murti
    gurujiWooden: {
      type: Array,
      default: ["0", "0", "0"],
    },
    durgaji: {
      type: Array,
      default: ["0", "0", "0"],
    },
    shukraji: {
      type: Array,
      default: ["0", "0", "0"],
    },
    hanumanji: {
      type: Array,
      default: ["0", "0", "0"],
    },
    radhaKrishanji: {
      type: Array,
      default: ["0", "0", "0"],
    },
    ramParivarji: {
      type: Array,
      default: ["0", "0", "0"],
    },
    lakshmiGaneshji: {
      type: Array,
      default: ["0", "0", "0"],
    },
    shivParivarji: {
      type: Array,
      default: ["0", "0", "0"],
    },
    shaniYantra: {
      type: Array,
      default: ["0", "0", "0"],
    },

    // //other
    shampooBig: {
      type: Array,
      default: ["0", "0", "0"],
    },
    shampooSmall: {
      type: Array,
      default: ["0", "0", "0"],
    },
    specialDhuni: {
      type: Array,
      default: ["0", "0", "0"],
    },
    locketNew: {
      type: Array,
      default: ["0", "0", "0"],
    },
    bracelet: {
      type: Array,
      default: ["0", "0", "0"],
    },
    penDrive: {
      type: Array,
      default: ["0", "0", "0"],
    },

    visheshkripaHawanSamagri: {
      type: Array,
      default: ["0", "0", "0"],
    },

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
