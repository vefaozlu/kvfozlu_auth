const express = require("express");
const session = require("express-session");
const RedisStore = require("connect-redis").default
const redis = require("redis");
const passport = require("passport");

const path = require("path");

require("dotenv").config();

const app = express();

app.set("views", path.join(__dirname, "../views"));
app.set("view engine", "ejs");

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, "../../public")));

let redisClient = redis.createClient({
  host: process.env.REDIS_HOST || "localhost",
  port: process.env.REDIS_PORT || 6379,
});

redisClient.connect().catch(console.error)

let redisStore = new RedisStore({
  client: redisClient,
  prefix: "auth:",
})

app.use(
  session({
    secret: process.env.SESSION_SECRET,
    resave: false,
    saveUninitialized: false,
    cookie: {
      maxAge: 10 * 60 * 1000,
      sameSite: "strict",
    },
    store: redisStore,
  })
);

app.use(passport.authenticate("session"));

app.use("/", require("./routers/auth.router.js"));

module.exports = app;
