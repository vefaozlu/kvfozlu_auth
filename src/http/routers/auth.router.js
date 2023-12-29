const router = require("express").Router();
const isLoggedIn = require("../../middleware/isLoggedIn");
AuthController = require("../controllers/auth.controller");

router
  .route("/")
  .get(isLoggedIn, AuthController.loginView)
  .post(AuthController.login);

<<<<<<< HEAD
router.route("/login").get(AuthController.loginView);

=======
>>>>>>> a8b49edcd1930297f63faf499bc747f0bc7e9545
module.exports = router;
