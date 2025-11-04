const mongoose = require("mongoose"); // Erase if already required
const Casestudyprocess = require("../models/casestudyprocessModel");
const Casestudychallenge = require("../models/casestudychallengeModel");
// Declare the Schema of the Mongo model

var casestudySchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
      unique: true,
      index: true,
    },
    slug: {
      type: String,
      required: true,
      unique: true,
      index: true,
    },
    project: {
      type: String,
      // required: true,
      // unique: true,
      index: true,
    },
    abouttitle: {
      type: String,
      required: true,
    },
    aboutdescription: {
    type: String,
    // required: true,
    },
    aboutimage: {
    type: String,
    // required: true,
    },
    description:{
      type: String,
      required: true,
      // unique: true,
      index: true,
    },
    casestudyimage:{
      type: String,
      // required: true,
      // unique: true,
      index: true,
    },
    logoimage:{
      type: String,
      // required: true,
      // unique: true,
      index: true,
    },
    
    challengetitle: {
        type: String,
        required: true,
    },
    challengedescription: {
    type: String,
    // required: true,
    },
    resultstitle: {
        type: String,
        required: true,
    },
    resultsdescription: {
    type: String,
    // required: true,
    },
    deliveredtitle: {
        type: String,
        required: true,
    },
    delivereddescription: {
    type: String,
    // required: true,
    },
    metatitle:{
      type: String,
    },
    metadescription:{
      type: String,
    },
    featured: {
      type: Boolean,
      default: false,
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

casestudySchema.virtual('processstep', {
  ref: 'Casestudyprocess', // Make sure this matches the model name for your images schema
  localField: '_id',
  foreignField: 'casestudyid',
});

casestudySchema.set('toObject', { virtuals: true });
casestudySchema.set('toJSON', { virtuals: true });



casestudySchema.virtual('challengestep', {
  ref: 'Casestudychallenge', // Make sure this matches the model name for your images schema
  localField: '_id',
  foreignField: 'casestudyid',
});

casestudySchema.set('toObject', { virtuals: true });
casestudySchema.set('toJSON', { virtuals: true });
//Export the model
module.exports = mongoose.models.Casestudy || mongoose.model("Casestudy", casestudySchema);
