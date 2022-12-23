const mongoose = require("mongoose");

const Schema = mongoose.Schema;


const skinGoalSchema = new Schema(
    {

        SkinGoal:{
            type:String, required:true , unique:true, uppercase:true
        },

        SkinGoalName:{
            type:String, required:true 
        },

         ActiveIngredients:{
            type:Array, required:true
        }

        
    }
)

const SkinGoals = mongoose.model("SkinGoals", skinGoalSchema);



module.exports = SkinGoals;

