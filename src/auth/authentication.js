const auth = require("passport");
const LocalStrategy = require("passport-local");

auth.use(
  new LocalStrategy(async function verify(email, password, cb) {
    const secret = process.env.AUTH_SECRET;

    if (password !== "123") {
      return cb(null, false);
    }

    return cb(null, { id: 1, username: "admin" });
  })
);

auth.serializeUser(function (user, cb) {
  process.nextTick(function () {
    cb(null, { id: user.id, username: user.username });
  });
});

auth.deserializeUser(function (user, cb) {
  process.nextTick(function () {
    return cb(null, user);
  });
});

module.exports = auth;