const express = require("express");
const app = express();
const dotenv = require("dotenv");
const cors = require("cors");
const bodyParser = require("body-parser");

//config
app.use(express.json());
app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));
dotenv.config();

//Router Setup

app.listen(process.env.PORT, () => {
  console.log(`Server is running on port ${process.env.PORT}`);
});
