const { signup, login } = require("../Controllers/UserControllers");

const Router = require("express").Router();
module.exports = Router;

Router.route("/signup").post(signup);
Router.route("/login").post(login);
