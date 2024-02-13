import { Request, Response } from "express";
import { validationResult } from "express-validator";

import User from "../models/user";
import generateTokenAndSetCookie from "../shared/utils/generateTokenAndSetCookies";

const registerUser = async (req: Request, res: Response) => {
  const errors = validationResult(req);

  if (!errors.isEmpty()) {
    return res.status(400).json({ message: errors.array() });
  }

  const { email, password, firstName, lastName } = req.body;

  try {
    const user = await User.findOne({ email });

    if (user) {
      return res.status(400).json({ message: "User already exists" });
    }

    const newUser = new User({ email, password, firstName, lastName });
    await newUser.save();

    if (newUser) {
      generateTokenAndSetCookie(newUser._id, res);

      return res
        .status(201)
        .json({ message: "User created successfully", data: newUser });
    }
  } catch (err) {
    console.log(err);
    return res.status(500).json({ message: "Server error" });
  }
};

export { registerUser };
