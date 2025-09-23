import mongoose from "mongoose"

export const connectDb=async()=>{
    try{

        await mongoose.connect(process.env.MONGOSE_URL);
        console.log("mongoose connected successfully")
    }catch(error){
        console.log(error)
    }
}