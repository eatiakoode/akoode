const Employee = require("../models/employeeModel");
const asyncHandler = require("express-async-handler");
const validateMongoDbId = require("../utils/validateMongodbId");

const createEmployee = asyncHandler(async (req, res) => {
  try {
    const newEmployee = await Employee.create(req.body);
    const message={
      "status":"success",
      "message":"Data Added successfully",
      "data":newEmployee
    }
    res.json(message);
  } catch (error) {
    throw new Error(error);
  }
});
const updateEmployee = asyncHandler(async (req, res) => {
  const { id } = req.params;
  validateMongoDbId(id);
  try {
    const updatedEmployee = await Employee.findByIdAndUpdate(id, req.body, {
      new: true,
    });
    const message = {
      "status": "success",
      "message": "Data updated successfully",
      "data": updatedEmployee
    };
    res.json(message);
  } catch (error) {
    throw new Error(error);
  }
});
const deleteEmployee = asyncHandler(async (req, res) => {
  const { id } = req.params;
  validateMongoDbId(id);
  try {
    const deletedEmployee = await Employee.findByIdAndDelete(id);

    const message={
      "status":"success",
      "message":"Data Deleted successfully",
      "data":deletedEmployee
    }
    res.json(message);
  } catch (error) {
    throw new Error(error);
  }
});
const getEmployee = asyncHandler(async (req, res) => {
  const { id } = req.params;
  validateMongoDbId(id);
  try {
    const getaEmployee = await Employee.findById(id);
    const message={
      "status":"success",
      "message":"Data fetched successfully",
      "data":getaEmployee
    }
    res.json(message);
   //res.json(getaEmployee);
  } catch (error) {
    throw new Error(error);
  }
});
const getallEmployee = asyncHandler(async (req, res) => {
  try {
    const getallEmployee = await Employee.find();
    res.json(getallEmployee);
  } catch (error) {
    throw new Error(error);
  }
});
module.exports = {
  createEmployee,
  updateEmployee,
  deleteEmployee,
  getEmployee,
  getallEmployee,
};
