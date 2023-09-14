import mongoose from "mongoose";

const AssgmentSchema=mongoose.Schema({
    owner:{
        type: mongoose.Schema.Types.ObjectId,
        ref:'user',
        required: true
    },
    Assgiment:{
        type:String,
        required:true
    },
    Description:{
        type:String,
        required:true
    },
        timestamps:true,
    
})
const Assgimentmodel=mongoose.model('Assgiment',AssgmentSchema);
export default Assgimentmodel;