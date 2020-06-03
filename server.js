const express = require("express");
const path = require("path");
const colors = require("colors");
const morgon = require("morgan");
const dotenv = require("dotenv");
const transaction = require("./routers/transaction");

const app = express();

dotenv.config({ path: "./config/config.env" });
require("./db/db");
app.use(express.json());

//cors

app.use(function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  next();
});

app.use(transaction);

if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
  app.get("*", (req, res) =>
    res.sendFile(path.resolve(__dirname, "client", "build", "index.html"))
  );
}

port = process.env.PORT || 5000;

app.listen(port, () =>
  console.log(
    `server started at ${process.env.NODE_ENV} on port ${port}`.yellow.bold
  )
);