const Casestudy = require("../../models/casestudyModel");
const asyncHandler = require("express-async-handler");
const validateMongoDbId = require("../../utils/validateMongodbId");

const getCasestudy = asyncHandler(async (req, res) => {
  const { id } = req.params;
  validateMongoDbId(id);
  try {
    const getaCasestudy = await Casestudy.findById(id).lean();
    const message={
      "status":"success",
      "message":"Data deleted sucessfully",
      "data":getaCasestudy
    }
    res.json(message);
   //res.json(getaCasestudy);
  } catch (error) {
    throw new Error(error);
  }
});
const getallCasestudy = asyncHandler(async (req, res) => {
  try {
    let query = {};
    query["status"] = true;
    
    if(req.query.featured){
      query["featured"] = req.query.featured;      
    }
    
    const getallCasestudy = await Casestudy.find(query).lean();
    const message = {
      "status": "success",
      "message": "Data fetched successfully",
      "data": getallCasestudy
    }
    res.json(message);
  } catch (error) {
    throw new Error(error);
  }
});
const getCasestudySlug = asyncHandler(async (req, res) => {
  const { slug } = req.params;
  // validateMongoDbId(id);
  try {
    const getaCasestudy = await Casestudy.findOne({slug:slug}).lean();
    const message={
      "status":"success",
      "message":"Data deleted sucessfully",
      "data":getaCasestudy
    }
    res.json(message);
   //res.json(getaCasestudy);
  } catch (error) {
    throw new Error(error);
  }
});
module.exports = {
  getCasestudy,
  getallCasestudy,
  getCasestudySlug
};
