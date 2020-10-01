const jwt = require("jsonwebtoken");
const config = require("config");

module.exports = function (req, res, next) {
  //get token from header
  const token = req.header("x-auth-token");

  //if no token
  if (!token) {
    return res.status(401).json({ msg: "No token, unauthorized" });
  }

  //verify token
  try {
    const decode = jwt.verify(token, config.get("jwtSecret"));

    req.user = decode.user;
    next();
  } catch (error) {
    res.status(401).json({ msg: "invalid token" });
  }
};
