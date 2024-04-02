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

const mndivine = require("./models/mndivine");
const bslndDonation = require("../backend/models/bslndDonation");
const bslndNamaskar = require("../backend/models/bslndNamaskar");
const nsp = require("../backend/models/nsp");
const visheshkripa = require("../backend/models/visheshkripa");
const goshala = require("../backend/models/goshala");

app.post("/api/mndivine", async (req, res) => {
  try {
    const mndivineData = new mndivine(req.body);
    await mndivineData.save();
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

// const express = require('express');
const passport = require("passport");
const LocalStrategy = require("passport-local").Strategy;
const session = require("express-session");
const bodyParser = require("body-parser");
const crypto = require("crypto");

// const app = express();

app.use(bodyParser.urlencoded({ extended: false }));

const sessionSecret =
  process.env.SESSION_SECRET || crypto.randomBytes(64).toString("hex");

app.use(
  session({
    secret: sessionSecret,
    resave: false,
    saveUninitialized: false,
  })
);

app.use(passport.initialize());
app.use(passport.session());

const User = require("./models/user");

passport.use(
  new LocalStrategy(async (username, password, done) => {
    try {
      const user = await User.findOne({ username });

      if (!user) {
        return done(null, false);
      }

      if (!user.validatePassword(password)) {
        return done(null, false);
      }

      return done(null, user);
    } catch (error) {
      return done(error);
    }
  })
);

passport.serializeUser(function (user, done) {
  done(null, user.username);
});

passport.deserializeUser(function (username, done) {
  // Here you would fetch the user from the database using the username
  // For now, we will just return an object with the username
  done(null, { username: username });
});

app.get("/api/login", function (req, res) {
  // res.send(
  //   '<form action="/login" method="post"><div><label>Username:</label><input type="text" name="username"/></div><div><label>Password:</label><input type="password" name="password"/></div><div><input type="submit" value="Log In"/></div></form>'
  // );
});

app.post(
  "/api/login",
  passport.authenticate("local", { failureRedirect: "/login" }),
  function (req, res) {
    res.redirect("/");
  }
);

// app.listen(port);
