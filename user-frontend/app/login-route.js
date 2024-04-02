const express = require("express");
const passport = require("passport");
const LocalStrategy = require("passport-local").Strategy;
const session = require("express-session");
const bodyParser = require("body-parser");

const app = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(
  session({
    secret: "your secret here",
    resave: false,
    saveUninitialized: false,
  })
);
app.use(passport.initialize());
app.use(passport.session());

passport.use(
  new LocalStrategy(function (username, password, done) {
    // Here you would check your database for the user
    // If the user is found and the password is correct, call done with the user
    // If the user is not found or the password is incorrect, call done with false
    // For now, we will just allow any user
    return done(null, { username: username });
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

app.get("/login", function (req, res) {
  res.send(
    '<form action="/login" method="post"><div><label>Username:</label><input type="text" name="username"/></div><div><label>Password:</label><input type="password" name="password"/></div><div><input type="submit" value="Log In"/></div></form>'
  );
});

app.post(
  "/login",
  passport.authenticate("local", { failureRedirect: "/login" }),
  function (req, res) {
    res.redirect("/");
  }
);

app.get("/", function (req, res) {
  if (req.user) {
    res.send(`Hello, ${req.user.username}!`);
  } else {
    res.redirect("/login");
  }
});

app.listen(3000);
