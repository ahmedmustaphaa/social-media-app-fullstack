import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import { connectedDb } from "./config/Db.js";
import { serve } from "inngest/express";
import { inngest,functions } from "./inngest/index.js";
dotenv.config();

const app = express();

// Middleware
app.use(cors());
app.use(express.json());
app.use("/api/inngest", serve({ client: inngest, functions }));


app.get("/", (req, res) => {
  res.send("hello pro");
});

await connectedDb()

const PORT = process.env.PORT || 4000;
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
