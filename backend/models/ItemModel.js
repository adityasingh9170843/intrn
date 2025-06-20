import mongoose from "mongoose";



const itemSchema = new mongoose.Schema({
    name:{
        type:String,
        require:true
    },
    type:{
        type:String,
        require:true
    },
    description:{
        type:String
    },
    CoverImage:{
        type:String
    },
    additionalImages:{
        type:[String]
    }
});

const Item = mongoose.model("Item",itemSchema);
export default Item