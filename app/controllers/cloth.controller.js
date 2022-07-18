
const Cloth=require('../models/cloth.model')

const fs=require('fs')
// Create and Save a new Tutorial
exports.create = (req, res) => {
  console.log(req.body.text)


    // if (!req.body.title) {
    //     res.status(400).send({ message: "Content can not be empty!" });
    //     return;
    //   }
   
    
      const newCloth = new Cloth({
        text:req.body.text,
        img:{
          data:fs.readFileSync("images/"+req.file.filename),
          contentType:"image/png"
        },
        seasons:req.body.seasons ,
        gender:req.body.gender,
        type:req.body.type,
        discount:req.body.discount,
      });       
    
      // Save Tutorial in the database
      
      newCloth
        .save()
        .then(data => {
          console.log("worked")
          res.send(data);
        })
        .catch(err => {
          res.status(500).send({
            message:
              err.message || "Some error occurred while creating the Tutorial."
          });
        });
};
// Retrieve all Tutorials from the database.
exports.findAll = async (req, res) => {
  let fonem=await Cloth.find()
  res.send(fonem)
};
// Find a single Tutorial with an id
exports.findOne = (req, res) => {
  
};
// Update a Tutorial by the id in the request
exports.update = (req, res) => {
  
};
// Delete a Tutorial with the specified id in the request
exports.delete = (req, res) => {
  
};
// Delete all Tutorials from the database.
exports.deleteAll = (req, res) => {
  
};
// Find all published Tutorials
exports.findAllPublished = (req, res) => {
  
};