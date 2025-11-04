const Services = require("../models/servicesModel.js");
const Servicesprocess = require("../models/servicesprocessModel.js");
const Servicesservice = require("../models/servicesserviceModel.js");
const asyncHandler = require("express-async-handler");
const validateMongoDbId = require("../utils/validateMongodbId.js");
const { uploadPhoto, servicesImgResize, processServices,processServicesGet, servicesServices } = require("../middlewares/uploadImage.js");
const slugify = require("slugify");

const createServices = asyncHandler(async (req, res) => {
  try {
   
    if(req.files){
      const selectedImgslogo = req.files?.filter(file => file.fieldname === "logo");
      if (Array.isArray(selectedImgslogo) && selectedImgslogo.length > 0) {
        const processedImages  =await servicesImgResize(selectedImgslogo);
        

        if (processedImages.length > 0) {
          // ✅ Append logo filename to req.body
          req.body.logoimage = "public/images/services/"+processedImages[0];
        }
      }
      const selectedImgsserviceslogo = req.files?.filter(file => file.fieldname === "serviceslogo");
      if (Array.isArray(selectedImgsserviceslogo) && selectedImgsserviceslogo.length > 0) {
        const processedImages2  =await servicesImgResize(selectedImgsserviceslogo);
        if (processedImages2.length > 0) {
          // ✅ Append logo filename to req.body
          req.body.servicesimage = "public/images/services/"+processedImages2[0];
        }
      }
      const selectedImgsaboutimage = req.files?.filter(file => file.fieldname === "aboutimage");

      if (Array.isArray(selectedImgsaboutimage) && selectedImgsaboutimage.length > 0) {
        const processedImages3  =await servicesImgResize(selectedImgsaboutimage);
        

        if (processedImages3.length > 0) {
          // ✅ Append logo filename to req.body
          req.body.aboutimage = "public/images/services/"+processedImages3[0];
        }
      }
    }
    req.body.slug  = slugify(req.body.slug.toLowerCase());
    const newServices = await Services.create(req.body);
    const processnew = [];
if (req.files && Object.keys(req.files).length > 0) {

Object.entries(req.body).forEach(([key, value]) => {
  const match = key.match(/^process\[(\d+)]\[(\w+)]$/);
  if (match) {
    const [, index, field] = match;
    if (!processnew[index]) processnew[index] = {};
    processnew[index][field] = value;
  }
});


(req.files || []).forEach((file) => {
  const match = file.fieldname.match(/^process\[(\d+)]\[imagestep]$/);
  if (match) {
    const index = parseInt(match[1]);
    if (!processnew[index]) processnew[index] = {};
    processnew[index].processnew = file;
  }
});
}
// Now process each floor plan
for (let i = 0; i < req.body.process?.length; i++) {
  const process = req.body.process[i];
  const processimage = processnew[i];
  if (process) {
    const processdata = {
      title: process.titlestep,
      description: process.descriptionstep,
      servicesid: newServices._id,
    };

   
if(processimage){
  
    const processedImages = await processServices(processimage); // assumes it returns [{url: "..."}]
    if (processedImages?.length > 0) {
      processdata.imageurl = processedImages[0].url;
    }
  }
    
  const newPropertyplan = await Servicesprocess.create(processdata);

    
  }
}

const servicesnew = [];
if (req.files && Object.keys(req.files).length > 0) {

  Object.entries(req.body).forEach(([key, value]) => {
    const match = key.match(/^services\[(\d+)]\[(\w+)]$/);
    if (match) {
      const [, index, field] = match;
      if (!servicesnew[index]) servicesnew[index] = {};
      servicesnew[index][field] = value;
    }
  });
  
  
  (req.files || []).forEach((file) => {
      const match = file.fieldname.match(/^services\[(\d+)]\[imagestep]$/);
    if (match) {
      const index = parseInt(match[1]);
      if (!servicesnew[index]) servicesnew[index] = {};
      servicesnew[index].servicesnew = file;
    }
  });
  }

for(var i=0;i<req.body.services?.length;i++){

     
  var servicesdata={
      "title":req.body.services[i].titlestep,
      "description":req.body.services[i].descriptionstep,
      "servicesid":newServices._id
  }
  const servicesimage = servicesnew[i];
  if(servicesimage){
    // console.log(servicesimage);
    // console.log("servicesimage");
      const servicesImages = await servicesServices(servicesimage); // assumes it returns [{url: "..."}]
      if (servicesImages?.length > 0) {
        servicesdata.imageurl = servicesImages[0].url;
      }
    }

  
  const newPropertyplan = await Servicesservice.create(servicesdata);
}
    const message={
      "status":"success",
      "message":"Data Add sucessfully",
      "data":newServices
    }
    res.json(message);
  } catch (error) {
    throw new Error(error);
  }
});
const updateServices = asyncHandler(async (req, res) => {
  const { id } = req.params;
  validateMongoDbId(id);
  try {
    
    
    if(req.files){
      const selectedImgslogo = req.files?.filter(file => file.fieldname === "logo");
      if (Array.isArray(selectedImgslogo) && selectedImgslogo.length > 0) {
        const processedImages  =await servicesImgResize(selectedImgslogo);
        

        if (processedImages.length > 0) {
          // ✅ Append logo filename to req.body
          req.body.logoimage = "public/images/services/"+processedImages[0];
        }
      }
      const selectedImgsserviceslogo = req.files?.filter(file => file.fieldname === "serviceslogo");
      if (Array.isArray(selectedImgsserviceslogo) && selectedImgsserviceslogo.length > 0) {
        const processedImages  =await servicesImgResize(selectedImgsserviceslogo);
        if (processedImages.length > 0) {
          
          // ✅ Append logo filename to req.body
          req.body.servicesimage = "public/images/services/"+processedImages[0];
        }
      }

      const selectedImgsaboutimage = req.files?.filter(file => file.fieldname === "aboutimage");

      if (Array.isArray(selectedImgsaboutimage) && selectedImgsaboutimage.length > 0) {
        const processedImages3  =await servicesImgResize(selectedImgsaboutimage);
        

        if (processedImages3.length > 0) {
          // ✅ Append logo filename to req.body
          req.body.aboutimage = "public/images/services/"+processedImages3[0];
        }
      }
    }
    req.body.slug  = slugify(req.body.slug.toLowerCase());
    const updatedServices = await Services.findByIdAndUpdate(id, req.body, {
      new: true,
    });

    const processnew = [];
if (req.files && Object.keys(req.files).length > 0) {

Object.entries(req.body).forEach(([key, value]) => {
  const match = key.match(/^process\[(\d+)]\[(\w+)]$/);
  if (match) {
    const [, index, field] = match;
    if (!processnew[index]) processnew[index] = {};
    processnew[index][field] = value;
  }
});


(req.files || []).forEach((file) => {
  const match = file.fieldname.match(/^process\[(\d+)]\[imagestep]$/);
  if (match) {
    const index = parseInt(match[1]);
    if (!processnew[index]) processnew[index] = {};
    processnew[index].processnew = file;
  }
});
}
// Now process each floor plan
for (let i = 0; i < req.body.process?.length; i++) {
  const process = req.body.process[i];
  const processimage = processnew[i];
  if (process) {
    const processdata = {
      title: process.titlestep,
      description: process.descriptionstep,
      servicesid: updatedServices._id,
    };

   
if(processimage){
  console.log(processimage);
  console.log("processimage");
    const processedImages = await processServices(processimage); // assumes it returns [{url: "..."}]
    if (processedImages?.length > 0) {
      processdata.imageurl = processedImages[0].url;
    }
  }
    
  const newPropertyplan = await Servicesprocess.create(processdata);

    
  }
}


// update get process

const processnewget = [];
if (req.files && Object.keys(req.files).length > 0) {

Object.entries(req.body).forEach(([key, value]) => {
  const match = key.match(/^processget\[(\d+)]\[(\w+)]$/);
  if (match) {
    const [, index, field] = match;
    if (!processnewget[index]) processnewget[index] = {};
    processnewget[index][field] = value;
  }
});


(req.files || []).forEach((file) => {
  const match = file.fieldname.match(/^processget\[(\d+)]\[imagestep]$/);
  if (match) {
    const index = parseInt(match[1]);
    if (!processnewget[index]) processnewget[index] = {};
    processnewget[index].processnewget = file;
  }
});
}
// Now process each floor plan
for (let i = 0; i < req.body.processget?.length; i++) {
  const process = req.body.processget[i];
  const processimage = processnewget[i];
  console.log(processimage);
    console.log("processget processedImages");
  if (process) {
    const processdata = {
      title: process.titlestep,
      description: process.descriptionstep
    };

   
if(processimage){
    const processedImages = await processServicesGet(processimage); // assumes it returns [{url: "..."}]
    console.log(processedImages);
    console.log("processedImagesprocessedImages processedImages");
    if (processedImages?.length > 0) {
      processdata.imageurl = processedImages[0].url;
    }
  }
  const updatedPropertyplan = await Servicesprocess.findByIdAndUpdate(process.processid, processdata, {
    new: true,
  });
  // const newPropertyplan = await Servicesprocess.create(processdata);

    
  }
}
// end update get process


for(var i=0;i<req.body.services?.length;i++){

     
  var servicesdata={
      "title":req.body.services[i].titlestep,
      "description":req.body.services[i].descriptionstep,
      "servicesid":updatedServices._id
  }

  
  const newPropertyplan = await Servicesservice.create(servicesdata);
}

for(var i=0;i<req.body.servicesget?.length;i++){

     
  var servicesdata={
      "title":req.body.servicesget[i].titlestep,
      "description":req.body.servicesget[i].descriptionstep,
      "servicesid":updatedServices._id
  }
  const updatedPropertyplan = await Servicesservice.findByIdAndUpdate(req.body.servicesget[i].serviceid, servicesdata, {
    new: true,
  });
}
    
    const message={
      "status":"success",
      "message":"Data updated sucessfully",
      "data":updatedServices
    }
    res.json(message);
    // res.json(updatedServices);
  } catch (error) {
    throw new Error(error);
  }
});
const deleteServices = asyncHandler(async (req, res) => {
  const { id } = req.params;
  validateMongoDbId(id);
  try {
    const deletedServices = await Services.findByIdAndDelete(id);

    const message={
      "status":"success",
      "message":"Data deleted sucessfully",
      "data":deletedServices
    }
    res.json(message);
  } catch (error) {
    throw new Error(error);
  }
});
const getServices = asyncHandler(async (req, res) => {
  const { id } = req.params;
  validateMongoDbId(id);
  try {
    const getaServices = await Services.findById(id).populate('processstep').populate("servicestep");
    const message={
      "status":"success",
      "message":"Data deleted sucessfully",
      "data":getaServices
    }
    res.json(message);
   //res.json(getaServices);
  } catch (error) {
    throw new Error(error);
  }
});
const getallServices = asyncHandler(async (req, res) => {
  try {
    let limit=100;
    let skip=1;
    

    if (req.query.limit ) {
      limit=req.query.limit;
      skip=req.query.skip;     
  }
    // const getallServices = await Services.find();

    const [servicesList, totalCount] = await Promise.all([
      Services.find()
        // .populate("cityid")
        // .populate("categoryid")
        .sort({ _id: -1})
        .skip((skip - 1) * limit)
        .limit(limit)
        .lean(),
    
      Services.countDocuments() // total matching without skip/limit
    ]);
    // propertyList.sort((a, b) => new Date(b.updated_at) - new Date(a.updated_at));
    // console.log(propertyList)
    res.status(200).json({
      items: servicesList,
      totalCount: totalCount,
      currentPage: skip,
      totalPages: Math.ceil(totalCount / limit)
    });
    
  } catch (error) {
    throw new Error(error);
  }
});
module.exports = {
  createServices,
  updateServices,
  deleteServices,
  getServices,
  getallServices,
};
