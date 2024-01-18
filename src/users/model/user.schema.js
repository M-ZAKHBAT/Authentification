import mongoose from "mongoose";

const {Schema} = mongoose

const userSchema = new Schema({
  name: {
    required: true,
    type: String,
  },
  email: {
    required: true,
  },
  password: {
    required: true,
    type: String,
  },
});