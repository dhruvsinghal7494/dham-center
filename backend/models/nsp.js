// import mongoose from "mongoose";
const mongoose = require("mongoose");

const nspSchema = new mongoose.Schema(
  {
    // bslnd
    poojaHawanSamagri: [
      { type: Number, default: "0" },
      { type: Number, default: "0" },
      { type: Number, default: "0" },
    ],
    antiDandruff: [
      { type: Number, default: "0" },
      { type: Number, default: "0" },
      { type: Number, default: "0" },
    ],
    gaisant: [
      { type: Number, default: "0" },
      { type: Number, default: "0" },
      { type: Number, default: "0" },
    ],
    pachak: [
      { type: Number, default: "0" },
      { type: Number, default: "0" },
      { type: Number, default: "0" },
    ],
    vathar: [
      { type: Number, default: "0" },
      { type: Number, default: "0" },
      { type: Number, default: "0" },
    ],
    oodh1000: [
      { type: Number, default: "0" },
      { type: Number, default: "0" },
      { type: Number, default: "0" },
    ],
    oodh500: [
      { type: Number, default: "0" },
      { type: Number, default: "0" },
      { type: Number, default: "0" },
    ],
    maykhanaCover: [
      { type: Number, default: "0" },
      { type: Number, default: "0" },
      { type: Number, default: "0" },
    ],
    locket40: [
      { type: Number, default: "0" },
      { type: Number, default: "0" },
      { type: Number, default: "0" },
    ],
    keyring: [
      { type: Number, default: "0" },
      { type: Number, default: "0" },
      { type: Number, default: "0" },
    ],
    dhamBag: [
      { type: Number, default: "0" },
      { type: Number, default: "0" },
      { type: Number, default: "0" },
    ],
    carStand: [
      { type: Number, default: "0" },
      { type: Number, default: "0" },
      { type: Number, default: "0" },
    ],
    photo100: [
      { type: Number, default: "0" },
      { type: Number, default: "0" },
      { type: Number, default: "0" },
    ],
    photo50: [
      { type: Number, default: "0" },
      { type: Number, default: "0" },
      { type: Number, default: "0" },
    ],
    photo20: [
      { type: Number, default: "0" },
      { type: Number, default: "0" },
      { type: Number, default: "0" },
    ],
    photo10: [
      { type: Number, default: "0" },
      { type: Number, default: "0" },
      { type: Number, default: "0" },
    ],
    diary: [
      { type: Number, default: "0" },
      { type: Number, default: "0" },
      { type: Number, default: "0" },
    ],

    //bslndMurti (to be confirmed)
    lakshmiGaneshjiMetal: [
      { type: Number, default: "0" },
      { type: Number, default: "0" },
      { type: Number, default: "0" },
    ],
    hanumanjiMetalSmall: [
      { type: Number, default: "0" },
      { type: Number, default: "0" },
      { type: Number, default: "0" },
    ],
    hanumanjiMetalBig: [
      { type: Number, default: "0" },
      { type: Number, default: "0" },
      { type: Number, default: "0" },
    ],
    durgajiMetal: [
      { type: Number, default: "0" },
      { type: Number, default: "0" },
      { type: Number, default: "0" },
    ],
    gangajiMetal: [
      { type: Number, default: "0" },
      { type: Number, default: "0" },
      { type: Number, default: "0" },
    ],
    radhaKrishanjiMetal: [
      { type: Number, default: "0" },
      { type: Number, default: "0" },
      { type: Number, default: "0" },
    ],
    ganeshjiMetal: [
      { type: Number, default: "0" },
      { type: Number, default: "0" },
      { type: Number, default: "0" },
    ],

    pardShivling: [
      { type: Number, default: "0" },
      { type: Number, default: "0" },
      { type: Number, default: "0" },
    ],
    pardBhasam: [
      { type: Number, default: "0" },
      { type: Number, default: "0" },
      { type: Number, default: "0" },
    ],
    shivlingJal: [
      { type: Number, default: "0" },
      { type: Number, default: "0" },
      { type: Number, default: "0" },
    ],
    charanPadukaBig: [
      { type: Number, default: "0" },
      { type: Number, default: "0" },
      { type: Number, default: "0" },
    ],
    charanPadukaSmall: [
      { type: Number, default: "0" },
      { type: Number, default: "0" },
      { type: Number, default: "0" },
    ],
    radhaKrishanShaktiFrame: [
      { type: Number, default: "0" },
      { type: Number, default: "0" },
      { type: Number, default: "0" },
    ],
    radhaKrishanShaktiBhasam: [
      { type: Number, default: "0" },
      { type: Number, default: "0" },
      { type: Number, default: "0" },
    ],

    //bslndOther
    whiteAasan: [
      { type: Number, default: "0" },
      { type: Number, default: "0" },
      { type: Number, default: "0" },
    ],
    dCure: [
      { type: Number, default: "0" },
      { type: Number, default: "0" },
      { type: Number, default: "0" },
    ],
    shivHariEat: [
      { type: Number, default: "0" },
      { type: Number, default: "0" },
      { type: Number, default: "0" },
    ],
    shivHariBath: [
      { type: Number, default: "0" },
      { type: Number, default: "0" },
      { type: Number, default: "0" },
    ],
    pranUrja: [
      { type: Number, default: "0" },
      { type: Number, default: "0" },
      { type: Number, default: "0" },
    ],
    calendar: [
      { type: Number, default: "0" },
      { type: Number, default: "0" },
      { type: Number, default: "0" },
    ],
    treeOfLife: [
      { type: Number, default: "0" },
      { type: Number, default: "0" },
      { type: Number, default: "0" },
    ],

    //to be confirmed
    miracleWash: [
      { type: Number, default: "0" },
      { type: Number, default: "0" },
      { type: Number, default: "0" },
    ],

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
