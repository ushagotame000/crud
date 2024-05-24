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

  export default userRoutes;
  
  
  
  