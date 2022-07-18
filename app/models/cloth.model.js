const mongoose=require('mongoose')
 const schemaOptions = {
        timestamps: {
          createdAt: 'created_at',
          updatedAt: 'updated_at'
        },
      };
const clothSchema=new mongoose.Schema({
    text:{
        type:String,
    },
   img:{
    data:Buffer,
    contentType:String
   },
   seasons:String ,
   gender:String,
   type:String,
   discount:Number,

},schemaOptions)
    const Cloth = mongoose.model("Cloth",clothSchema);

  module.exports=Cloth