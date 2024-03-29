const mongoose=require("mongoose");
const schema=mongoose.Schema;
const locationSchema=new schema({
    name: {
    type:String,
    required:true
    }
});
module.exports=mongoose.model('sample',locationSchema,'sampleCollection')