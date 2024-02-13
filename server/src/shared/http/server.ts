import express, { NextFunction, Request, Response } from "express";
import cors from "cors";
import "dotenv/config";

import { connectDB } from "./db";

import userRouter from "../../routes/users.routes";
import { AppError } from "../errors/AppError";

const app = express();

connectDB();

// middlewares
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

app.use(
  (error: Error, request: Request, response: Response, next: NextFunction) => {
    if (error instanceof AppError) {
      return response.status(error.statusCode).json({
        status: "error",
        message: error.message,
      });
    }
    console.log(error);
    return response.status(500).json({
      status: "error",
      message: "Internal server error",
    });
  }
);

// routes
app.use("/api/users", userRouter);

const PORT = process.env.PORT || 7000;

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
