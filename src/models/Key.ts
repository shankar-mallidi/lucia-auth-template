import mongoose from "mongoose";

const keySchema = new mongoose.Schema({
  providerId: String,
  providerUserId: String,
  password: String,
});

export const Key = mongoose.model("Key", keySchema);
