const EnquiryJob = require("../../models/enqjobModel");
const asyncHandler = require("express-async-handler");
const validateMongoDbId = require("../../utils/validateMongodbId");
const { enqueryJobMail } = require("../../middlewares/enqueryMail");


const createEnquiryJob = asyncHandler(async (req, res) => {
  try {
    const newEnquiry = await EnquiryJob.create(req.body);
    const getProperty = await Property.findById(req.body.propertyid)
    req.body.propertyname=getProperty.title
    const emailsend  =await enqueryJobMail(req, res);
    const message={
      "status":"success",
      "message":"Thank you for your message. It has been sent.",
      "data":newEnquiry
    }
    res.json(message);
  } catch (error) {
    throw new Error(error);
  }
});
const updateEnquiryJob = asyncHandler(async (req, res) => {
  const { id } = req.params;
  validateMongoDbId(id);
  try {
    const updatedEnquiryJob = await EnquiryJob.findByIdAndUpdate(id, req.body, {
      new: true,
    });
    res.json(updatedEnquiryJob);
  } catch (error) {
    throw new Error(error);
  }
});
const deleteEnquiryJob = asyncHandler(async (req, res) => {
  const { id } = req.params;
  validateMongoDbId(id);
  try {
    const deletedEnquiryJob = await EnquiryJob.findByIdAndDelete(id);
    res.json(deletedEnquiryJob);
  } catch (error) {
    throw new Error(error);
  }
});
const getEnquiryJob = asyncHandler(async (req, res) => {
  const { id } = req.params;
  validateMongoDbId(id);
  try {
    const getaEnquiryJob = await EnquiryJob.findById(id);
    res.json(getaEnquiryJob);
  } catch (error) {
    throw new Error(error);
  }
});
const getallEnquiryJob = asyncHandler(async (req, res) => {
  try {
    const getallEnquiryJob = await EnquiryJob.find();
    res.json(getallEnquiryJob);
  } catch (error) {
    throw new Error(error);
  }
});
module.exports = {
  createEnquiryJob,
  updateEnquiryJob,
  deleteEnquiryJob,
  getEnquiryJob,
  getallEnquiryJob,
};
