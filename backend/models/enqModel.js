const mongoose = require("mongoose"); // Erase if already required

// Declare the Schema of the Mongo model
var enqSchema = new mongoose.Schema({
    name: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
    },
    phone: {
      type: String,
      required: true,
    },
    serviceid: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Service", 
      required: true,
  },
    budget: {
      type: String,
      required: true,
    },
    message: {
      type: String,
      required: true,
    },
    mailsource: {
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
module.exports = mongoose.model("Enquiry", enqSchema);
