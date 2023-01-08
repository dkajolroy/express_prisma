const express = require("express");
const app = express();
const dotenv = require("dotenv");
const cors = require("cors");

//config
app.use(express.json());
app.use(cors());
app.use(express.urlencoded());
dotenv.config();

//Router Setup

app.listen(process.env.PORT, () => {
  console.log(`Server is running on port ${process.env.PORT}`);
});
