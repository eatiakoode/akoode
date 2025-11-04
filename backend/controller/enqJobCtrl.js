const EnquiryJob = require("../models/enqjobModel.js");
const asyncHandler = require("express-async-handler");
const validateMongoDbId = require("../utils/validateMongodbId.js");
const { enqueryJobMail } = require("../middlewares/enqueryMail.js");


const createEnquiryJob = asyncHandler(async (req, res) => {
  try {
    const newEnquiry = await EnquiryJob.create(req.body);
    // const emailsend  =await enqueryJobMail(req, res);
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
    // res.json(deletedEnquiryJob);
    const message={
      "status":"success",
      "message":"Data deleted sucessfully",
      "data":deletedEnquiryJob
    }
    res.json(message);
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
    // const getallEnquiryJob = await EnquiryJob.find().populate("propertyid").lean();
    // res.json(getallEnquiryJob);
    let limit=100;
        let skip=1;
        
    
        if (req.query.limit ) {
          limit=req.query.limit;
          skip=req.query.skip;     
        }
        
        const [EnquiryList, totalCount] = await Promise.all([
                  EnquiryJob.find()
                    .populate("propertyid")
                    .sort({ _id: -1})
                    .skip((skip - 1) * limit)
                    .limit(limit)
                    .lean(),
                
                  EnquiryJob.countDocuments() // total matching without skip/limit
                ]);
                res.status(200).json({
              items: EnquiryList,
              totalCount: totalCount,
              currentPage: skip,
              totalPages: Math.ceil(totalCount / limit)
            });
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
