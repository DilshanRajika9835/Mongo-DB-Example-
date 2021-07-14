const express = require('express');
const mongoose = require('mongoose');
const route=express.Router();
const CustomerModel=require('../dto/customerdto');
route.use(express.json());
route.use(express.urlencoded({ extended: true })); 

route.get('/find', (req, res) => {
  const id=req.headers.id
  console.log(id)
  CustomerModel.findById(id).exec()
  .then(
    doc=>{
      if(doc){
        res.status(200).json(doc);
      }else{
        res.status(404).json({
          error:"No Valid Entry Found Provided Customer ID"
        });
      }
    }
  ).catch(
err=>{
  res.status(500).json({
    error:err
  });
      
      } 
  )
  })
//find all customer in database
  route.get('/', (req, res) => {
    CustomerModel.find().exec()
    .then(
      docs=>{
        if(docs.length>0){
          res.status(200).json(docs); 
        }else{
          res.status(404).json("Not Entires Data"); 
        }
         
      }
    ).catch(
  err=>{
    res.status(500).json({
      error:err
    });
        
        } 
    )
    })
  route.post('/save', (req, res) => {
   const customerModal=new CustomerModel({
    _id:new mongoose.Types.ObjectId(),
    name:req.body.name,
    address:req.body.address,
    salary:req.body.salary,
   });
   customerModal.save().then(result=>{
      console.log(result)
   }).catch(err=>{
    console.log(err)
   });
   res.status(201).json({
    message:"Customer Save Successfully",
    customer:customerModal

});
console.log(req.body.name)
  });
 
  route.delete('/delete', (req, res) => {
    const id=req.body.id;
    CustomerModel.deleteOne({_id:id}).exec()
    .then(result=>{
        res.status(200).json(result);
    })
    .catch(err=>{
      res.status(500).json({
        error:err
      });
    })
  });
  route.put('/update', (req, res) => {  
   CustomerModel.updateOne({"_id":req.body._id},{$set:{"name":req.body.name,"address":req.body.address,"salary":req.body.salary}}).exec()
   .then(result=>{
    res.status(200).json(result);
      }).catch(err=>{
        res.status(500).json({
          error:err
        });
     })
  });
  module.exports=route