import mongoose from "mongoose";

export const  connectDB = async () =>{

    await mongoose.connect('mongodb+srv://amithshankar17:amithshankar123@cluster0.wtgwqgg.mongodb.net/food-del').then(()=>console.log("DB Connected"));
   
}


