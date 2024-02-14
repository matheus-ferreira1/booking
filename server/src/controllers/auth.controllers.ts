import { Request, Response } from "express";
import { validationResult } from "express-validator";
import bcrypt from "bcryptjs";

import User from "../models/user";
import generateTokenAndSetCookie from "../shared/utils/generateTokenAndSetCookies";

const loginUser = async (req: Request, res: Response) => {
  const errors = validationResult(req);

  if (!errors.isEmpty()) {
    return res.status(400).json({ message: errors.array() });
  }

  const { email, password } = req.body;

  try {
    const user = await User.findOne({ email });

    if (!user) {
      return res.status(400).json({ message: "Invalid credentials" });
    }

    const isMatch = await bcrypt.compare(password, user.password);

    if (!isMatch) {
      return res.status(400).json({ message: "Invalid credentials" });
    }

    generateTokenAndSetCookie(user._id, res);

    return res
      .status(200)
      .json({ message: "User logged in successfully", userId: user._id });
  } catch (err) {
    console.log(err);
    res.status(500).json({ message: "Something went wrong" });
  }
};

const tokenCheck = (req: Request, res: Response) => {
  res.status(200).send({ userId: req.userId, message: "Token is valid" });
};

export { loginUser, tokenCheck };
