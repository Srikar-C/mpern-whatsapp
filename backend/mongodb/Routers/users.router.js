import mongoose from "mongoose";
import express from "express";
import userModel from "../Schemas/users.schema.js";

const router = express.Router();

router.post("/register", async (req, res) => {
     const { username, useremail, userphone, userpassword } = req.body;
     if (!username || !useremail || !userphone || !userpassword) {
          return res.status(403).json({ error: "Please fill all the fields" });
     }
     const existUser = await userModel.findOne({
          useremail: useremail,
          userphone: userphone,
     });
     if (existUser) {
          console.log("User already exists");
          return res.status(404).json({ error: "User already exists" });
     }
     const existEmail = await userModel.findOne({ useremail: useremail });
     if (existEmail) {
          console.log("Email already exists");
          return res.status(404).json({ error: "Email already exists" });
     }
     const existPhone = await userModel.findOne({ userphone: userphone });
     if (existPhone) {
          console.log("Phone already exists");
          return res.status(404).json({ error: "Phone already exists" });
     }
     const user = new userModel({
          username,
          useremail,
          userphone,
          userpassword,
     });
     await user.save();
     res.status(201).json({ message: "User registered successfully", user });
});

router.post("/login", async (req, res) => {
     const { useremail, userpassword } = req.body;
     if (!useremail || !userpassword) {
          return res.status(403).json({ error: "Please fill all the fields" });
     }
     const user = await userModel.findOne({ useremail: useremail });
     if (!user) {
          console.log("User not found");
          return res.status(404).json({ error: "User not found" });
     }
     if (user.userpassword !== userpassword) {
          console.log("Invalid password");
          return res.status(401).json({ error: "Invalid password" });
     }
     console.log("User logged in successfully");
     res.status(200).json({ message: "User logged in successfully", user });
});

export default router;
