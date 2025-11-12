const mongoose = require("mongoose"); // Erase if already required

// Declare the Schema of the Mongo model
var enqSchema = new mongoose.Schema({
    name: {
      type: String,
      required: true,
      trim: true,
      // maxlength: 100,
    },
    // lastName: {
    //   type: String,
    //   required: true,
    //   trim: true,
    //   maxlength: 100,
    // },
    email: {
      type: String,
      // required: true,
    },
    phone: {
      type: String,
      required: true,
    },
    serviceType: {
      type: String,
      required: true,
      trim: true,
      // If you want to lock it down later, uncomment and set enums:
      // enum: ["Web Development", "Mobile App", "UI/UX", "SEO", "Other"],
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
module.exports = mongoose.model("Enquiry", enqSchema);
