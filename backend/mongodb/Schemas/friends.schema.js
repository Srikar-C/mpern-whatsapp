import mongoose from "mongoose";

const friendSchema = new mongoose.Schema({
     userId: {
          type: mongoose.Schema.Types.ObjectId,
          ref: "Users",
          required: true,
     },
     friendName: {
          type: String,
          required: true,
     },
     friendPhone: {
          type: Number,
          required: true,
     },
     friendLastSeen: {
          type: Date,
          default: Date.now,
     },
     friendIsOnline: {
          type: Boolean,
          default: false,
     },
     status: {
          type: String,
          enum: ["pending", "accepted", "rejected"],
          default: "pending",
     },
});
