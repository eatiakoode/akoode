const express = require("express");

const {
  getBlog,
  getallBlog,
  getBlogSlug,
  getRelatedBlogs
} = require("../../controller/frontend/blogCtrl");
const router = express.Router();
router.get("/byid/:id", getBlog);
router.get("/list", getallBlog);
router.get("/slug/:slug", getBlogSlug);
router.get("/related/:id", getRelatedBlogs);

module.exports = router;
