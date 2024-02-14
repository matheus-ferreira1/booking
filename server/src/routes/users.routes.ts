import express from "express";
import { check } from "express-validator";

import { registerUser } from "../controllers/users.controllers";

const userRouter = express.Router();

userRouter.post(
  "/register",
  [
    check("email", "A valid e-mail is required").isEmail(),
    check(
      "password",
      "Password is required and must have 6 or more characters"
    ).isLength({
      min: 6,
    }),
    check("firstName", "First Name is required").isString().not().isEmpty(),
    check("lastName", "Last Name is required").isString().not().isEmpty(),
  ],
  registerUser
);

export { userRouter };
