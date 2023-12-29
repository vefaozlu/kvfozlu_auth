const router = require("express").Router();
const isLoggedIn = require("../../middleware/isLoggedIn");
AuthController = require("../controllers/auth.controller");

router
  .route("/")
  .get(isLoggedIn, AuthController.loginView)
  .post(AuthController.login);

router.route("/login").get(AuthController.loginView);

module.exports = router;
