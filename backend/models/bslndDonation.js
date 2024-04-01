// import mongoose from "mongoose";
const mongoose = require("mongoose");

const bslndDonationSchema = new mongoose.Schema(
  {
    // center_name: {
    //   type: String,
    //   required: true,
    //   unique: true,
    //   min: 3,
    //   max: 20,
    // },
    name: {
      type: String,
      required: true,
    },
    phone: {
      type: String,
      required: true,
    },
    address: {
      type: String,
      required: true,
    },
    purpose: {
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

const bslndDonation = mongoose.model("bslndDonation", bslndDonationSchema);

module.exports = bslndDonation;
