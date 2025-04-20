const express = require("express");
const morgan = require("morgan");
const mongoose = require("mongoose");
require("dotenv").config();

const app = express();

app.use(morgan("dev"));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.get("/", (req, res) => {
  res.json({
    message: "I am root route",
  });
});

mongoose
  .connect(process.env.MONGODB_URI, { useNewUrlParser: true })
  .then(() => {
    console.log(`Database connection successful`);
    app.listen(2000, () => {
      console.log(`Server is listening on port: 2000`);
    });
  })
  .catch((error) => {
    console.log(error);
  });
