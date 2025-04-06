import mongoose from "mongoose";

const sessionSchema = new mongoose.Schema({
  userId: String,
  expiresAt: Date,
});

export const Session = mongoose.model("Session", sessionSchema);
