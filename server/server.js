import express from "express";
import dotenv from "dotenv";
import { connectDb } from "./config/Db.js";
import { serve } from "inngest/express";

// خد الـ inngest و functions من ملفك
import { inngest, functions } from "./inngest/index.js";

dotenv.config();

const app = express();
app.use(express.json());

// Inngest endpoint
app.use("/api/inngest", serve({ client: inngest, functions }));

// Connect DB
await connectDb();

app.get("/", (req, res) => {
  res.end("hello ahmed");
});

app.listen(4000, () => {
  console.log("welcome pro");
});
