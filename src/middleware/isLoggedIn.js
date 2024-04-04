function isLoggedIn(req, res, next) {
  if (req.isAuthenticated()) {
    return res.status(200);
  }

  return res.redirect("/login");
}

module.exports = isLoggedIn;