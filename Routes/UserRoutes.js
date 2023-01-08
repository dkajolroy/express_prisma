const { signup } = require("../Controllers/UserControllers");

const Router = require("express").Router();
module.exports = Router;

Router.route("/signup", signup);
