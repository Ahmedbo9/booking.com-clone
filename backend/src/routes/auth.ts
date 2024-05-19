import express, { Request, Response } from "express";
import { check, validationResult } from "express-validator";
import User from "../models/user";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import verifyToken from "../middleware/auth";

const router = express.Router();
router.post(
  "/sign-in",
  [
    check("email", "Email is required").isEmail(),
    check("password", "Password with at least 8 digits is required").isLength({
      min: 8,
    }),
  ],
  async (req: Request, res: Response) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ message: errors.array() });
    }

    const { email, password } = req.body;
    try {
      const user = await User.findOne({ email });
      if (!user) {
        return res.status(400).json({ message: "Wrong credentials" });
      }

      const isPasswordMatch = await bcrypt.compare(password, user.password);

      if (!isPasswordMatch) {
        return res.status(400).json({ message: "Wrong credentials" });
      }

      const token = jwt.sign(
        { userId: user._id },
        process.env.JWT_SECRET as string,
        {
          expiresIn: "1d",
        }
      );

      res.cookie("auth_token", token, {
        httpOnly: true,
        secure: process.env.NODE_ENV === "production",
        maxAge: 86400000,
      });

      res
        .status(200)
        .json({ message: "Logged in successfully", userId: user._id });
    } catch (error) {
      console.error(error);

      res.json({ message: "Server error" });
    }
  }
);

// check if the token send by the client is valid
router.get("/validate-token",verifyToken, async (req: Request, res: Response) => {
  res.status(200).json({ message: "Token is valid" , userId: req.userId});
});

export default router;
