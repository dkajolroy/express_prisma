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
      },
    });
    cookieToken(user, res);
  } catch (error) {
    throw new Error(error);
  }
};

//User Login
exports.login = async (req, res, next) => {
  try {
    const { email, password } = req.body;
    const user = await Prisma.user.findUnique({
      where: { email },
    });
    if (!user) {
      throw new Error("User not found !");
    }
    if (user.password !== password) {
      throw new Error("Invalid password  ");
    }
    cookieToken(user, res);
  } catch (error) {
    throw new Error(error);
  }
};
