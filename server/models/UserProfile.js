const mongoose = require("mongoose");

const Schema = mongoose.Schema;


const userProfileSchema = new Schema(
    {
        Username:{
            type:Schema.Types.ObjectID, 
            ref:'UserCreds'
        },

        SkinType:{
            type:String, required:true
        },

        Sensitivity:{
            type:Boolean, required:true
        },

        SkinGoal:{
            type:Schema.Types.ObjectID, 
            ref:'SkinGoal_Profile'
        },

         RegimeID:{
            type:Array, required:true
        }

        
    }
)

const UserProfiles = mongoose.model("UserProfiles", userProfileSchema);



module.exports = UserProfiles;

