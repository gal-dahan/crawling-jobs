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
  idJob: {
    type: String,
    required: true,
  },
  companyName: {
    type: String,
    required: true,
  },
});
module.exports = mongoose.model("Jobs", jobSchema);
