const Blog = require("../../models/blogModel");
const asyncHandler = require("express-async-handler");
const validateMongoDbId = require("../../utils/validateMongodbId");

const getBlog = asyncHandler(async (req, res) => {
  const { id } = req.params;
  validateMongoDbId(id);
  try {
    const getaBlog = await Blog.findById(id).populate("blogcategory").lean();
    const message={
      "status":"success",
      "message":"Data deleted sucessfully",
      "data":getaBlog
    }
    res.json(message);
   //res.json(getaBlog);
  } catch (error) {
    throw new Error(error);
  }
});
const getallBlog = asyncHandler(async (req, res) => {
  try {
    const page = parseInt(req.query.page) || 1;
    const limit = parseInt(req.query.limit) || 6;
    const skip = (page - 1) * limit;

    const totalBlogs = await Blog.countDocuments({ status: true });
    const totalPages = Math.ceil(totalBlogs / limit);

    const getallBlog = await Blog.find({ status: true })
      .populate("blogcategory")
      .lean()
      .sort({ createdAt: -1 })
      .skip(skip)
      .limit(limit);

    res.json({
      blogs: getallBlog,
      pagination: {
        currentPage: page,
        totalPages: totalPages,
        totalBlogs: totalBlogs,
        limit: limit,
        hasNext: page < totalPages,
        hasPrev: page > 1,
      },
    });
  } catch (error) {
    throw new Error(error);
  }
});
const getBlogSlug = asyncHandler(async (req, res) => {
  const { slug } = req.params;
  // validateMongoDbId(id);
  try {
    const getaBlog = await Blog.findOne({slug:slug}).populate("blogcategory").populate("author").lean();
    const message={
      "status":"success",
      "message":"Data deleted sucessfully",
      "data":getaBlog
    }
    res.json(message);
   //res.json(getaBlog);
  } catch (error) {
    throw new Error(error);
  }
});
const getRelatedBlogs = asyncHandler(async (req, res) => {
  const { id } = req.params;
  const limit = Number(req.query.limit) || 6;

  // Get base blog (only need its category)
  const base = await Blog.findById(id).select("blogcategory").lean();
  if (!base) return res.status(404).json({ status: "fail", message: "Blog not found" });

  // Fetch related (same category, exclude current)
  const related = await Blog.find({
    status: true,
    blogcategory: base.blogcategory,
    _id: { $ne: id },
  })
    .sort({ createdAt: -1 })
    .limit(limit)
    .lean();

  res.json({ status: "success", data: related });
});

module.exports = {
  getBlog,
  getallBlog,
  getBlogSlug,
  getRelatedBlogs
};
