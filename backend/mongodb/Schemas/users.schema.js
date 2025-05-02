import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
     username: {
          type: String,
          required: true,
     },
     useremail: {
          type: String,
          required: true,
          unique: true,
     },
     userphone: {
          type: Number,
          required: true,
          unique: true,
     },
     userpassword: {
          type: String,
          required: true,
     },
});

const userModel = new mongoose.model("Users", userSchema);

export default userModel;
