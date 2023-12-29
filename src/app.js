const app = require("./http/server");
const client = require("../redis/config");

const main = async () => {
  await client.connect();

  app.listen(4000, () => {
    console.log("Listening on port 4000");
  });
};

main();
