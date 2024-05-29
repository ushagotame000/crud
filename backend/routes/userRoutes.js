import express from "express";
import mongoose from "mongoose";
import { User } from "../models/userModel";
const router = express.Router();


//create 
router.post("/",async(req,res)=>{
    const {name,email,age} = req.body;
  
   try{
    const userData = await User.create({
      name: name,
      email: email,
      age: age,
    });
  res.sendStatus(201).json(userAdded)
  }
  
  catch(error){
      res.sendStatus(400).json({error:error.message});
    }
  })
  
  //get 
 router.get("/",async (req,res) =>{
    try{
      const showAll = await User.find();
      res.sendStatus (201).json(showAll)
    }
    catch(error){
      console.log(error);
      res.sendStatus(500).json({error:error.message});
  
    }
  })


//get single user
router.get("/:id",async (req,res) =>{
const {id} = req.params;

  try{
    const showAll = await User.findById({_id :id});
    res.sendStatus (201).json(singleUser);
  }
  catch(error){
    console.log(error);
    res.sendStatus(500).json({error:error.message});

  }
})


//delete
router.delete("/:id",async (req,res) =>{
  const {id} = req.params;
  
    try{
      const deleteUser = await User.findByIdAndDelete({_id :id});
      res.sendStatus (201).json(singleUser);
    }
    catch(error){
      console.log(error);
      res.sendStatus(500).json({error:error.message});
  
    }
  })
  
  //put or update

  router.patch("/:id", async(rrq,res)=>{
    const{id} = req.params;
    try{
      const {name, email,age}= req.body;
      try {
        const updateUser = await User.findByIdAndUpdate(id,req.body,{
          new:true,
        });
res.status(200).json(updateUser);


      } catch (error) {
        console.log(error);
        res.status(500).json({error:error.message});
      }
    }
  })



  export default userRoutes;
  
  
  
  