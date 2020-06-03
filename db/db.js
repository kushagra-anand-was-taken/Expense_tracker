const mongoose = require("mongoose");
// const dotenv = require("dotenv");
// dotenv.config({ path: "./config/config.env" });

mongoose.connect(process.env.MONGODB_URL, {
  useNewUrlParser: true,
  useCreateIndex: true,
  useFindAndModify: false,
  useUnifiedTopology: true,
});
