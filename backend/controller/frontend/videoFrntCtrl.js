const Video = require("../../models/videoModel");
const asyncHandler = require("express-async-handler");
const validateMongoDbId = require("../../utils/validateMongodbId");

const getVideo = asyncHandler(async (req, res) => {
  const { id } = req.params;
  validateMongoDbId(id);
  try {
    const getaVideo = await Video.findById(id).lean();
    const message={
      "status":"success",
      "message":"Data deleted sucessfully",
      "data":getaVideo
    }
    res.json(message);
   //res.json(getaVideo);
  } catch (error) {
    throw new Error(error);
  }
});
const getallVideo = asyncHandler(async (req, res) => {
  try {
    const getallVideo = await Video.find({
      $or: [
        { status: true },
        { status: { $exists: false } },
        { status: null }
      ]
    })
    .sort({ createdAt: -1 })
    .lean();
    
    res.json({
        status: "success",
        message: "Data fetched successfully",
        data: getallVideo
    });
  } catch (error) {
    console.error("Error fetching videos:", error);
    throw new Error(error);
  }
});
module.exports = {
  getVideo,
  getallVideo,
};
