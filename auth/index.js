const jwt = require("jsonwebtoken");
const SECRET_KEY = "SECRET KEY";
const authenticateJWT = (req, res, next) => {
  const authHeader = req.headers.authorization;
  if (authHeader) {
    const token = authHeader.split(" ")[1];
    jwt.verify(token, SECRET_KEY, (err, user) => {
      if (err) {
        return res.status(403).json({ message: "AUTHORIZATION ERROR" });
      }
      req.user = user;
      next();
    });
  } else {
    return res.status(401).json({ message: "NO TOKEN FOUND" });
  }
};

module.exports = {
  authenticateJWT,
  SECRET_KEY,
};
