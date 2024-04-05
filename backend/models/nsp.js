// import mongoose from "mongoose";
const mongoose = require("mongoose");

const nspSchema = new mongoose.Schema(
  {
    // bslnd
    poojaHawanSamagri: { type: Array, default: ["0", "0", "0"] },
    antiDandruff: { type: Array, default: ["0", "0", "0"] },
    gaisant: { type: Array, default: ["0", "0", "0"] },
    pachak: { type: Array, default: ["0", "0", "0"] },
    vathar: { type: Array, default: ["0", "0", "0"] },
    oodh1000: { type: Array, default: ["0", "0", "0"] },
    oodh500: { type: Array, default: ["0", "0", "0"] },
    maykhanaCover: { type: Array, default: ["0", "0", "0"] },
    locket40: { type: Array, default: ["0", "0", "0"] },
    keyring: { type: Array, default: ["0", "0", "0"] },
    dhamBag: { type: Array, default: ["0", "0", "0"] },
    carStand: { type: Array, default: ["0", "0", "0"] },
    photo100: { type: Array, default: ["0", "0", "0"] },
    photo50: { type: Array, default: ["0", "0", "0"] },
    photo20: { type: Array, default: ["0", "0", "0"] },
    photo10: { type: Array, default: ["0", "0", "0"] },
    diary: { type: Array, default: ["0", "0", "0"] },

    //bslndMurti (to be confirmed)
    lakshmiGaneshjiMetal: { type: Array, default: ["0", "0", "0"] },
    hanumanjiMetalSmall: { type: Array, default: ["0", "0", "0"] },
    hanumanjiMetalBig: { type: Array, default: ["0", "0", "0"] },
    durgajiMetal: { type: Array, default: ["0", "0", "0"] },
    gangajiMetal: { type: Array, default: ["0", "0", "0"] },
    radhaKrishanjiMetal: { type: Array, default: ["0", "0", "0"] },
    ganeshjiMetal: { type: Array, default: ["0", "0", "0"] },

    pardShivling: { type: Array, default: ["0", "0", "0"] },
    pardBhasam: { type: Array, default: ["0", "0", "0"] },
    shivlingJal: { type: Array, default: ["0", "0", "0"] },
    charanPadukaBig: { type: Array, default: ["0", "0", "0"] },
    charanPadukaSmall: { type: Array, default: ["0", "0", "0"] },
    radhaKrishanShaktiFrame: { type: Array, default: ["0", "0", "0"] },
    radhaKrishanShaktiBhasam: { type: Array, default: ["0", "0", "0"] },

    //bslndOther
    whiteAasan: { type: Array, default: ["0", "0", "0"] },
    dCure: { type: Array, default: ["0", "0", "0"] },
    shivHariEat: { type: Array, default: ["0", "0", "0"] },
    shivHariBath: { type: Array, default: ["0", "0", "0"] },
    pranUrja: { type: Array, default: ["0", "0", "0"] },
    calendar: { type: Array, default: ["0", "0", "0"] },
    treeOfLife: { type: Array, default: ["0", "0", "0"] },

    //to be confirmed
    miracleWash: { type: Array, default: ["0", "0", "0"] },

    amount: {
      type: Number,
      required: true,
      min: 0,
    },
  },
  { timestamps: true }
);

const NSP = mongoose.model("NSP", nspSchema);

module.exports = NSP;
