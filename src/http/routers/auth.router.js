const router = require("express").Router();
const isLoggedIn = require("../../middleware/isLoggedIn");
AuthController = require("../controllers/auth.controller");

router
  .route("/")
  .get(isLoggedIn, AuthController.loginView)
  .post(AuthController.login);

module.exports = router;
