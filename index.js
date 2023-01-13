const express = require("express");
const app = express();
const dotenv = require("dotenv");
const cors = require("cors");
const bodyParser = require("body-parser");
const cookieParser = require("cookie-parser");
const { readdirSync } = require("fs");

//config
app.use(express.json());
app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));
dotenv.config();
app.use(cookieParser());

//Router Setup
readdirSync("./Routes").map((x) => app.use("/", require("./Routes/" + x)));

app.use(function (err, req, res, next) {
  if (err) {
    res.status(500).send({ error: "Something went wrong !" });
  }
});

app.listen(process.env.PORT, () => {
  console.log(`Server is running on port ${process.env.PORT}`);
});
