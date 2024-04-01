// import mongoose from "mongoose";
const mongoose = require("mongoose");

const arihantaSchema = new mongoose.Schema(
  {
    products: {
      type: Array,
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

const Arihanta = mongoose.model("Arihanta", arihantaSchema);

module.exports = Arihanta;
