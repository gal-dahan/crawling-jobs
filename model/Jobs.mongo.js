const mongoose = require("mongoose");

const jobSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  link: {
    type: String,
    required: true,
  },
  location: {
    type: String,
    required: true,
  },
  _id: {
    type: String,
    required: true,
  },
  companyName: {
    type: String,
    required: true,
  },
},  { timestamps: true }
);
module.exports = mongoose.model("Jobs", jobSchema);
