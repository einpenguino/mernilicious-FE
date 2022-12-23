const mongoose = require("mongoose");
const Schema = mongoose.Schema;


const RegimeSchema = new Schema(
    {
        Username:{
            type:Schema.Types.ObjectID, 
            ref:'UserCreds'
        },

        AMCleanser:{
            type:String
        },

        AMTreatment:{
             type:Array
        },

        AMMoisturiser:{
             type:String
        },

        AMSunscreen:{
            type:String
        },

        PMCleanser:{
            type:String
        },

        PMTreatment:{
             type:Array
        },

        PMMoisturiser:{
             type:String
        },

        PMSunscreen:{
            type:String
        }


        
    }
)

const Regime = mongoose.model("Regime", RegimeSchema);

module.exports = Regime;

