const Jsonwebtoken = require("jsonwebtoken");

const generateToken = (userId) => {
  return Jsonwebtoken.sign({ userId }, process.env.JWT_KEY, {
    expiresIn: "50 day",
  });
};
module.exports = generateToken;
