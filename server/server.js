import express from 'express';
import { connectDb } from './config/Db.js';
import dotenv from "dotenv";
import { serve } from "inngest/express";
import { Inngest,functions } from 'inngest';

dotenv.config(); 

const app=express();

app.use(express.json());
app.use("/api/inngest", serve({ client: inngest, functions }));

await connectDb()
app.get('/',(req,res)=>{
    res.end("hello ahmed")
})

app.listen(4000,(req,res)=>{
    console.log("welcome pro")
})
console.log(process.env.MONGOSE_URL)