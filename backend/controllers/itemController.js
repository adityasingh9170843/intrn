import Item from "../models/ItemModel.js";

export const addItem = async (req,res)=>{
    try{
        const{name,type,description} = req.body;
        const CoverImage = req.files["coverImage"]?.[0]?.path; 
        const additionalImages = req.files["additionalImages"]?.map((img) => img.path); 
        const newItem = new Item({name,type,description,CoverImage,additionalImages});
        if(newItem){
            console.log("newItem",newItem);
            const savedItem = await newItem.save();
            res.status(201).json(savedItem);
        }
    }catch(error){
        res.status(500).json({message:error.message});
    }
}


export const viewItems = async (req,res)=>{
    try{
        const items = await Item.find();
        res.status(200).json(items);
    }catch(error){
        res.status(500).json({message:error.message});
    }
}