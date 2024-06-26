import mongoose from "mongoose";


//creating schema
 export const userSchema= new mongoose.Schema({
    name:{
        type: String,
        require:true
    },

    email:{
        type: String,
        unique: true,
        require: true
    },
    age:{
        type: Number,

    }, 
},
{ timestamps: true}
);

//create Model
export const User = mongoose.model('User', userSchema)
// module.exports= User;

