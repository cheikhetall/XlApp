const mongoose=require('mongoose')


const clothSchema=new mongoose.Schema({
    text:{
        type:String,
    }
    
})
    const Cloth = mongoose.model("Cloth",clothSchema);

  module.exports=Cloth