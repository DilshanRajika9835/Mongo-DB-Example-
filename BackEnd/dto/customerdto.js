const mongoose = require('mongoose');
const CustomerSchema = mongoose.Schema({
    _id:mongoose.Schema.Types.ObjectId,
    name:String,
    address:String,
    salary:String
  },
  {collection:'CustomerSchema',
  versionKey: false //here
});
module.exports=mongoose.model('CustomerModel', CustomerSchema);























// const userSchema = new mongoose.Schema({
//     id:{
//         type:String,
//         require:true
//     },
//     name:{
//         type:String,
//         require:true
//     },
//     address:{
//         type:String,
//         require:true
//     },
//     salary:{
//         type:String,
//         require:true
//     }
    
//   }
//   );
//    module.exports=mongoose.model("User", userSchema);