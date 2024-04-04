const app = require("./http/server");
const client = require("../redis/config");

const main = async () => {
  //  await client.connect();

  app.listen(8000, () => {
    console.log("Listening on port 8000");
  });
};

main();
