const express = require('express')
const customer = require('../BackEnd/routs/customer')
const mongoose = require('mongoose');
const app = express()
const port = 3000
app.use('/customer',customer)
 app.use(express.json());
 app.use(express.urlencoded({ extended: true })); 

 mongoose.connect('mongodb://localhost:27017/MyApp',{ useNewUrlParser: true, useUnifiedTopology: true,useFindAndModify:true,useCreateIndex:true }, {
  
}).then(()=>{
   app.listen(port, () => {
      console.log(`Server Running... Configure with Mongo DB: ${port} `) 
    })   

}).catch(err=>{
   console.log(`db error ${err.message}`);
   process.exit(-1)
})

