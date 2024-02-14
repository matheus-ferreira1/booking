import express from "express";

import { loginUser } from "../controllers/auth.controllers";
import { check } from "express-validator";

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

export { authRouter };
