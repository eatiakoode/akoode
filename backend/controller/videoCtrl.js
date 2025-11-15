const Video = require('../models/videoModel');
const asyncHandler = require("express-async-handler");
const validateMongoDbId = require("../utils/validateMongodbId");
const { videoImgResize } = require("../middlewares/uploadImage");

const createVideo = asyncHandler(async (req, res) => {
    try {
        if(req.file){
            const processedImages = await videoImgResize(req);
            if (processedImages.length > 0) {
                req.body.thumbnail = "public/images/video/"+processedImages[0];
            }
        }
        const video = await Video.create(req.body);
        const message = {
            status: 'success',
            message: 'Video created successfully',
            data: video
        };
        res.json(message);
    } catch (error) {
        throw new Error(error);
    }
});

const getAllVideos = asyncHandler(async (req, res) => {
  try {
    const videos = await Video.find().sort({ createdAt: -1 });
    res.json(videos);
  } catch (error) {
    throw new Error(error);
  }
});

const getVideo = asyncHandler(async (req, res) => {
  const { id } = req.params;
  validateMongoDbId(id);
  try {
    const video = await Video.findById(id);
    const message = {
      status: 'success',
      message: 'Video retrieved successfully',
      data: video
    };
    res.json(message);
  } catch (error) {
    throw new Error(error);
  }
});

const updateVideo = asyncHandler(async (req, res) => {
  const { id } = req.params;
  validateMongoDbId(id);
  try {
    if(req.file){
      const processedImages = await videoImgResize(req);
      if (processedImages.length > 0) {
        req.body.thumbnail = "public/images/video/"+processedImages[0];
      }
    }
    const video = await Video.findByIdAndUpdate(id, req.body, {
      new: true,
    });
    const message = {
      status: 'success',
      message: 'Video updated successfully',
      data: video
    };
    res.json(message);
  } catch (error) {
    throw new Error(error);
  }
});

const deleteVideo = asyncHandler(async (req, res) => {
  const { id } = req.params;
  validateMongoDbId(id);
  try {
    const video = await Video.findByIdAndDelete(id);
    const message = {
      status: 'success',
      message: "Video deleted successfully",
      data: video
    };
    res.json(message);
  } catch (error) {
    throw new Error(error);
  }
});



module.exports = {
  createVideo,
  getAllVideos,
  getVideo,
  updateVideo,
  deleteVideo
};