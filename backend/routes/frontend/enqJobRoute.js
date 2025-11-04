const express = require("express");
const {
  createEnquiryJob,
  updateEnquiryJob,
  deleteEnquiryJob,
  getEnquiryJob,
  getallEnquiryJob,
} = require("../../controller/frontend/enqJobCtrl.js");
const { authMiddleware, isAdmin } = require("../../middlewares/authMiddleware");
const router = express.Router();

router.post("/", createEnquiryJob);
router.put("/:id", authMiddleware, isAdmin, updateEnquiryJob);
router.delete("/:id", authMiddleware, isAdmin, deleteEnquiryJob);
router.get("/:id", getEnquiryJob);
router.get("/", getallEnquiryJob);

module.exports = router;
