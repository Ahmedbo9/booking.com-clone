import express, { Request, Response } from "express";
import User from "../models/user";
import Jwt from "jsonwebtoken";

const router = express.Router();

router.post("/register", async (req: Request, res: Response) => {
  try {
    let user = await User.findOne({
      email: req.body.email,
    });

    if (user) {
      return res.status(400).json({
        message: "User already exists",
      });
    }

    user = new User({
      email: req.body.email,
      password: req.body.password,
      firstName: req.body.firstName,
      lastName: req.body.lastName,
    });

    await user.save();

    const token = Jwt.sign({userId: user._id}, process.env.JWT_SECRET as string, {
        expiresIn: "1d",
    });

    res.cookie("auth_token", token, {
        httpOnly: true,
        secure: process.env.NODE_ENV === "production",
        maxAge:86400000,
        
    });

    return res.status(201).json({ message : "User created successfully"});


  } catch (error) {
    console.error(error);
    res
      .status(500)
      .json({ message: "something went wrong , please try again later" });
  }
});

export default router;
