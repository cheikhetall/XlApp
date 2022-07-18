const multer=require('multer')
const path=require('path')
// const storage=multer.diskStorage({
//   destination:(req,file,cb)=>{
//     cb(null,'../images')
//   },
//   filename:(req,file,cb)=>{
//     cb(null,file.originalname)
//   }
// })
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, 'images')
  },
  filename: function (req, file, cb) {
    const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9)
    cb(null, file.fieldname + '-' + file.originalname +'-' +  uniqueSuffix)
  }
})
const upload = multer({ storage: storage })
module.exports = app => {
    const tutorials = require("../controllers/cloth.controller");
    var router = require("express").Router();

   
    // Create a new Tutorial
    router.post("/",upload.single("file"),tutorials.create);
    // Retrieve all Tutorials
    router.get("/", tutorials.findAll);
    // Retrieve all published Tutorials
    router.get("/published", tutorials.findAllPublished);
    // Retrieve a single Tutorial with id
    router.get("/:id", tutorials.findOne);
    // Update a Tutorial with id
    router.put("/:id", tutorials.update);
    // Delete a Tutorial with id
    router.delete("/:id", tutorials.delete);
    // Create a new Tutorial
    router.delete("/", tutorials.deleteAll);
    app.use('/api/tutorials', router);
  };