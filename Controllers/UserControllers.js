const Prisma = require("../prisma/index");
const cookieToken = require("../Utils/CookieToken");

//User Signup
exports.signup = async function (req, res) {
  try {
    const { name, email, password, address } = req.body;
    if (!name || !email || !password) {
      throw new Error("Please provide all fields !");
    }
    const user = await Prisma.user.create({
      data: {
        name,
        email,
        password,
        address,
      },
    });
    cookieToken(user, res);
  } catch (error) {
    throw new Error(error);
  }
};
