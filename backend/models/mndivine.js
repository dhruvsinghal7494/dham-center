const mongoose = require("mongoose");

const mndivineSchema = new mongoose.Schema(
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

const mndivine = mongoose.model("mndivine", mndivineSchema);

module.exports = mndivine;
