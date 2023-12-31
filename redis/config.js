const createClient = require("redis").createClient;
require("dotenv").config();

const client = createClient({
  url: process.env.REDIS_URL,
});

client.on("error", (err) => console.log("Redis Client Error", err));

module.exports = client;
