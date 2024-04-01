// import mongoose from "mongoose";
const mongoose = require("mongoose");

const bslndNamaskarSchema = new mongoose.Schema(
  {
    // name: {
    //   type: String,
    //   required: true,
    // },
    // address: {
    //   type: String,
    //   required: true,
    // },
    // phone: {
    //   type: String,
    //   required: true,
    // },
    type: {
      type: String,
      required: true,
    },
    amount: {
      type: Number,
      required: true,
      min: 0,
    },
  },
  { timestamps: true }
);

// export const Arihanta =
//   mongoose.models.Arihanta || mongoose.model("Arihanta", arihantaSchema);

const bslndNamaskar = mongoose.model("bslndNamaskar", bslndNamaskarSchema);

module.exports = bslndNamaskar;
