const express = require("express");
const mongoose = require("mongoose");
require("dotenv").config();

const app = express();
const port = process.env.PORT;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const cors = require("cors");
app.use(cors());

app.use(function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept, Access-Control-Allow-Headers, Access-Control-Request-Method, Access-Control-Request-Headers, Authorization"
  );
  res.header(
    "Access-Control-Allow-Methods",
    "GET, PUT, POST, DELETE, PATCH, OPTIONS"
  );
  next();
});

mongoose
  .connect(process.env.MONGO_URI)
  .then(() => {
    console.log("Connection successful");
    app.listen(port, () => {
      console.log(`app listening on port ${port}`);
    });
  })
  .catch(() => {
    console.log("Connection unsuccessful");
  });

const arihanta = require("../backend/models/arihanta");
const bslndDonation = require("../backend/models/bslndDonation");
const bslndNamaskar = require("../backend/models/bslndNamaskar");
const nsp = require("../backend/models/nsp");
const visheshkripa = require("../backend/models/visheshkripa");
const goshala = require("../backend/models/goshala");

app.post("/api/arihanta", async (req, res) => {
  try {
    const arihantaData = new arihanta(req.body);
    await arihantaData.save();
    res.status(200).json({ message: "Entry saved successfully" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Internal server error" });
  }
});
app.post("/api/bslndNamaskar", async (req, res) => {
  try {
    const bslndNamaskarData = new bslndNamaskar(req.body);
    await bslndNamaskarData.save();
    res.status(200).json({ message: "Entry saved successfully" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Internal server error" });
  }
});
app.post("/api/bslndDonation", async (req, res) => {
  try {
    const bslndDonationData = new bslndDonation(req.body);
    await bslndDonationData.save();
    res.status(200).json({ message: "Entry saved successfully" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Internal server error" });
  }
});
app.post("/api/goshala", async (req, res) => {
  try {
    const goshalaData = new goshala(req.body);
    await goshalaData.save();
    res.status(200).json({ message: "Entry saved successfully" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Internal server error" });
  }
});

app.post("/api/nsp", async (req, res) => {
  try {
    const nspData = new nsp(req.body);
    await nspData.save();
    res.status(200).json({ message: "Entry saved successfully" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Internal server error" });
  }
});

app.post("/api/visheshkripa", async (req, res) => {
  try {
    const visheshkripaData = new visheshkripa(req.body);
    await visheshkripaData.save();
    res.status(200).json({ message: "Entry saved successfully" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Internal server error" });
  }
});

app.get("/", (req, res) => {
  res.send("Hello World!");
});
