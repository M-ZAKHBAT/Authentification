import mongoose from "mongoose";

const { Schema } = mongoose;

const userSchema = new Schema({
  id: mongoose.ObjectId,
  name: {
    required: true,
    type: String,
  },

  email: {
    required: true,
    type: String,
    unique: true,
  },

  password: {
    required: true,
    type: String,
  },
  // salt: {
  //   required: true,
  //   type: String,
  // },
});
export const User = mongoose.model("User", userSchema, "Users");
