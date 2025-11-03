const mongoose = require("mongoose"); // Erase if already required

// Declare the Schema of the Mongo model
var enqJobSchema = new mongoose.Schema({   
    name: {
      type: String,
      required: true,
    },
    phone: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
    },
    jobtitle: {
      type: String,
      required: true,
    },
    noticeperiod: {
      type: String,
      required: true,
    },
    currentctc: {
      type: String,
      required: true,
    },
    resume: {
      type: String,
      required: true,
    },
    message: {
      type: String,
      required: true,
    },
    status: {
      type: String,
      default: "Submitted",
      enum: ["Submitted", "Contacted", "In Progress", "Resolved"],
    },
  },
  {
    timestamps: true,
  }
);

//Export the model
module.exports = mongoose.model("Enquiryjob", enqJobSchema);
