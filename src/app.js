const app = require("./http/server");

function main() {
  app.listen(4000, () => {
    console.log("Listening on port 4000");
  });
}

main();
