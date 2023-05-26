const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  inTime: {
    type: String,
    required: true,
  },
  outTime: {
    type: String,
    required: true,
  },
  salary: {
    type: Number,
    required: true,
  },
  workingDays: {
    type: Number,
    required: true,
  },
  batchNo: {
    type: Number,
    required: true,
  },
});

const user = mongoose.model("userEntry", userSchema);

module.exports = user;
