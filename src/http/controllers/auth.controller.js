const auth = require("../../auth/authentication");

class AuthController {
  static async loginView(req, res) {
    res.render("login");
  }

  static login(req, res) {
    const password = req.body.password;

    auth.authenticate("local", function (err, user, info) {
      if (err) {
        return res.status(401).json({status: "failed", message: "Incorrect password"});
      }

      if (!user) {
        return res.status(401).json({status: "failed", message: "Incorrect password"});
      }

      req.logIn(user, function (err) {
        if (err) {
          return res.status(401).json({status: "failed", message: "Incorrect password"});
        }

        return res.status(200).json({status: "success", message: "Login success"});
      });
    })(req, res);
  }
}

module.exports = AuthController;
