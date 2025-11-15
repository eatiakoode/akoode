const express = require("express");
const {
  createEmployee,
  updateEmployee,
  deleteEmployee,
  getEmployee,
  getallEmployee,
} = require("../controller/employeeCtrl.js");
const { authMiddleware, isAdmin } = require("../middlewares/authMiddleware.js");
const router = express.Router();

router.post("/", authMiddleware, isAdmin, createEmployee);
router.put("/:id", authMiddleware, isAdmin, updateEmployee);
router.delete("/:id", authMiddleware, isAdmin, deleteEmployee);
router.get("/:id", getEmployee);
router.get("/", getallEmployee);

module.exports = router;
