const express = require("express");
const router = express.Router();
const {
    createVideo,
    getAllVideos,
    getVideo,
    updateVideo,
    deleteVideo
} = require("../controller/videoCtrl");

const { authMiddleware, isAdmin } = require("../middlewares/authMiddleware");
const { uploadPhoto } = require("../middlewares/uploadImage");

router.post("/", authMiddleware, isAdmin, uploadPhoto.single("thumbnail"), createVideo);
router.get("/", authMiddleware, isAdmin, getAllVideos);
router.get("/:id", authMiddleware, isAdmin, getVideo);
router.put("/:id", authMiddleware, isAdmin, uploadPhoto.single("thumbnail"), updateVideo);
router.delete("/:id", authMiddleware, isAdmin, deleteVideo);

module.exports = router;
