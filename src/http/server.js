const express = require("express");
const session = require("express-session");
const RedisStore = require("connect-redis").default;
const passport = require("passport");
const client = require("../../redis/config");
const path = require("path");

require("dotenv").config();

const app = express();

app.set("views", path.join(__dirname, "../views"));
app.set("view engine", "ejs");

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, "../../public")));

app.use(
  session({
    secret: process.env.SESSION_SECRET,
    resave: false,
    saveUninitialized: false,
    cookie: {
      maxAge: 10 * 60 * 1000,
      sameSite: "strict",
    },
    store: new RedisStore({ client: client }),
  })
);

app.use(passport.authenticate("session"));

app.use("/", require("./routers/auth.router.js"));

app.get("/test", (req, res) => {
  console.log("Request recieved");
  return res.status(503).send("AAATest");
});

module.exports = app;
