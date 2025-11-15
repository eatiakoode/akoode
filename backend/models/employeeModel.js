const mongoose = require("mongoose");

// Declare the Schema of the Mongo model
const employeeSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      unique: true,
      index: true, 
      trim: true,
    },
    designation: {
      type: String,
      required: true, 
      trim: true,
    },
    email: {
      type: String,
      trim: true,
      lowercase: true,
    },
    status: {
      type: Boolean,
      default: true,
    },
  },
  {
    timestamps: true,
  }
);

// Export the model
module.exports = mongoose.model("Employee", employeeSchema);
