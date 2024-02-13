import express, { Request, Response } from "express";
import cors from "cors";
import "dotenv/config";

import { connectDB } from "./db";

const app = express();

// middlewares
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

connectDB();

// routes
app.get("/api/test", (req: Request, res: Response) => {
  res.json({ message: "Hello from server!" });
});

const PORT = process.env.PORT || 7000;

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
