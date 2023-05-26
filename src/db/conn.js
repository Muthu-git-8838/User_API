const mongoose = require("mongoose");
require("dotenv").config();
mongoose
  .connect(process.env.MONGO_URI)
  .then(() => {
    console.log("Data base connected, Server is Live now! ");
  })
  .catch(() => {
    console.log("Failed to connect,Please check the error");
    // console.log(e);
  });
