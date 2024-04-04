const app = require("./http/server");
const client = require("../redis/config");

const main = async () => {
  //  await client.connect();

  app.listen(1234, () => {
    console.log("Listening on port 1234");
  });
};

main();
