const mongoose = require("mongoose");

const Schema = mongoose.Schema;


const userProfileSchema = new Schema(
    {
        Username:[{
            type:Schema.Types.ObjectID, 
            ref:'UserCred'
        }],

        SkinType:{
            type:String, required:true, lowercase: true
        },

        Sensitivity:{
            type:Boolean, required:true
        },

        SkinGoal:{
            type:String, required:true
        },

         RegimeID:{
            type:Array, required:true
        }

        
    }
)

const UserProfiles = mongoose.model("UserProfiles", userProfileSchema);



module.exports = UserCreds;
