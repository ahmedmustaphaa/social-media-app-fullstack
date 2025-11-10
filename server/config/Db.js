import mongoose from "mongoose";

export const connectedDb=async (req,res)=>{
    await mongoose.connect(process.env.MONGOOSE_URL);

    console.log("mongoose connected successfully ")
}
