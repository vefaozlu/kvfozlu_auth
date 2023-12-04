function isLoggedIn(req, res, next) {
  if (req.isAuthenticated()) {
    return res.status(200).json({ status: "success", message: "You are logged in" });
  }

  return next();
}

module.exports = isLoggedIn;