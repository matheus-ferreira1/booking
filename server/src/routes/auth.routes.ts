import express from "express";
import { check } from "express-validator";

import { loginUser, tokenCheck } from "../controllers/auth.controllers";
import verifyToken from "../middleware/auth";

const authRouter = express.Router();

authRouter.post(
  "/login",
  [
    check(
      "password",
      "Password is required and must have 6 or more characters"
    ).isLength({
      min: 6,
    }),
  ],
  loginUser
);

authRouter.get("/validate-token", verifyToken, tokenCheck);

export { authRouter };
