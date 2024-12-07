const mongoose=require("mongoose");
const validateMongoDbId=(id)=>{
    const isValid=mongoose.Types.ObjectId.isValid(id);
    if(!isValid) throw new Error("This id is not valid or not Found");
};
module.exports=validateMongoDbId;
/*1:51:10
bt error still pending because it is not showing the full details after blck unblck
*/